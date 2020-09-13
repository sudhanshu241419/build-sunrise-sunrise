import React, { createRef } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar,
    StyleSheet,
    Alert,
    TouchableHighlight,
    RefreshControlBase
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { useTheme } from 'react-native-paper'
import styles from './styles'
import axios from "../../apiConfig"
import { isEmpty } from '../../utils/validation'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-community/picker'
import { AuthContext } from '../../components/context'
import ActivityIndicator from 'react-native-loading-spinner-overlay'
import { UpdateSearch, handleFormValidation } from './registerFunction'
import {connect} from 'react-redux'
import {userDetailsAction} from '../../actionCreator/userDetailsAction'



const RegisterScreen = ({navigation,dispatch}) => {
    const [data, setData] = React.useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        streetAddress: '',
        appartment: '',
        city: '',
        stateValue: '',
        zipCode: '',
        password: '',
        confirmPassword: '',
        terms: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        isSelected: true,
        cardNumber: '',
        exp: '',
        cvv: '',
        planValue: 0,
        managerValue: "default",
        secureTextEntry: true,
        confirmSecureTextEntry:true

    });
    const [showLoader, setLoader] = React.useState(false)
    const { signIn } = React.useContext(AuthContext);
    const { colors } = useTheme();
    const [agreeTerm, setAgreeTerm] = React.useState(true);
    const [sameBillAddress, setSameBillAddress] = React.useState(true);
    const [planData, setPlan] = React.useState(
        [
            {
                "plan_id": "1",
                "plan_name": "simple",
                "plan_price": "0.00",
                "plan_expiry": "1 month"
            },

        ]
    );
    const [managerData, setManagerData] = React.useState({id:'default',firstname:'Default',lastname:''});
    const [showManagerList, setShowManagerList] = React.useState(false)
    const [showManagerSearch, setShowManagerSearch] = React.useState(false)
    const [manager, setManager] = React.useState({
        id: 'default',
        firstname: 'Default',
    })
    const groupId = { '0': '1', '35': '6', '65': '5', '99': '4' }
    const [items, setItems] = React.useState({});
    const [searchTxt, setSearchTxt] = React.useState(null);
    const [stateData,setState] = React.useState({});

    React.useEffect(() => {
        console.log(navigation)
        getPlan()
        getManager()
        getState()
    }, []);  

    const getPlan = () => {
        setLoader(true);
        axios.get('krypson-plan/plan/search?searchCriteria[pageSize]=10')
        .then(function (response) {        
            setPlan(response.data.items)
        })
        .catch(function (error) {
            console.log(error.response.data.message)
        });
    }

    const getManager = () => {
        axios.get('customers/search?searchCriteria[filter_groups][0][filters][1][field]=group_id&searchCriteria[filter_groups][0][filters][1][value]=4&searchCriteria[filter_groups][0][filters][1][condition_type]=eq')
        .then(function (response) { 
            setManagerData(response.data.items)
            setManager({ id: response.data.items[0].id, firstname: response.data.items[0].firstname + " " + response.data.items[0].lastname })
        })
        .catch(function (error) {
            console.log(error.response.data.message)
        }); 
    }

    const getState = () =>{
        
        axios.get('krypson-customapi/getstate/?param=usa')
        .then(function (response) {     
            //console.log(response.data)        
            setState(response.data)  
            setLoader(false);          
        })
        .catch(function (error) {
            console.log(error.response.data.message)
        }); 
        
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

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    
    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        });
    }

    const submitSignUpForm = () => {
        let error = false;
        let planValue = parseInt(data.planValue);
        let groupIdValue = groupId[planValue];

        if (!handleFormValidation(data)) {
            return false
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
                    "manager_id": (manager.id=='default' || data.planValue==0)?'':manager.id,
                    "manager_email": (manager.id=='default' || data.planValue==0)?'':manager.firstname
                },
                "addresses": [{
                    "defaultShipping": true,
                    "defaultBilling": true,
                    "firstname": data.firstName.toString(),
                    "lastname": data.lastName.toString(),
                    "region": {
                        "region": data.stateValue.toString()
                    },
                    "extension_attributes": {
                        "appartment" : data.appartment.toString()
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
                getToken(data.emailAddress.toString(), data.firstName.toString(), data.password.toString())
                setData({ emailAddress: '' })
            })
            .catch(function (error) {
                alert(error.response.data.message)
                console.log(error.response.data.message);
                setLoader(false);
            });
    }

    const getToken = (email, userName, password) => {
        if (email.length == 0 || password.length == 0) {
            setLoader(false);
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
                setLoader(false);
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
                setLoader(false);
                alert("Thank you! Your registration has been successfully done.");
                
                const userInfo = [{
                    id: response.data.id,
                    email: response.data.email,
                    firstName: response.data.firstname,
                    lastName: response.data.lastname,
                    userToken: userToken,
                    groupId: response.data.group_id,
                    storeId: response.data.store_id,
                    websiteId: response.data.website_id,
                    address: response.data.addresses,
                    plan: response.data.custom_attributes,
                    default_billing_id: response.data.default_billing,
                    default_shipping_id: response.data.default_shipping,
                    plan_id: getPlanId()
                }]
                //console.log("userInfo=", userInfo);               
                dispatch(userDetailsAction(userInfo));              
                signIn(userInfo);  

            }).catch(function (error) {
                console.log(error)
                setLoader(false);
            });
    }

    const getSearch = (val) => {
        setSearchTxt(val)
        setShowManagerList(false)
        setShowManagerSearch(true)
        if (val != '') {
            const abc = UpdateSearch(val, managerData)
            setItems(abc);
        } else {
            setShowManagerList(true)
            setShowManagerSearch(false)
            setItems({})
        }
        return false;
    }
    const getPlanId = () => {
        const planid = planData.filter((item) => {
            if (item.plan_price == data.planValue) {
                return item.plan_id
            }
        })

        return planid[0].plan_id
    }

    const StatusBarHeight = StatusBar.currentHeight
    const managerRef = createRef()

    return (
        <View style={styles.container}>

            <StatusBar />
            <View style={{justifyContent:'space-around',marginLeft:10,marginTop:10}}><Ionicons name="arrow-back" style={{color:'#4359F7',fontSize:30}} onPress={()=>navigation.goBack()}/></View>
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
                        autoFocus={true}
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
                        secureTextEntry={data.secureTextEntry ? true : false}                        
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                     <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                style={styles.icon_style}
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                style={styles.icon_style}
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>

                </View>

                <Text style={styles.text_footer}>Confirm Password</Text>
                <View style={styles.action}>
                    <TextInput
                        secureTextEntry={data.confirmSecureTextEntry ? true : false} 
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.confirmSecureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                style={styles.icon_style}
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                style={styles.icon_style}
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>

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
                        name="appartment"
                        id="appartment"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleInputChange(val, 'appartment')}
                    />

                </View>

                <Text style={styles.text_footer}>State</Text>               

                <View style={styles.pickerWrapper}>

                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                <Picker
                    mode="dropdown"
                    style={styles.pickerContentB2b}
                    selectedValue={data.stateValue}
                    onValueChange={(itemValue, itemIndex) =>{
                        setData({ ...data, stateValue: itemValue })  
                    }
                    }

                >
                    {
                        (stateData.length>0)?stateData.map((item, index) =>
                            <Picker.Item label={item.label} value={item.value} key={index} />
                        ):null
                    }
                </Picker>
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
                        onValueChange={(itemValue, itemIndex) =>{
                            setData({ ...data, planValue: itemValue })                            
                            setManager({ id: '', firstname: '' })
                        }
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
                    (data.planValue > 0 && data.planValue < 65) ?
                        <>
                            <Text style={styles.text_footer}>Select Your Manager</Text>
                            <View style={styles.pickerWrapper}>
                                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon}  onPress={() => {
                                    setShowManagerList(true)
                                    managerRef.current.focus();
                                }}/>
                                <TextInput
                                    style={styles.pickerContentB2b}
                                    defaultValue={manager.firstname}
                                    ref={managerRef}
                                    placeholder="Default"
                                    placeholderStyle={{color: '#000',fontSize: 18}}
                                    onFocus={() => setShowManagerList(true)}
                                    //onBlur ={()=>setShowManagerList(false)}
                                    onChangeText={(val) => getSearch(val)}
                                />
                            </View>

                            {showManagerList == true ?
                                <View style={[styles.pickerWrapper, { marginTop: 0, borderWidth: 1}]}>
                                    {
                                        managerData.map((item, index) => {
                                            return <TouchableHighlight
                                                key={item.id}
                                            >
                                                <View style={{ backgroundColor: '#fff', shadowColor: '#000',shadowRadius: 10,
                                shadowOpacity: 5,}}>
                                                    <Text style={{ margin: 5, height: 25 }} onPress={() => {
                                                        setManager({ id: item.id, firstname: item.firstname+" "+item.lastname })
                                                        setShowManagerList(false)
                                                    }
                                                    }>{item.firstname+" "+item.lastname}</Text>
                                                </View>
                                            </TouchableHighlight>
                                        })
                                    }
                                </View> : null
                            }
                            {
                                items.length > 0 && showManagerSearch ?
                                    <View style={[styles.pickerWrapper, { marginTop: 0, borderWidth: 1, shadowColor:"#ccc",shadowOpacity:10,borderRadius:3 }]}>
                                        {
                                            items.map((item, index) => {
                                                return <TouchableHighlight
                                                    key={item.id}
                                                >
                                                    <View style={{ backgroundColor: '#fff' }}>
                                                        <Text style={{ backgroundColor: '#fff', margin: 5, height: 25 }} onPress={() => {
                                                            setManager({ id: item.id, firstname: item.firstname+" "+item.lastname })
                                                            setShowManagerSearch(false)
                                                        }
                                                        }>{item.firstname+" "+item.lastname}</Text>
                                                    </View>
                                                </TouchableHighlight>
                                            })
                                        }

                                    </View> : null
                            }
                        </> : null
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
                            id='sameBillAddress'
                            name='sameBillAddress'
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

        </View>
    );

}

// function mapStateToProps (state){
//     const {userdetails}= state
//     return {userdetails}
// }

// const mapDispatchToProps = dispatch => (
//     bindActionCreators({
//       userDetails,
//     }, dispatch)
//   );
// export default connect(mapStateToProps,mapDispatchToProps)(RegisterScreen);
export default connect()(RegisterScreen);