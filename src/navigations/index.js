import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../scenes/landing/authLanding';
import AddReferrals from '../scenes/referrals/AddReferrals'
import ReferralHistoryScreen from '../scenes/referrals/History'
import ShopScreen from '../scenes/shop/Shop'
import Search from '../scenes/shop/Search'
import Service from '../scenes/shop/Service'
import Marketing from '../scenes/shop/MarketingMaterials'
import Deals from '../scenes/shop/Deals'
import AllCategories from '../scenes/shop/Categories'

import { Image, View, Text, StyleSheet, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer} from 'react-native-paper'
import styles from './styles';
import DashboardScreen from '../scenes/dashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'
import AddBusinessScreen from '../scenes/addBusiness/addBusiness'
import EBusinessCard from '../scenes/shareEBusinessCard'
import RateYourPurchase from '../scenes/rateYourPurchase'
import Address from '../scenes/rateYourPurchase/address'
import MyCustomer from '../scenes/customerOfManager'
import { AuthContext } from '../components/context';
import {getUser } from '../utils/api'
import PastOrder from '../scenes/rateYourPurchase/pastOrder'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from '../scenes/register/profile'

const OrderTopTab = createMaterialTopTabNavigator();

const OrderTabs = ()=> {
  return (
    <OrderTopTab.Navigator tabBarOptions={{
        activeTintColor: '#6379FF',
        inactiveTintColor:'#000',
        tabStyle: { flexdirection:'row',justifyContent:'space-around',height:45},
        scrollEnabled:true,
        labelStyle: { fontSize: 12,color: '#000000',fontWeight:'bold' },
        style: { backgroundColor: '#fff', },
      }} lazy={true}>
      <OrderTopTab.Screen name="Current Order" component={RateYourPurchase} />
      <OrderTopTab.Screen name="Past Order" component={PastOrder} />
      <OrderTopTab.Screen name="Address" component={Address} />
      <OrderTopTab.Screen name="Payment" component={PastOrder} />
      
      
    </OrderTopTab.Navigator>
  );
}


const ShopStackTopNavigation = createStackNavigator();

const ShopTabs = ()=> {
  return (    
    <ShopStackTopNavigation.Navigator headerMode='none' screenOptions={{gestureEnabled:true,gestureDirection:"horizontal"}}>
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




const LandingStack = createStackNavigator();
const AddReferralsStack = createStackNavigator();
const ReferralHistoryStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const ShopStack = createStackNavigator();
const AddBusinessStack = createStackNavigator();
const EBusinessCardStack = createStackNavigator();
const RateYourPurchaseStack = createStackNavigator();
const MyCustomerStack = createStackNavigator();
const UpdateProfileStack = createStackNavigator();


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
            //component={ShopScreen}
            children={ShopTabs}
            options={{
                title:'Shop',
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

const DrawerContent = (props) => {
    const { signOut, toggleTheme } = React.useContext(AuthContext);  

    return (
        <SafeAreaView style={[styles.safeArea,styles.flex]}>
            <DrawerContentScrollView {...props}>
                <View style={styles.flex}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.avtar}>
                            <Avatar.Image source={require('../assets/jp.png')}
                                size={100}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Title style={[styles.title,styles.font14]}>
                                {props.firstName} {props.lastName}
                            </Title> 
                            <FontAwesome name="edit" title="Edit" style={{color:"#fff",fontSize:20,margin:8}} onPress={() => { props.navigation.navigate('Profile') }}/>
                            </View>
                            <Title style={[styles.title,styles.font18]}>VIP Manager</Title>
                            <Caption style={[styles.title,styles.font14,{marginBottom: 30 }]}>{props.email}</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Home"
                                onPress={() => { props.navigation.navigate('Home') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.darkBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                  
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Add Referrals"
                                onPress={() => { props.navigation.navigate('AddReferrals') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.lightBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Referrals History"
                                onPress={() => { props.navigation.navigate('ReferralHistory') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.darkBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Soap Now"
                                onPress={() => { props.navigation.navigate('Shop') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.lightBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Rate Your Purchase"
                                onPress={() => { props.navigation.navigate('RateYourPurchase') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.darkBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>

                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Write a Review"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.lightBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Share"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.darkBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>

                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Your E-Store"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.lightBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Your E-Business Card"
                                onPress={() => { props.navigation.navigate('EBusinessCard') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.darkBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>

                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Add Remove Business Listing"
                                onPress={() => { props.navigation.navigate('AddBusiness') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.lightBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Referrals History"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.darkBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>

                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="How App Works"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.lightBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Contact Support"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.darkBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Privacy Policy"
                                onPress={() => { }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.lightBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Dashboard"
                                onPress={() => { props.navigation.navigate('Dashboard') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.darkBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>
                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="My Customer"
                                onPress={() => { props.navigation.navigate('MyCustomer') }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.lightBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
                            <Ionicons name="send-sharp" size={14} color="#ffffff" />
                        </View>
                    </View>                    

                    <View style={[styles.flexdirection,styles.width90]}>
                        <View style={[styles.flexdirection,styles.width100]}>
                            <DrawerItem
                                label="Sign Out"
                                onPress={() => { signOut() }}
                                labelStyle={{ color: '#ffffff', fontSize: 14 }}
                                style={styles.darkBlue}
                            />
                        </View>
                        <View style={[styles.flexdirection,{paddingTop: 16 }]}>
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
            {/* <DrawerNav.Screen name="RateYourPurchase" children={OrderTabs} /> */}
            <DrawerNav.Screen name="RateYourPurchase" component={RateYourPurchaseStackScreen} />
            <DrawerNav.Screen name="MyCustomer" component={MyCustomerStackScreen} />
            <DrawerNav.Screen name="Profile" component={updateProfileScreen} />
        </DrawerNav.Navigator>
    )


}

export default RootNavigator;