import React from 'react';
import {
  Text, 
  View,     
  TextInput,
  ScrollView, 
  StatusBar,
  TouchableOpacity
  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-community/picker';
import { useTheme } from 'react-native-paper';
import styles from './styles';
import { isEmpty } from '../../utils/validation';
import {getUser } from '../../utils/api'
import axios from "../../apiConfig";
import ActivityIndicator from 'react-native-loading-spinner-overlay'

const AddReferrals = ({navigation}) => {
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    contactMethodData: 'Email',
    notes: '',
    type: 'B2B',
    relationShip: 'B2B',
    service: 'B2B'
    
  });
    const [showLoader, setLoader] = React.useState(false);
    const [customerId, setCustomerId] = React.useState();
    const [groupId, setGroupId] = React.useState();
    const [typeItem, setType] = React.useState(
        [
            { key: 0, name: 'B2B', type_id: '1', status: '1' },
            { key: 1, name: 'B2C', type_id: '2', status: '1' },
            { key: 2, name: 'Other', type_id: '3', status: '1' }
        ]
    );
    const [relationItem, setRelationItem] = React.useState(
        [
            { key: 0, name: 'B2B', relation_id: '1', status: '1' },
            { key: 1, name: 'B2C', relation_id: '2', status: '1' },
            { key: 1, name: 'Other', relation_id: '3', status: '1' }
        ]
    );
    const [serviceItem, setServiceItem] = React.useState([
        { key: 0, name: 'B2B', service_id: '1', status: '1' },
        { key: 1, name: 'B2C', service_id: '2', status: '1' },
        { key: 2, name: 'Other', service_id: '3', status: '1' }
    ]);

    const [contactMethhod,setContactMethod] = React.useState([
        { key: 0, name: 'Email', contact_id: '1', status: '1' },
        { key: 1, name: 'Phone', contact_id: '2', status: '1' },
        { key: 2, name: 'Other', contact_id: '3', status: '1' }
    ])

    React.useEffect(() => {
        getUser().then((value) => {
            setCustomerId(value.userId)
            setGroupId(value.groupId)
        });

    }, []);


  const { colors } = useTheme();

  const submitReferral = () => {
    let errorMsg = "";
    if (isEmpty(data.firstName)) {
        errorMsg += "Please enter first name \n"
    }
    if (isEmpty(data.lastName)) {
        errorMsg += "Please enter last name \n"
    }
    if (isEmpty(data.phoneNumber)) {
        errorMsg += "Please enter phone number \n"
    }
    if (isEmpty(data.emailAddress)) {
        errorMsg += "Please enter email address \n"
    }

    if (!isEmpty(errorMsg)) {
        alert(errorMsg)
        return false
    }

    setLoader(true);

    const referralData = {
        "firstname": data.firstName.toString(),
        "lastname": data.lastName.toString(),
        "email": data.emailAddress.toString(),
        "phone_no": data.phoneNumber.toString(),
        "status": 1,
        "note": (data.notes == null) ? "" : data.notes.toString(),
        "referral_type": data.type,
        "relation": data.relationShip,
        "service": data.service,
        "contact_method": data.contactMethodData
    }

    console.log("Referral Data", referralData)
    setLoader(false)
    alert("Referral Details has been added successfuly")             
    setData({firstName: '',lastName: '',emailAddress:'',phoneNumber: '', notes:'',  
    type:'Services', relationShip:'Personal Relationship', service:'Real Estate',contactMethodData:'Email'})
    return false;   
}  


  return (
    <View style={styles.container}>
        <StatusBar />
      <View style={styles.header}>         
          <Text style={styles.text_header}>Add A Referral</Text>
      </View>

      <View style={{ position: 'absolute', top: "50%", right: 0, left: 0, zIndex: 1 }}>
            <ActivityIndicator visible={showLoader} color="#6379FF" />
      </View>  

      <View style={{ height: 5, width: 180, borderTopColor: '#6379FF', borderTopWidth: 3, marginBottom:20, marginLeft:115 }} />
      <ScrollView>
        
           
            
            <Text style={styles.referral}>Type of Referral</Text>
            <View style={styles.pickerWrapper}>
                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                <Picker
                    mode="dropdown"
                    style={styles.pickerContentB2b}
                    placeholder="Type of Referral"
                    placeholderStyle={{ color: "#E2E2E2" }}
                    placeholderIconColor={"#E2E2E2"}   
                    selectedValue={data.type}
                    onValueChange={(itemValue, itemIndex) =>
                        setData({ ...data, type: itemValue })
                    }    
                >
                {
                    (typeItem.length > 0) ? typeItem.map((item, index) => {
                        if (item.status === "1") {
                            return <Picker.Item label={item.name} value={item.type_id} key={index} />
                        }
                    }
                    ) : null
                }
                </Picker>
            </View>

        
            <Text style={styles.referral}>How Did You Acquire The Referral</Text>
            <View style={styles.pickerWrapper}>
                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                <Picker
                    mode="dropdown"
                    style={styles.pickerContentB2b}
                    placeholder="Acquire Referral"
                    placeholderStyle={{ color: "#E2E2E2" }}
                    placeholderIconColor={"#E2E2E2"}   
                    selectedValue={data.relationShip}
                    onValueChange={(itemValue, itemIndex) =>
                        setData({ ...data, relationShip: itemValue })
                    }     
                >
                {
                    (relationItem.length > 0) ? relationItem.map((item, index) => {
                        if (item.status === "1") {
                            return <Picker.Item label={item.name} value={item.relation_id} key={index} />
                        }
                    }
                    ) : null
                }
                </Picker>
            </View>
            
            <Text style={styles.referral}>What Services/Products Are They Inrested In?</Text>            
            <View style={styles.pickerWrapper}>
                <Ionicons name="md-checkmark" style={styles.checkedIcon} /> 
                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                <Picker
                    mode="dropdown"
                    style={styles.pickerContentRealState}
                    placeholder="Service"
                    placeholderStyle={{ color: "#E2E2E2" }}
                    placeholderIconColor={"#E2E2E2"}   
                    selectedValue={data.service}
                    onValueChange={(itemValue, itemIndex) =>
                        setData({ ...data, service: itemValue })
                    }     
                >
                {
                    (serviceItem.length > 0) ? serviceItem.map((item, index) => {
                        if (item.status === "1") {
                            return <Picker.Item label={item.name} value={item.service_id} key={index} />
                        }
                    }
                    ) : null
                }
                </Picker>
            </View>
                        
            
            <View style={styles.header}>
              <Text style={styles.referralInfo}>Enter Referral's Information</Text>
            </View>
            <Text style={styles.text_footer}>First Name</Text>
            <View style={styles.action}>
                
                <TextInput 
                    name="firstName"
                    id="firstName"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setData({ ...data, firstName: val })}
                />
               
            </View>

            <Text style={styles.text_footer}>Last Name</Text>
            <View style={styles.action}>
               
                <TextInput 
                    name="lastName"
                    id="lastName"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setData({ ...data, lastName: val })}
                   
                />                
            </View>

            <Text style={styles.text_footer}>Phone Number</Text>
            <View style={styles.action}>
               
                <TextInput 
                    name="phoneNumber"
                    id="phoneNumber"
                    style={styles.textInput}
                    autoCapitalize="none"                    
                    maxLength={12}
                    keyboardType='phone-pad'
                    onChangeText={(val) => setData({ ...data, phoneNumber: val })}
                />
               
            </View>

            <Text style={styles.text_footer}>Email Address</Text>
            <View style={styles.action}>
               
                <TextInput 
                    name="emailAddress"
                    id="emailAddress"
                    style={styles.textInput}
                    autoCapitalize="none"                   
                    keyboardType="email-address"
                    onChangeText={(val) => setData({ ...data, emailAddress: val })}
                />
               
            </View>

            <Text style={styles.text_footer}>Preferred Method of Contact</Text>
            <View style={styles.pickerWrapper}>
                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                <Picker
                    mode="dropdown"
                    style={styles.pickerContentB2b}
                    placeholder="preferred Method"
                    placeholderStyle={{ color: "#E2E2E2" }}
                    placeholderIconColor={"#E2E2E2"}  
                    selectedValue={data.contactMethodData}
                    onValueChange={(itemValue, itemIndex) =>
                        setData({ ...data, contactMethodData: itemValue })
                    }        
                >
                {
                    (contactMethhod.length > 0) ? contactMethhod.map((item, index) => {
                        if (item.status === "1") {
                            return <Picker.Item label={item.name} value={item.contact_id} key={index} />
                        }
                    }
                    ) : null
                }
                </Picker>
            </View>
           

           
            <Text style={styles.text_footer}>Enter Any Notes About Referral</Text>
            <View style={styles.actionTerms}>
               
            <TextInput
                multiline={true}
                numberOfLines={5}
                value={data.notes}
                style={[styles.textInput, {}]}
                autoCapitalize="none"
                onChangeText={(val) => setData({ ...data, notes: val })}
            />            
            </View>
                                 
            <View style={styles.button}>
            <TouchableOpacity
                        style={[styles.signIn, { backgroundColor: '#6379FF' }]}
                        onPress={() => submitReferral()}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Submit Referral</Text>

            </TouchableOpacity>
            
            <Text style={styles.label}>Need Help Adding A Referral?</Text>
            </View>
            </ScrollView>
      
    </View>
  );

}

export default AddReferrals;