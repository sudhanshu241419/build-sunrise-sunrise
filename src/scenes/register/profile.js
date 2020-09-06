import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import { useTheme } from 'react-native-paper';
import styles from './styles'
import axios from "../../apiConfig";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-community/picker';
import { AuthContext } from '../../components/context'
import ActivityIndicator from 'react-native-loading-spinner-overlay'
import { getUser, getAccessToken } from '../../utils/api'
import { UpdateSearch, handleFormValidation } from './registerFunction'

const RegisterScreen = (navigation, props) => {
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
        managerValue: '',
        website_id: null

    });
    const [showLoader, setLoader] = React.useState(false)
    const [userToken, setUserToken] = React.useState(null)
    const { signIn } = React.useContext(AuthContext);  
    const [planData, setPlan] = React.useState([
        {
            "plan_id": "1",
            "plan_name": "simple",
            "plan_price": "0.00",
            "plan_expiry": "1 month"
        },

    ]);
    const [managerData, setManagerData] = React.useState({});
    const [showManagerList, setShowManagerList] = React.useState(false)
    const [showManagerSearch, setShowManagerSearch] = React.useState(false)
    const [manager, setManager] = React.useState({id: '', firstname: ''})
    const groupId = { '0': '1', '35': '6', '65': '5', '99': '4' }
    const [items, setItems] = React.useState({});
    const [searchTxt, setSearchTxt] = React.useState(null);

    React.useEffect(() =>{       
        getPlan()
        getManager()
        getCustomer()
    },[]);


    const getCustomer = () => {
        getAccessToken().then((value) => { value != null ? setUserToken(value) : null });

        getUser().then((value) => {
            value != null ? setData({
                userId: value.userId,
                firstName: value.firstName,
                lastName: value.lastName,
                userGroup: value.groupId,
                emailAddress: value.email,
                phoneNumber: value.userDetails.address[0].telephone,
                streetAddress: value.userDetails.address[0].street[0],
                city: value.userDetails.address[0].city,
                state: value.userDetails.address[0].region.region,
                zipCode: value.userDetails.address[0].postcode,
                planValue: value.userDetails.plan[0].value,
                managerValue: value.userDetails.plan[2].value,
                website_id: value.userDetails.websiteId
            }) : null
            console.log(value.userDetails.plan)
            setManager({ id: value.userDetails.plan[2].value, firstname: value.userDetails.plan[1].value })
        });
    }


    const getPlan = () => {
        setLoader(true);
        axios.get('krypson-plan/plan/search?searchCriteria[pageSize]=10')
            .then(function (response) {
                setPlan(response.data.items);                
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getManager = () => {

        axios.get('customers/search?searchCriteria[filter_groups][0][filters][1][field]=group_id&searchCriteria[filter_groups][0][filters][1][value]=4&searchCriteria[filter_groups][0][filters][1][condition_type]=eq')
            .then(function (response) {
                setManagerData(response.data.items);
                //setManager({ id: response.data.items[0].id, firstname: response.data.items[0].firstname })

                setLoader(false);
               
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



    const handleUpdate = () => {
        let planValue = parseInt(data.planValue);
        let groupIdValue = groupId[planValue];

        if (!handleFormValidation(data)) {
            return false;
        }

        const customer = {
            "id": data.userId,
            "email": data.emailAddress.toString(),
            "firstname": data.firstName.toString(),
            "lastname": data.lastName.toString(),
            "groupId": groupIdValue,
            "website_id": data.website_id,
            "extension_attributes": {
                "plan": data.planValue.toString(),
                "manager_id": manager.id,
                "manager_email": manager.firstname
            },
            "addresses": [{
                "defaultShipping": true,
                "defaultBilling": true,
                "firstname": data.firstName.toString(),
                "lastname": data.lastName.toString(),
                "region": {                    
                    "region": data.state.toString()
                },
                "postcode": data.zipCode.toString(),
                "street": [data.streetAddress.toString()],
                "city": data.city.toString(),
                "telephone": data.phoneNumber.toString(),
                "countryId": "US"
            }]
        }

        console.log("userId", data.userId)
        console.log('customers/' + data.userId)
        const Data = {
            "customer": customer
        }
        console.log("update", Data)

        setLoader(true)
        axios.put('customers/' + data.userId, {
            "customer": customer
        })
            .then(function (response) {
                setLoader(false);
                alert("Profile has been updated");
                console.log(response)
                const userInfo = [{
                    id: data.userId,
                    email: data.emailAddress.toString(),
                    firstName: data.firstName.toString(),
                    lastName: data.lastName.toString(),
                    userToken: userToken,
                    groupId: groupIdValue,
                    websiteId: 1,
                    address: [{
                        "defaultShipping": true,
                        "defaultBilling": true,
                        "firstname": data.firstName.toString(),
                        "lastname": data.lastName.toString(),
                        "region": { "region": data.state.toString() },
                        "postcode": data.zipCode.toString(),
                        "street": [data.streetAddress.toString()],
                        "city": data.city.toString(),
                        "telephone": data.phoneNumber.toString(),
                        "countryId": "US"
                    }],
                    plan: {
                        "plan": data.planValue.toString(),
                        "manager_id": manager.id,
                        "manager_email": manager.firstname
                    },
                    default_billing_id: true,
                    default_shipping_id: true,
                }]
                signIn(userInfo);
                setLoader(false)
            })
            .catch(function (error) {
                alert(error.response.data.message);
                setLoader(false);
            });


        return false;
    }

    const getSearch = (val) => {
        setManager({...manager,firstname:val})
        setSearchTxt(val)
        setShowManagerList(false)
        setShowManagerSearch(true)
        if (val != '') {
            const abc = UpdateSearch(val, managerData)
            console.log(abc);
            setItems(abc);
        } else {
            setShowManagerList(true)
            setShowManagerSearch(false)
            setItems({})
        }
        return false;
    }


    const StatusBarHeight = StatusBar.currentHeight

    return (

        <View style={styles.container}>
           
            <StatusBar />

            <View style={styles.header}>
                <Text style={styles.text_header}>Update Profile</Text>
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
                        value={data.firstName}
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
                        value={data.lastName}
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
                        value={data.phoneNumber}
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
                        value={data.emailAddress}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleInputChange(val, 'emailAddress')}
                    />

                </View>


                <Text style={styles.text_footer}>Street Address</Text>
                <View style={styles.action}>

                    <TextInput
                        name="streetAddress"
                        id="streetAddress"
                        value={data.streetAddress}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleInputChange(val, 'streetAddress')}
                    />

                </View>

                {/* <Text style={styles.text_footer}>Suite Or Appartment</Text>
                <View style={styles.action}>

                    <TextInput
                        name="suite"
                        id="suite"
                        value={data.suite}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleInputChange(val, 'suite')}
                    />

                </View> */}

                <Text style={styles.text_footer}>City</Text>
                <View style={styles.action}>

                    <TextInput
                        name="city"
                        id="city"
                        value={data.city}
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
                        value={data.state}
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
                        value={data.zipCode}
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
                            setData({ ...data, planValue: itemValue })
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
                                <Ionicons name="ios-caret-down-sharp" style={styles.pickerIcon} />
                                <TextInput
                                    style={styles.pickerContentB2b}
                                    value={manager.firstname}
                                    onFocus={() => setShowManagerList(true)}
                                    onChangeText={(val) => getSearch(val)}
                                />
                            </View>

                            {showManagerList == true ?
                                <View style={[styles.pickerWrapper, { marginTop: 0, borderWidth: 0 }]}>
                                    {
                                        managerData.map((item, index) => {
                                            return <TouchableHighlight
                                                key={item.id}
                                            >
                                                <View style={{ backgroundColor: '#f4f4f4' }}>
                                                    <Text style={{ margin: 5, height: 25 }} onPress={() => {
                                                        setManager({ id: item.id, firstname: item.firstname })
                                                        setShowManagerList(false)
                                                    }
                                                    }>{item.firstname}</Text>
                                                </View>
                                            </TouchableHighlight>
                                        })
                                    }
                                </View> : null
                            }
                            {
                                items.length > 0 && showManagerSearch ?
                                    <View style={[styles.pickerWrapper, { marginTop: 0, borderWidth: 0 }]}>
                                        {
                                            items.map((item, index) => {
                                                return <TouchableHighlight
                                                    key={item.id}
                                                >
                                                    <View style={{ backgroundColor: '#f3f3f3' }}>
                                                        <Text style={{ backgroundColor: '#f3f3f3', margin: 5, height: 25 }} onPress={() => {
                                                            setManager({ id: item.id, firstname: item.firstname })
                                                            setShowManagerSearch(false)
                                                        }
                                                        }>{item.firstname}</Text>
                                                    </View>
                                                </TouchableHighlight>
                                            })
                                        }

                                    </View> : null
                            }
                        </> : null
                }

                <View style={styles.button}>
                    <TouchableOpacity
                        style={[styles.signIn, { backgroundColor: '#6379FF' }]}
                        onPress={() => handleUpdate()}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Update</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );

}
export default RegisterScreen;