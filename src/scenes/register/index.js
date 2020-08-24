import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar,
    StyleSheet,
    Alert
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useTheme } from 'react-native-paper';
import styles from './styles'
import axios from "../../apiConfig";
import { isEmpty, validateEmail } from '../../utils/validation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-community/picker';
import { connect } from 'react-redux';
import { checkLogin } from '../../actionCreator/login/actions';
import { AuthContext } from '../../components/context'
import ActivityIndicator from 'react-native-loading-spinner-overlay'

const RegisterScreen = ({ navigation }) => {
    const [data, setData] = React.useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        streetAddress: '',
        suite: '',
        city: '',
        state: '',
        zipCode: '',
        password: '',
        confirmPassword: '',   
        terms: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        isSelected: true,
        cardNumber: '',
        exp: '',
        cvv: '',       
        planValue: 0,
        managerValue: 1,

    });
    const [showLoader, setLoader] = React.useState(false)
    const [userToken, setUserToken] = React.useState(null)

    const { signIn } = React.useContext(AuthContext);

    const { colors } = useTheme();

    const [agreeTerm, setAgreeTerm] = React.useState(true);
    const [sameBillAddress,setSameBillAddress] = React.useState(true);    
    const [planData, setPlan] = React.useState([{ "plan_price": "0.00" }]);    
    const [managerData, setManager] = React.useState({});
    const groupId = { '0': '1', '35': '6', '65': '5', '99': '4' }
    
    React.useEffect(() => {
        getPlan()
        getManager()        
    }, []);

    const getPlan = () =>{
        setLoader(true);
        axios.get('krypson-plan/plan/search?searchCriteria[pageSize]=10')
            .then(function (response) {                         
                setPlan(response.data.items);   
                return true            
            })
            .catch(function (error) {
                console.warn(error);
            });
    }
   
    const getManager = () => {        
        
        axios.get('customers/search?searchCriteria[filter_groups][0][filters][1][field]=group_id&searchCriteria[filter_groups][0][filters][1][value]=4&searchCriteria[filter_groups][0][filters][1][condition_type]=eq')
            .then(function (response) {                
                setManager(response.data.items);                
                setLoader(false);
                return true;
            })
            .catch(function (error) {                
                console.log(error);
                setLoader(false);
            });
            return true;
    }   
    

    const handleInputChange = (val, name) => {
        setData({
            ...data,
            [name]: val
        })
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val
        });
    }  

    const submitSignUpForm = () => {
        let error = false;
        let planValue = parseInt(data.planValue);
        let groupIdValue = groupId[planValue];

        if (!validateEmail(data.emailAddress)) {
            alert("Provide valid email address");
            error = true;
        }
        if (isEmpty(data.firstName)) {
            alert("Firstname Required");
            error = true;
        }
        if (isEmpty(data.lastName)) {
            alert("Lastname Required");
            error = true;
        }
        if (isEmpty(data.zipCode)) {
            alert("zipcode is required");
            error = true;
        }
        if (isEmpty(data.phoneNumber)) {
            alert("Phone number is required");
            error = true;
        }
        if (isEmpty(data.city)) {
            alert("City is Required");
            error = true;
        }
        if (isEmpty(data.streetAddress)) {
            alert("Street Address Is Required");
            error = true;
        }
        if (isEmpty(data.state)) {
            alert("State Required");
            error = true;
        }
        if (isEmpty(data.password)) {
            alert("Password is Required");
            error = true;
        }
        if (data.password !== data.confirmPassword) {
            alert("Confirm password need to same as password");
            error = true;
        }
        if (error) {
            return false;
        }
        setLoader(true);
        axios.post('customers', {
            "customer": {
                "email": data.emailAddress.toString(),
                "firstname": data.firstName.toString(),
                "lastname": data.lastName.toString(),
                "groupId": groupIdValue,
                "extension_attributes": {
                    "plan": data.planValue.toString(),
                    "manager_id": data.managerValue.id,
                    "manager_email": data.managerValue.email
                },
                "addresses": [{
                    "defaultShipping": true,
                    "defaultBilling": true,
                    "firstname": data.firstName.toString(),
                    "lastname": data.lastName.toString(),
                    "region": {
                        // "regionCode": "NY",
                        "region": data.state.toString()
                        // "regionId":43
                    },
                    "postcode": data.zipCode.toString(),
                    "street": [data.streetAddress.toString()],
                    "city": data.city.toString(),
                    "telephone": data.phoneNumber.toString(),
                    "countryId": "US"
                }]
            },
            "password": data.password.toString()
        })
            .then(function (response) {                
                setLoader(false);
                getToken(data.emailAddress.toString(), data.firstName.toString(), data.password.toString())
                setData({ emailAddress: '' })                
            })
            .catch(function (error) {
                console.log(error.response.data.message);               
                setLoader(false);
            });
    }

    const getToken = (email, userName, password) => {
        if (email.length == 0 || password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }
        axios.post('integration/customer/token', {
            username: email,
            password: password
        })
            .then(function (response) {
               getCustomer(response.data)               
            })
            .catch(function (error) {
                Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                    { text: 'Okay' }
                ]);
                return;
            });

    }


    const getCustomer = (userToken) => {        
        let authToken = "Bearer " + userToken
        axios.get('customers/me',
            {
                headers: { 'Content-type': 'application/json', 'authorization': authToken }
            }).then(function (response) {
                
                const userInfo = [{ 
                    id : response.data.id, 
                    email : response.data.email, 
                    firstName : response.data.firstname,
                    lastName : response.data.lastname, 
                    userToken : userToken, 
                    groupId : response.data.group_id,
                    storeId : response.data.store_id,
                    websiteId : response.data.website_id
                 }]
                signIn(userInfo);

            }).catch(function (error) {
                console.log(error)
            });
    }

    const StatusBarHeight = StatusBar.currentHeight

    return (
        <>
            {
                userToken == null ?
                    <View style={styles.container}>

                        <StatusBar />

                        <View style={styles.header}>
                            <Text style={styles.text_header}>Create Account</Text>
                        </View>

                        <View style={{ position: 'absolute', top: "50%", right: 0, left: 0, zIndex: 1 }}>
                            <ActivityIndicator visible={showLoader} color="#6379FF" />
                        </View>

                        <ScrollView>
                            <Text style={styles.text_footer}>First Name</Text>
                            <View style={styles.action}>

                                <TextInput
                                    name="firstName"
                                    id="firstName"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handleInputChange(val, 'firstName')}
                                />
                                
                            </View>

                            <Text style={styles.text_footer}>Last Name</Text>
                            <View style={styles.action}>

                                <TextInput
                                    name="lastName"
                                    id="lastName"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handleInputChange(val, 'lastName')}
                                />

                            </View>

                            <Text style={styles.text_footer}>Phone Number</Text>
                            <View style={styles.action}>

                                <TextInput
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handleInputChange(val, 'phoneNumber')}
                                    maxLength={12}
                                    keyboardType='numeric'
                                />

                            </View>

                            <Text style={styles.text_footer}>Email Address</Text>
                            <View style={styles.action}>

                                <TextInput
                                    name="emailAddress"
                                    id="emailAddress"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handleInputChange(val, 'emailAddress')}
                                />

                            </View>

                            <Text style={styles.text_footer}>Password</Text>
                            <View style={styles.action}>
                                <TextInput
                                    secureTextEntry={true}
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handlePasswordChange(val)}
                                />

                            </View>

                            <Text style={styles.text_footer}>Confirm Password</Text>
                            <View style={styles.action}>
                                <TextInput
                                    secureTextEntry={true}
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                                />

                            </View>

                            <Text style={styles.text_footer}>Street Address</Text>
                            <View style={styles.action}>

                                <TextInput
                                    name="streetAddress"
                                    id="streetAddress"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handleInputChange(val, 'streetAddress')}
                                />

                            </View>

                            <Text style={styles.text_footer}>Suite Or Appartment</Text>
                            <View style={styles.action}>

                                <TextInput
                                    name="suite"
                                    id="suite"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handleInputChange(val, 'suite')}
                                />

                            </View>

                            <Text style={styles.text_footer}>City</Text>
                            <View style={styles.action}>

                                <TextInput
                                    name="city"
                                    id="city"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handleInputChange(val, 'city')}
                                />

                            </View>

                            <Text style={styles.text_footer}>State</Text>
                            <View style={styles.action}>

                                <TextInput
                                    name="state"
                                    id="state"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handleInputChange(val, 'state')}
                                />

                            </View>

                            <Text style={styles.text_footer}>Zip Code</Text>
                            <View style={styles.action}>

                                <TextInput
                                    name="zipCode"
                                    id="zipCode"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handleInputChange(val, 'zipCode')}
                                />

                            </View>

                            <Text style={styles.text_footer}>Select Your Plan </Text>

                            <View style={styles.pickerWrapper}>

                                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                                <Picker
                                    mode="dropdown"
                                    style={styles.pickerContentB2b}
                                    selectedValue={data.planValue} 
                                    onValueChange={(itemValue, itemIndex) =>
                                        setData({...data,planValue: itemValue})                                        
                                      }                        
                                    
                                >
                                    {
                                        planData.map((item, index) =>
                                            <Picker.Item label={'$' + item.plan_price} value={item.plan_price} key={index} />
                                        )
                                    }
                                </Picker>
                            </View>
                            {
                                (data.planValue > 0 && data.planValue < 65) ? <><Text style={styles.text_footer}>Select Your Manager</Text>
                                    <View style={styles.pickerWrapper}>

                                        <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                                        <Picker
                                            mode="dropdown"
                                            style={styles.pickerContentB2b}
                                            selectedValue={(data.managerValue) || 1}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setData({ ...data, managerValue: itemValue })
                                            }
                                        >

                                            {
                                                (managerData.length > 0)?managerData.map((item, index) =>
                                                    <Picker.Item label={item.firstname} value={item.id} key={index} />                                                
                                                ):null
                                            }

                                        </Picker>
                                    </View></> : null
                            }


                            <Text style={styles.text_footer}>Terms & Agreement</Text>
                            <View style={styles.actionTerms}>

                                <TextInput
                                    defaultValue={data.terms}
                                    multiline={true}
                                    numberOfLines={10}
                                    name="terms"
                                    id="terms"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    editable={true}
                                />
                            </View>
                            <View style={styles.checkcontainer}>
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        name='agreeTerm'
                                        id='agreeTerm'
                                        disabled={false}
                                        value={agreeTerm}
                                        onValueChange={(newValue) => 
                                            setAgreeTerm(newValue)
                                        }
                                        style={styles.checkbox}
                                        tintColors={{ true: '#6379FF', false: 'black' }}
                                    />
                                    <Text style={styles.label}>I Agree To Term Above</Text>
                                </View>
                            </View>
                            <View style={styles.header}>
                                <Text style={styles.paymentInfo}>Payment Information</Text>
                            </View>

                            <Text style={styles.text_footer}>Card Number</Text>
                            <View style={styles.action}>

                                <TextInput
                                    name="cardNumber"
                                    id="cardNumber"
                                    value={data.cardNumber}
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onValueChange={data.setData}
                                    maxLength={16}
                                    keyboardType='numeric'
                                />
                            </View>                            
                            <View style={styles.actionCvv}>
                                <Text style={styles.text_footer_exp}>Exp. Date</Text>
                                <Text style={styles.text_footer_cvv}>CVV</Text>
                            </View>

                            <View style={styles.actionCvv}>
                                <View style={styles.exp}>
                                    <TextInput
                                        placeholder="MM/YY"
                                        name="expdate"
                                        id="expdate"
                                        style={styles.textInput}
                                        autoCapitalize="none"
                                        maxLength={5}
                                        keyboardType='numeric'
                                        value={data.exp}
                                        onValueChange={data.setData}
                                    />
                                </View>


                                <View style={styles.cvv}>
                                    <TextInput
                                        name="cvv"
                                        id="cvv"
                                        style={styles.textInput}
                                        autoCapitalize="none"
                                        maxLength={4}
                                        keyboardType='numeric'
                                        value={data.cvv}
                                        onValueChange={data.setData}
                                    />
                                </View>
                            </View>
                            <View style={styles.checkcontainer}>
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        value={sameBillAddress}
                                        disabled={false}
                                        onValueChange={(newValue) => 
                                            setSameBillAddress(newValue)
                                        }
                                        id = 'sameBillAddress'
                                        name = 'sameBillAddress'
                                        tintColors={{ true: '#6379FF', false: 'black' }}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.label}>Billing Address Same As Above</Text>
                                </View>
                            </View>

                            <View style={styles.button}>
                                <TouchableOpacity
                                    style={[styles.signIn, { backgroundColor: '#6379FF' }]}
                                    onPress={() => submitSignUpForm()}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#fff'
                                    }]}>Submit</Text>
                                </TouchableOpacity>                               
                            </View>
                        </ScrollView>

                    </View> : navigation.navigate("Dashboard")}
        </>
    );

}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
})

//Map your action creators to your props.
const mapDispatchToProps = {
    checkLogin,
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);