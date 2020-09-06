import React from 'react';
import {
  Text, 
  View,     
  TextInput,
  ScrollView, 
  StatusBar, 
  TouchableOpacity,  
  Image
  } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-community/picker';
import { useTheme } from 'react-native-paper';
import styles from './styles'
import { isEmpty } from '../../utils/validation';
import {getUser,getAccessToken} from '../../utils/api'
import axios from "../../apiConfig";
import ActivityIndicator from 'react-native-loading-spinner-overlay'
import ImagePicker from 'react-native-image-picker';

const addBusiness = ({navigation}) => {
  const [data, setData] = React.useState({
    businessName: '',
    address: '',
    emailAddress:'',
    phoneNumber: '',
    website:'',
    notes:null,  
    type:'Services',
    relationShip:'Personal Relationship',  
    offer:'Real Estate',
  });

  const options = {
    title: 'Select a logo',
    takePhotoButtonTitle:'Take a logo',
    chooseFromLibraryButtonTitle:'Choose from gallery',
    quality:1
  };
  const [logoSource,setLogoSource] = React.useState(null);
  const [base64Source,setBase64Source] = React.useState(null);
  
  const [showLoader, setLoader] = React.useState(false);
  const [customerId, setCustomerId] = React.useState();
  const [groupId, setGroupId] = React.useState();
  const [typeItem, setType] = React.useState({});
  const [relationItem, setRelationItem] = React.useState({});
  const [offerItem, setOfferItem] = React.useState({});
  const [userToken, setUserToken] = React.useState(null);
  const { colors } = useTheme();
  React.useEffect(() => {
    getAccessToken().then((value)=>setUserToken(value));
    getUser().then((value) => {
        setCustomerId(value.userId)
        setGroupId(value.groupId)
    });
    getType()
    getRelation()
    getOffer()
},[]);

  const getType = () =>{
    setLoader(true);
    axios.get('krypson-business/type/search?searchCriteria[pageSize]=50')
    .then(function (response) {       
        const typeItems = response.data.items              
        setType(response.data.items)
        return true;
    })
    .catch(function (error) {
        console.log(error);    
        setLoader(false);
    });
  }

  const getRelation = () =>{
    axios.get('krypson-business/relationship/search?searchCriteria[pageSize]=50')
    .then(function (response) {         
        const typeItems = response.data.items                   
        setRelationItem(response.data.items)
        return true;
    })
    .catch(function (error) {
        console.log(error);    
        setLoader(false);
    });
  }
  const getOffer = () =>{
    axios.get('krypson-business/offer/search?searchCriteria[pageSize]=50')
    .then(function (response) {              
        setLoader(false);
        const typeItems = response.data.items                  
        setOfferItem(response.data.items)
        return true;
    })
    .catch(function (error) {
        console.log(error);    
        setLoader(false);
    });
  }
  
  const submitBusinessForm = () =>{
    let errorMsg = "";
    if(isEmpty(data.businessName)){
        errorMsg += "Please enter business name \n"
    }
    if(isEmpty(data.address)){
        errorMsg += "Please enter address \n"
    }
    if(isEmpty(data.phoneNumber)){
        errorMsg += "Please enter phone number \n"
    }
    if(isEmpty(data.emailAddress)){
        errorMsg += "Please enter email address \n"
    }

    if(!isEmpty(errorMsg)){
        alert(errorMsg)
        return false
    }

    setLoader(true);    
    
    const businessData = {
        "name":data.businessName.toString(),
		"type":data.type,
		"relationship":data.relationShip,
		"offer": data.offer,
		"address":data.address.toString(),
		"phone_no":data.phoneNumber.toString(),
		"email" : data.emailAddress.toString(),
		"website":data.website?data.website.toString():'',
        "customer_id":customerId.toString(),
        "customer_group_id" : groupId.toString(),
        "status":1,
        "note":(data.notes==null)?"":data.notes.toString(),
        "image":(base64Source==null)?'':base64Source
    }
    console.log(businessData);
    axios.post('krypson-business/busniess', 
        {"busniess": businessData}
    ).then(function (response) {  
        console.log(response);            
        setLoader(false);
        alert("Bussiness Details has been added successfuly")             
        setData({businessName: '',address: '',emailAddress:'',phoneNumber: '',website:'',notes:'',  
        type:'Services', relationShip:'Personal Relationship', offer:'Real Estate',})
        setBase64Source(null)
        setLogoSource(null)
        return true;
        //navigation.navigate("Dashboard");
    })
    .catch(function (error) {
        console.log(error.response.data.message);
        alert(error.response.data.message)
        setLoader(false);
    });
    
    return false   

}

const slectePhoto =()=>{
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);       
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if(response.fileSize > 50000){
            alert("Logo size should be less than 50KB");
            return false
        }else if(response.type=="image/jpg" || response.type=="image/jpeg" || response.type=="image/png" || response.type=="image/gif") {
          const source = { uri: response.uri };
          
          const base64Uri = JSON.stringify({
              "file":response.fileName,
              "content":{"base64_encoded_data":'data:image/jpeg;base64' + response.data},
               "name":response.fileName,
               "type":response.type});
          setBase64Source(base64Uri);
          setLogoSource(source);
        }else{
            alert("Logo image should be jpg/png/gif")
            return false
        }
      });
}
  


  return (
    <View style={styles.container}>
        <StatusBar />
      <View style={styles.header}>
          <Text style={styles.text_header}>Add A Business</Text>
      </View>

      <View style={{ position: 'absolute', top: "50%", right: 0, left: 0, zIndex: 1 }}>
            <ActivityIndicator visible={showLoader} color="#6379FF" />
      </View>

      <View style={styles.sub_container} />
      <ScrollView>        
            
            <Text style={styles.referral}>Type of Business</Text>
            <View style={styles.pickerWrapper}>
                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                <Picker
                    mode="dropdown"
                    style={styles.pickerContentB2b}
                    selectedValue={data.type}
                    placeholderStyle={{ color: "#E2E2E2" }}
                    placeholderIconColor={"#E2E2E2"}     
                    onValueChange={(itemValue, itemIndex) =>
                        setData({...data,type: itemValue})
                      }
                >
                    {
                        (typeItem.length>0)?typeItem.map((item, index) =>{
                            if(item.status==="1"){
                                return <Picker.Item label={item.name} value={item.type_id} key={index} />
                            }
                        }
                        ):null
                    }
                    
                </Picker>
            </View>

        
            <Text style={styles.referral}>How Did You Acquire The Bussiness</Text>
            <View style={styles.pickerWrapper}>
                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                <Picker
                    mode="dropdown"
                    style={styles.pickerContentAcquire}
                    selectedValue={data.relationShip}
                    placeholderStyle={{ color: "#E2E2E2" }}
                    placeholderIconColor={"#E2E2E2"}                     
                    onValueChange={(itemValue, itemIndex) =>
                        setData({...data,relationShip: itemValue})
                      }   
                >
                    {
                        (relationItem.length>0)?relationItem.map((item, index) =>{
                            if(item.status==="1"){
                                return <Picker.Item label={item.name} value={item.relationship_id} key={index} />
                            }
                        }
                        ):null
                    }
                </Picker>
            </View>
            
            <Text style={styles.referral}>What Services/Products Do They Offer?</Text>            
            <View style={styles.pickerWrapper}>
                <Ionicons name="md-checkmark" style={styles.checkedIcon} /> 
                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                <Picker
                    mode="dropdown"
                    style={styles.pickerContentRealState}
                    selectedValue={data.offer}
                    placeholderStyle={{ color: "#E2E2E2" }}
                    placeholderIconColor={"#E2E2E2"}                  
                    onValueChange={(itemValue, itemIndex) =>
                        setData({...data,offer: itemValue})
                      }       
                >
                    {
                        (offerItem.length>0)?offerItem.map((item, index) =>{
                            if(item.status==="1"){
                                return <Picker.Item label={item.name} value={item.offer_id} key={index} />
                            }
                        }
                        ):null
                    }
                </Picker>
            </View>
                        
            
            <View style={styles.header}>
              <Text style={styles.referralInfo}>Enter Business Information</Text>
            </View>
            <Text style={styles.text_footer}>Business Name</Text>
            <View style={styles.action}>
                
                <TextInput 
                    name="businessName"
                    id="businessName"
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={data.businessName}
                    onChangeText={(val) => setData({...data,businessName:val})}
                />
               
            </View>

            <Text style={styles.text_footer}>Address</Text>
            <View style={styles.action}>
               
                <TextInput 
                    name="address"
                    id="address"
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={data.address}
                    onChangeText={(val) => setData({...data,address:val})}
                />                
            </View>

            <Text style={styles.text_footer}>Phone Number</Text>
            <View style={styles.action}>
               
                <TextInput 
                    name="phoneNumber"
                    id="phoneNumber"
                    value={data.phoneNumber}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setData({...data,phoneNumber:val})}
                    maxLength={12}
                    keyboardType='phone-pad'
                />
               
            </View>

            <Text style={styles.text_footer}>Email Address</Text>
            <View style={styles.action}>
               
                <TextInput 
                    name="emailAddress"
                    id="emailAddress"
                    value={data.emailAddress}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setData({...data,emailAddress:val})}
                    keyboardType="email-address"
                />
               
            </View>

            <Text style={styles.text_footer}>Website</Text>
            <View style={styles.action}>
               
                <TextInput 
                    name="website"
                    id="website"
                    value={data.website}
                    placeholder="www.website.com"
                    placeholderStyle={{ color: "#E2E2E2" }}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setData({...data,website:val})}                
                />
               
            </View>
           

           
            <Text style={styles.text_footer}>Enter Any Notes About Business</Text>
            <View style={styles.actionTerms}>
               
                <TextInput                    
                    multiline={true}
                    numberOfLines={5}
                    value={data.notes}                   
                    style={[styles.textInput,{}]}
                    autoCapitalize="none"                         
                    onChangeText={(val) => setData({...data,notes:val})}  
                />                
            </View>

            <Text style={styles.logo_text}>Select Business Logo</Text>  
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={logoSource !=null?logoSource:require('../../assets/noimage.png')}/>
            <TouchableOpacity style={styles.touch}                
            onPress = {slectePhoto}>            
                  <Text style={styles.select}>Select</Text>

            </TouchableOpacity>            
            </View>
                                 
            <View style={styles.button}>
            <TouchableOpacity
                style={[styles.signIn, { backgroundColor: '#6379FF' }]}
                onPress={() => submitBusinessForm()}
            >            
                  <Text style={[styles.textSign, {
                      color: '#fff'
                  }]}>Submit Business</Text>

            </TouchableOpacity>
            <Text style={styles.label}>Need Help Adding A Business?</Text>
            </View>
            </ScrollView>
      
    </View>
  );

}

export default addBusiness;