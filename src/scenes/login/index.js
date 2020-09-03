import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Snackbar } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles'
import { connect } from 'react-redux';
import { checkLogin } from '../../actionCreator/login/actions';
import { AuthContext } from '../../components/context'
import axios from "../../apiConfig";
import { getAccessToken, getUser } from '../../utils/api'
import ActivityIndicator from 'react-native-loading-spinner-overlay'
import { isEmpty } from '../../utils/validation';

const LoginScreen = ({ navigation, checkLogin, currentUser }) => {
    const [data, setData] = React.useState({
        userName: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isSelected: true,
        isLoading: true,
    });

    const [visible, setVisible] = React.useState(false);
    const { signIn } = React.useContext(AuthContext);
    const [userToken, setUserToken] = React.useState(null);
    const [showLoader, setLoader] = React.useState(false)

    const onDismissSnackBar = () => setVisible(false);

    React.useEffect(() => {
        getAccessToken().then((value) => setUserToken(value));
        if (currentUser) {
            setVisible(!visible);
        }
    }, [currentUser]);

    const { colors } = useTheme();

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                userName: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = () => {
        if (isEmpty(data.username) || isEmpty(data.password)) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }
        setLoader(true);
        axios.post('integration/customer/token', {
            username: data.userName.toString(),
            password: data.password.toString()
        })
            .then(function (response) {
                getCustomer(response.data)

            })
            .catch(function (error) {
                Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                    { text: 'Okay' }
                ]);
                setLoader(false);
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
                    id: response.data.id,
                    email: response.data.email,
                    firstName: response.data.firstname,
                    lastName: response.data.lastname,
                    userToken: userToken,
                    groupId: response.data.group_id,
                    storeId: response.data.store_id,
                    websiteId: response.data.website_id,
                    address:response.data.addresses,
                    plan:response.data.custom_attributes,
                    default_billing_id:response.data.default_billing,
                    default_shipping_id:response.data.default_shipping,
                }]
                signIn(userInfo);
                setLoader(false);

            }).catch(function (error) {
                console.log(error)
            });
    }

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.text_header}>Sign In</Text>
            </View>

            <View style={{ position: 'absolute', top: "50%", right: 0, left: 0, zIndex: 1 }}>
                <ActivityIndicator visible={showLoader} color="#6379FF" />
            </View>

            <ScrollView>


                <View style={styles.action}>
                    <Feather name="user" style={styles.icon_style} size={20} color="#63636333" />
                    <TextInput
                        placeholder="E-mail"
                        placeholderTextColor="#2b2828"
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >

                        </Animatable.View>
                        : null}
                </View>
                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                    </Animatable.View>
                }

                <View style={[styles.action, { marginTop: 25 }]}>
                    <Fontisto name="locked" size={20} style={styles.icon_style} color="#63636333" />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#2b2828"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
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
                {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    </Animatable.View>
                }
                <View style={styles.actionRemember}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={data.isSelected}
                            onValueChange={data.setData}
                            style={styles.checkbox}
                            tintColors={{ true: '#6379FF', false: 'black' }}
                        />
                        <Text style={styles.label}>Remember</Text>
                    </View>

                    <View>
                        <TouchableOpacity>
                            <Text style={styles.fpassword}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.touchsignIn}                        
                        onPress={() => loginHandle()}
                    >
                        <LinearGradient
                            colors={['#686ced', '#686ced']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        style={[styles.createAcount, {
                            borderColor: '#686ced',
                            borderWidth: 4,
                            marginTop: 20
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#686ced'
                        }]}>Create Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text style={{ color: '#686ced', textAlign: 'center' }}>Don't have Account?</Text>
                    </TouchableOpacity>
                    <Snackbar
                        visible={visible}
                        onDismiss={onDismissSnackBar}
                        action={{
                            label: 'Undo',
                        }}>
                        Hey there! I'm a Snackbar.
                </Snackbar>

                </View>
            </ScrollView>
        </View>

    );

}

//Map the redux state to your props.
const mapStateToProps = state => ({
    currentUser: state.currentUser,
})

//Map your action creators to your props.
const mapDispatchToProps = {
    checkLogin,
}

export default LoginScreen;