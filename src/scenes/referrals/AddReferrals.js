import React from 'react';
import {
  Text, 
  View,     
  TextInput,
  ScrollView, 
  StatusBar 
  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-community/picker';
import { useTheme } from 'react-native-paper';
import styles from './styles'

const AddReferrals = ({navigation}) => {
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    emailAddress:'',
    phoneNumber: '',
    contactMethod:'',
    typeOfReferral:'B2B',
    acquireTheReferral:'Personal Relationship',
    serviceIntrest:'Real Estate Purchase',
    contactMethod:'Email'
    
  });
  const typeOfReferral = [
    { key: 0, label: 'B2B', value:'1' },
    { key: 1, label: 'B2C', value:'2'},
    { key: 1, label: 'Other', value:'3'}
];


  const { colors } = useTheme();

  const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false
        });
    }
}


  return (
    <View style={styles.container}>
        <StatusBar />
      <View style={styles.header}>         
          <Text style={styles.text_header}>Add A Referral</Text>
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
                >
                    <Picker.Item label = "B2B" value = "1" />
                    <Picker.Item label = "B2C" value = "2" />
                    <Picker.Item label = "Other" value = "0"/>
                </Picker>
            </View>

        
            <Text style={styles.referral}>How Did You Acquire The Referral</Text>
            <View style={styles.pickerWrapper}>
                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                <Picker
                    mode="dropdown"
                    style={styles.pickerContentAcquire}
                    placeholder="Acquire Referral"
                    placeholderStyle={{ color: "#E2E2E2" }}
                    placeholderIconColor={"#E2E2E2"}       
                >
                <Picker.Item label = "Personal Relationship" value = "1"  />
                <Picker.Item label = "Friend" value = "2"/>
                <Picker.Item label = "Relative" value = "3" />
                <Picker.Item label = "Advertisment" value = "4" />
                <Picker.Item label = "Other" value = "0"/>
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
                >
                <Picker.Item label = "Real Estate Purchase" value = "1" />
                <Picker.Item label = "Other" value = "2"/>
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
                    onChangeText={(val) => textInputChange(val)}
                />
               
            </View>

            <Text style={styles.text_footer}>Last Name</Text>
            <View style={styles.action}>
               
                <TextInput 
                    name="lastName"
                    id="lastName"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />                
            </View>

            <Text style={styles.text_footer}>Phone Number</Text>
            <View style={styles.action}>
               
                <TextInput 
                    name="phoneNumber"
                    id="phoneNumber"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    maxLength={12}
                    keyboardType='phone-pad'
                />
               
            </View>

            <Text style={styles.text_footer}>Email Address</Text>
            <View style={styles.action}>
               
                <TextInput 
                    name="emailAddress"
                    id="emailAddress"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    keyboardType="email-address"
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
                >
                <Picker.Item label = "Email" value = "1" />
                <Picker.Item label = "Call" value = "2"/>
                <Picker.Item label = "Fax" value = "3"/>
                <Picker.Item label = "Other" value = "0"/>
                </Picker>
            </View>
           

           
            <Text style={styles.text_footer}>Enter Any Notes About Referral</Text>
            <View style={styles.actionTerms}>
               
                <TextInput 
                    defaultValue={data.terms}
                    multiline={true}
                    numberOfLines={10}
                    name="terms"
                    id="terms"
                    style={styles.textarea}
                    autoCapitalize="none"   
                    editable={true}     
                />                
            </View>
                                 
            <View style={styles.button}>
            <LinearGradient
                  colors={['#6379FF', '#6379FF']}
                  style={styles.signIn}
              >
            
                  <Text style={[styles.textSign, {
                      color: '#fff'
                  }]}>Submit Referral</Text>
            </LinearGradient>
            <Text style={styles.label}>Need Help Adding A Referral?</Text>
            </View>
            </ScrollView>
      
    </View>
  );

}

export default AddReferrals;