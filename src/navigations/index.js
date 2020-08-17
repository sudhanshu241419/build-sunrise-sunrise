import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../scenes/landing';
import AddReferrals from '../scenes/referrals/AddReferrals'
import ReferralHistoryScreen from '../scenes/referrals/History'
import ShopScreen from '../scenes/shop/Shop'
import { Image, View, Text, StyleSheet, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper'
import styles from '../scenes/login/styles';
import DashboardScreen from '../scenes/dashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient'
import AddBusinessScreen from '../scenes/addBusiness/addBusiness'
import EBusinessCard from '../scenes/shareEBusinessCard'
import RateYourPurchase from '../scenes/rateYourPurchase'
import MyCustomer from '../scenes/customerOfManager'
import { AuthContext } from '../components/context';
import {getUser } from '../utils/api'


const LandingStack = createStackNavigator();
const AddReferralsStack = createStackNavigator();
const ReferralHistoryStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const ShopStack = createStackNavigator();
const AddBusinessStack = createStackNavigator();
const EBusinessCardStack = createStackNavigator();
const RateYourPurchaseStack = createStackNavigator();
const MyCustomerStack = createStackNavigator();


const DrawerNav = createDrawerNavigator();


const LandingStackSreen = ({ navigation }) => (
    <LandingStack.Navigator
        screenOptions={{
            headerBackground: props => <LandingPageHeader {...props} />,
            headerStyle: {
                backgroundColor: '#1B2356',
                height: 65,
            },
        }}
    >
        <LandingStack.Screen
            name="Home"
            component={LandingScreen}
            options={{
                title: '',
                headerLeft: () => (
                    <Icon.Button name="menu" size={25}
                        backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>
                ),

                headerShown: true
            }}
        />

    </LandingStack.Navigator>
)
const DashboardStackSreen = ({ navigation }) => (
    <DashboardStack.Navigator
        screenOptions={{
            headerBackground: props => <GradientHeader {...props} />,
            headerStyle: {
                backgroundColor: '#1B2356',
                height: 65,
            },
        }}
    >
        <DashboardStack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => (
                    <Icon.Button name="menu" size={25} backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }}
        />
    </DashboardStack.Navigator>
)

const ShopStackScreen = ({ navigation }) => (
    <ShopStack.Navigator
        screenOptions={{
            headerBackground: props => <GradientHeader {...props} />,
            headerStyle: {
                backgroundColor: '#1B2356',
                height: 65,
            },
        }}
    >
        <ShopStack.Screen
            name="Shop"
            component={ShopScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => (<Icon.Button name="menu" size={25}
                    backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>)
            }}
        />

    </ShopStack.Navigator>
)

const AddReferralStackScreen = ({ navigation }) => (
    <AddReferralsStack.Navigator
        screenOptions={{
            headerBackground: props => <GradientHeader {...props} />,
            headerStyle: {
                backgroundColor: '#1B2356',
                height: 65,
            },
        }}
    >
        <AddReferralsStack.Screen
            name="AddReferrals"
            component={AddReferrals}
            options={{
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => (<Icon.Button name="menu" size={25}
                    backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>)
            }}
        />
    </AddReferralsStack.Navigator>
)

const AddBusinessStackScreen = ({ navigation }) => (
    <AddBusinessStack.Navigator
        screenOptions={{
            headerBackground: props => <GradientHeader {...props} />,
            headerStyle: {
                backgroundColor: '#1B2356',
                height: 65,
            },
        }}
    >
        <AddBusinessStack.Screen
            name="AddBusiness"
            component={AddBusinessScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => (<Icon.Button name="menu" size={25}
                    backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>)
            }}
        />
    </AddBusinessStack.Navigator>
)

const EBusinessCardStackScreen = ({ navigation }) => (
    <EBusinessCardStack.Navigator
        screenOptions={{
            headerBackground: props => <GradientHeader {...props} />,
            headerStyle: {
                backgroundColor: '#1B2356',
                height: 65,
            },
        }}
    >
        <EBusinessCardStack.Screen
            name="EBusinessCard"
            component={EBusinessCard}
            options={{
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => (<Icon.Button name="menu" size={25}
                    backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>)
            }}
        />
    </EBusinessCardStack.Navigator>
)
const RateYourPurchaseStackScreen = ({ navigation }) => (
    <RateYourPurchaseStack.Navigator
        screenOptions={{
            headerBackground: props => <GradientHeader {...props} />,
            headerStyle: {
                backgroundColor: '#1B2356',
                height: 65,
            },
        }}
    >
        <RateYourPurchaseStack.Screen
            name="RateYourPurchase"
            component={RateYourPurchase}
            options={{
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => (<Icon.Button name="menu" size={25}
                    backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>)
            }}
        />
    </RateYourPurchaseStack.Navigator>
)

const MyCustomerStackScreen = ({ navigation }) => (
    <MyCustomerStack.Navigator
        screenOptions={{
            headerBackground: props => <GradientHeader {...props} />,
            headerStyle: {
                backgroundColor: '#1B2356',
                height: 65,
            },
        }}
    >
        <MyCustomerStack.Screen
            name="MyCustomer"
            component={MyCustomer}
            options={{
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => (<Icon.Button name="menu" size={25}
                    backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>)
            }}
        />
    </MyCustomerStack.Navigator>
)

const ReferralHistoryStackScreen = ({ navigation }) => (
    <ReferralHistoryStack.Navigator
        screenOptions={{
            headerBackground: props => <GradientHeader {...props} />,
            headerStyle: {
                backgroundColor: '#1B2356',
                height: 65,
            },
        }}
    >
        <ReferralHistoryStack.Screen
            name="ReferralHistory"
            component={ReferralHistoryScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => (<Icon.Button name="menu" size={25}
                    backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>)
            }}
        />
    </ReferralHistoryStack.Navigator>
)

const GradientHeader = () => (
    <View style={{ backgroundColor: '#eee' }}>
        <LinearGradient
            colors={['#3542B3', '#1B2356']}
            style={[StyleSheet.absoluteFill, { height: 68 }]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
        />

    </View>
)

const LandingPageHeader = () => (
    <View style={{ backgroundColor: '#eee' }}>
        <LinearGradient
            colors={['#3542B3', '#3542B3']}
            style={[StyleSheet.absoluteFill, { height: 68 }]}
            start={{ x: 0, y: 0 }}
        />
    </View>
)

function LogoTitle() {
    return (
        <Image
            style={{ width: 70, height: 70, paddingTop: 5, paddingBottom: 5 }}
            source={require('../assets/sunrise-head-logo.png')}
        />

    );
}

const DrawerContent = (props) => {
    const { signOut, toggleTheme } = React.useContext(AuthContext);  

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1F2865', zIndex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ alignItems: 'center', marginTop: 60 }}>
                            <Avatar.Image source={require('../assets/jp.png')}
                                size={100}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Title style={{ fontSize: 14, fontFamily: 'Segoe UI', color: '#fff', marginBottom: 0 }}>
                                {props.firstName} {props.lastName}
                            </Title>
                            <Title style={{ fontSize: 18, fontFamily: 'Segoe UI', color: '#fff' }}>VIP Manager</Title>
                            <Caption style={{ fontSize: 14, fontFamily: 'Segoe UI', color: '#fff', marginBottom: 30 }}>{props.email}</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Home"
                                onPress={() => { props.navigation.navigate('Home') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.darkBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                  
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Add Referrals"
                                onPress={() => { props.navigation.navigate('AddReferrals') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.lightBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Referrals History"
                                onPress={() => { props.navigation.navigate('ReferralHistory') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.darkBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Soap Now"
                                onPress={() => { props.navigation.navigate('Shop') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.lightBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Rate Your Purchase"
                                onPress={() => { props.navigation.navigate('RateYourPurchase') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.darkBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Write a Review"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.lightBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Share"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.darkBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Your E-Store"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.lightBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Your E-Business Card"
                                onPress={() => { props.navigation.navigate('EBusinessCard') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.darkBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Add Remove Business Listing"
                                onPress={() => { props.navigation.navigate('AddBusiness') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.lightBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Referrals History"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.darkBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="How App Works"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.lightBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Contact Support"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.darkBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Privacy Policy"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.lightBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Dashboard"
                                onPress={() => { props.navigation.navigate('Dashboard') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.darkBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="My Customer"
                                onPress={() => { props.navigation.navigate('MyCustomer') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.lightBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 0, width: "90%" }}>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <DrawerItem
                                label="Sign Out"
                                onPress={() => { signOut() }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={style.darkBlue}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 16 }}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                </Drawer.Section>

            </DrawerContentScrollView>

        </SafeAreaView>
    )
}




const RootNavigator = (props) => {
    const [data, setData] = React.useState({
        firstName:'', lastName:'', emailAddress: '', groupId: '', id: ''
    });
    
    React.useEffect(() => {
        getUser().then((value) => {            
            value?setData({
                firstName: value.firstName,
                lastName: value.lastName,
                emailAddress: value.email,
                id: value.userId,
                groupId: value.groupId
            }):setData({ 
                firstName: props.firstName,
                lastName: props.lastName,
                emailAddress: props.email
            })
        });
    }, []);

    return (
        <DrawerNav.Navigator drawerContent={props => <DrawerContent {...props} firstName={data.firstName} lastName={data.lastName} email={data.emailAddress}/>}>
            <DrawerNav.Screen name="Home" component={LandingStackSreen} />        
            <DrawerNav.Screen name="Dashboard" component={DashboardStackSreen} />
            <DrawerNav.Screen name="AddReferrals" component={AddReferralStackScreen} />
            <DrawerNav.Screen name="ReferralHistory" component={ReferralHistoryStackScreen} />
            <DrawerNav.Screen name="Shop" component={ShopStackScreen} />
            <DrawerNav.Screen name="AddBusiness" component={AddBusinessStackScreen} />
            <DrawerNav.Screen name="EBusinessCard" component={EBusinessCardStackScreen} />
            <DrawerNav.Screen name="RateYourPurchase" component={RateYourPurchaseStackScreen} />
            <DrawerNav.Screen name="MyCustomer" component={MyCustomerStackScreen} />
        </DrawerNav.Navigator>
    )


}

export default RootNavigator;

const style = StyleSheet.create({
    darkBlue: {
        backgroundColor: '#050C3D',
        fontSize: 14,
        color: '#ffffff',
        width: 282,
        marginTop: 0,
        marginLeft: 0,
        marginBottom: 0,
        borderRadius: 0
    },
    lightBlue: {
        backgroundColor: '#6379FF',
        fontSize: 14,
        color: '#ffffff',
        width: 282,
        marginTop: 0,
        marginLeft: 0,
        marginBottom: 0,
        borderRadius: 0
    },



    Container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 16,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 60
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})