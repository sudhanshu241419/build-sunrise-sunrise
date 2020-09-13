import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LandingScreen from '../scenes/landing/authLanding'
import AddReferrals from '../scenes/referrals/AddReferrals'
import ReferralHistoryScreen from '../scenes/referrals/History'
import ShopScreen from '../scenes/shop/Shop'
import Search from '../scenes/shop/Search'
import Service from '../scenes/shop/Service'
import Marketing from '../scenes/shop/MarketingMaterials'
import Deals from '../scenes/shop/Deals'
import AllCategories from '../scenes/shop/Categories'
import { Image, View, StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { createDrawerNavigator} from '@react-navigation/drawer'
import DashboardScreen from '../scenes/dashboard'
import LinearGradient from 'react-native-linear-gradient'
import AddBusinessScreen from '../scenes/addBusiness/addBusiness'
import EBusinessCard from '../scenes/shareEBusinessCard'
import RateYourPurchase from '../scenes/rateYourPurchase'
import Address from '../scenes/rateYourPurchase/address'
import MyCustomer from '../scenes/customerOfManager'
import PastOrder from '../scenes/rateYourPurchase/pastOrder'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileScreen from '../scenes/register/profile'
import BusinessListScreen from '../scenes/addBusiness/businessList'
import {connect} from 'react-redux'
import DrawerContent from './DrawerContents'

const OrderTopTab = createMaterialTopTabNavigator();

const OrderTabs = () => {
    return (
        <OrderTopTab.Navigator tabBarOptions={{
            activeTintColor: '#6379FF',
            inactiveTintColor: '#000',
            tabStyle: { flexdirection: 'row', justifyContent: 'space-around', height: 45 },
            scrollEnabled: true,
            labelStyle: { fontSize: 12, color: '#000000', fontWeight: 'bold' },
            style: { backgroundColor: '#fff', },
        }} lazy={true}>
            <OrderTopTab.Screen name="Current Order" component={RateYourPurchase} />
            <OrderTopTab.Screen name="Past Order" component={PastOrder} />
            <OrderTopTab.Screen name="Address" component={Address} />
            <OrderTopTab.Screen name="Payment" component={PastOrder} />
        </OrderTopTab.Navigator>
    );
}

const ShopStackTopNavigation = createStackNavigator()

const ShopTabs = () => {
    return (
        <ShopStackTopNavigation.Navigator headerMode='none' screenOptions={{ gestureEnabled: true, gestureDirection: "horizontal" }}>
            <ShopStackTopNavigation.Screen name="Product" component={ShopScreen} />
            <ShopStackTopNavigation.Screen name="Service" component={Service} />
            <ShopStackTopNavigation.Screen name="Marketing" component={Marketing} />
            <ShopStackTopNavigation.Screen name="RateYourPurchase" component={RateYourPurchase} />
            <ShopStackTopNavigation.Screen name="Deals" component={Deals} />
            <ShopStackTopNavigation.Screen name="Categories" Title="All Categories" component={AllCategories} />
            <ShopStackTopNavigation.Screen name="Search" Title="Search" component={Search} />
        </ShopStackTopNavigation.Navigator>
    );
}

const LandingStack = createStackNavigator()
const AddReferralsStack = createStackNavigator()
const ReferralHistoryStack = createStackNavigator()
const DashboardStack = createStackNavigator()
const ShopStack = createStackNavigator()
const AddBusinessStack = createStackNavigator()
const EBusinessCardStack = createStackNavigator()
const RateYourPurchaseStack = createStackNavigator()
const MyCustomerStack = createStackNavigator()
const UpdateProfileStack = createStackNavigator()
const BusinessListStack = createStackNavigator()

const DrawerNav = createDrawerNavigator()

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

const BusinessListStackSreen = ({ navigation }) => (
    <BusinessListStack.Navigator
        screenOptions={{
            headerBackground: props => <GradientHeader {...props} />,
            headerStyle: {
                backgroundColor: '#1B2356',
                height: 65,
            },
        }}
    >
        <BusinessListStack.Screen
            name="BusinessList"
            component={BusinessListScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => (
                    <Icon.Button name="menu" size={25} backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }}
        />
    </BusinessListStack.Navigator>
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
            //component={ShopScreen}
            children={ShopTabs}
            options={{
                title: 'Shop',
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
            // component={RateYourPurchase}
            children={OrderTabs}
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


const updateProfileScreen = ({ navigation }) => (
    <UpdateProfileStack.Navigator
        screenOptions={{
            headerBackground: props => <GradientHeader {...props} />,
            headerStyle: {
                backgroundColor: '#1B2356',
                height: 65,
            },
        }}
    >
        <UpdateProfileStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => (<Icon.Button name="menu" size={25}
                    backgroundColor="transparent" onPress={() => navigation.openDrawer()}></Icon.Button>)
            }}
        />
    </UpdateProfileStack.Navigator>
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

const RootNavigator = (props) => {   
    return (        
        <DrawerNav.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <DrawerNav.Screen name="Home" component={LandingStackSreen} />
            <DrawerNav.Screen name="Dashboard" component={DashboardStackSreen} />
            <DrawerNav.Screen name="AddReferrals" component={AddReferralStackScreen} />
            <DrawerNav.Screen name="ReferralHistory" component={ReferralHistoryStackScreen} />
            <DrawerNav.Screen name="Shop" component={ShopStackScreen} />
            <DrawerNav.Screen name="AddBusiness" component={AddBusinessStackScreen} />
            <DrawerNav.Screen name="BusinessList" component={BusinessListStackSreen} />
            <DrawerNav.Screen name="EBusinessCard" component={EBusinessCardStackScreen} />            
            <DrawerNav.Screen name="RateYourPurchase" component={RateYourPurchaseStackScreen} />
            <DrawerNav.Screen name="MyCustomer" component={MyCustomerStackScreen} />
            <DrawerNav.Screen name="Profile" component={updateProfileScreen} />
        </DrawerNav.Navigator>
    )
}

const mapStateToProps = (state) => {
    const userDetails = state.userdetails;
    return {userDetails}
}
export default connect(mapStateToProps)(RootNavigator);