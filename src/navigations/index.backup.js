import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../scenes/home';
import LandingScreen from '../scenes/landing';
import LoginScreen from '../scenes/login';
import RegisterScreen from '../scenes/register';
import { Image, View,Text, StyleSheet,SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import {Avatar,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch} from 'react-native-paper'
import styles from '../scenes/login/styles';


const HomeStack = createStackNavigator();
const LandingStack = createStackNavigator();
const LoginStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const DrawerNav = createDrawerNavigator();


const LandingStackSreen = ({navigation})=>(
   <LandingStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#4359F7',
                height: 65,
            },
        }}
    >
        <LandingStack.Screen 
            name="Home"
            component={LandingScreen} 
            options={{
                title:'Home',
                headerLeft:()=>(
                    <Icon.Button name="menu" size={25}
                    backgroundColor="#999999" onPress={()=>navigation.openDrawer()}></Icon.Button>
                ),
                headerShown: false
            }}
        />
    </LandingStack.Navigator>
)
const HomeStackSreen = ({navigation})=>(
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#4359F7',
                height: 65,
            },
        }}
    >
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ 
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: ()=> (
                    <Icon.Button name="menu" size={25} backgroundColor="#4359F7" onPress={ () => navigation.openDrawer() }></Icon.Button>
                )
            }}
        />
        </HomeStack.Navigator>
)   

const LoginStackScreen = ({navigation})=>(
    <LoginStack.Navigator
    screenOptions={{
        headerStyle: {
            backgroundColor: '#4359F7',
            height: 65,
        },
    }}
    >
        <LoginStack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ 
                headerTitleAlign: 'center',
                headerTitle: props => <LogoTitle {...props} />,
                headerLeft: () => (<Icon.Button name="menu" size={25}
                backgroundColor="#4359F7" onPress={()=>navigation.openDrawer()}></Icon.Button>)
            }}
        />
        </LoginStack.Navigator>
)

const RegisterStackScreen = ({navigation})=>(
    <RegisterStack.Navigator
    screenOptions={{
        headerStyle: {
            backgroundColor: '#4359F7',
            height: 65,
        },
    }}
    >
    <RegisterStack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{            
            headerTitleAlign: 'center',
            headerTitle: props => <LogoTitle {...props} />,
            headerLeft: () => (<Icon.Button name="menu" size={25}
            backgroundColor="#4359F7" onPress={()=>navigation.openDrawer()}></Icon.Button>)
        }}
        />
    </RegisterStack.Navigator>
)

function LogoTitle() {
    return (
        <Image
            style={{ width: 70, height: 70, paddingTop:5, paddingBottom:5 }}
            source={require('../assets/sunrise-head-logo.png')}
        />
    );
}

const DrawerContent=(props)=>{
    return(
    <SafeAreaView style={{flex:1,backgroundColor:'#1F2865'}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
              <View style={styles.userInfoSection}>
                  <View style={{alignItems:'center'}}>
                      <Avatar.Image source={require('../assets/jp.png')}
                        size={100}
                      />
                  </View>
                  <View style={{alignItems:'center'}}>
                      <Title style={{fontSize:12,fontFamily:'Segoe UI', color:'#fff'}}>
                          Joseph Pilgrim
                      </Title>
                      <Title style={{fontSize:14,fontFamily:'Segoe UI', color:'#fff'}}>VIP Manager</Title>
                      <Caption style={{fontSize:12,fontFamily:'Segoe UI', color:'#fff'}}>jplgrim@myasg.biz</Caption>
                  </View>
              </View>
            </View>  
            <Drawer.Section style={styles.drawerSection}>
               <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Add Referrals"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#050C3D',fontSize:14,color:'#ffffff',width:282,border:'0 solid #050C3D'}}
             />

              <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Referrals History"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#6379FF',fontSize:14,color:'#ffffff',width:280,marginLeft:0,marginTop:0}}
             />

              <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Soap Now"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#050C3D',fontSize:14,color:'#ffffff',width:280,marginLeft:0,marginTop:0}}
             />


               <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Write a Review"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#6379FF',fontSize:14,color:'#ffffff',width:280,marginLeft:0,marginTop:0}}
             />

              <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Share"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#050C3D',fontSize:14,color:'#ffffff',width:280,marginLeft:0,marginTop:0}}
             />


               <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Your E-Store"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#6379FF',fontSize:14,color:'#ffffff',width:280,marginLeft:0,marginTop:0}}
             />

              <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Your E-Business Card"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#050C3D',fontSize:14,color:'#ffffff',width:280,marginLeft:0,marginTop:0}}
             />


               <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Add Remove Business Listing"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#6379FF',fontSize:14,color:'#ffffff',width:280,marginLeft:0,marginTop:0}}
             />
             
             <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Referrals History"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#050C3D',fontSize:14,color:'#ffffff',width:280,marginLeft:0,marginTop:0}}
             />


               <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="How App Works"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#6379FF',fontSize:14,color:'#ffffff',width:280,marginLeft:0,marginTop:0}}
             />

              <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Contact Support"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#050C3D',fontSize:14,color:'#ffffff',width:280,marginLeft:0,marginTop:0}}
             />


               <DrawerItem
               icon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Privacy Policy"
               onPress={()=>{}}
               labelStyle={{color: '#ffffff'}}
               style={{backgroundColor:'#6379FF',fontSize:14,color:'#ffffff',width:280,marginLeft:0,marginTop:0}}
             />

             


            </Drawer.Section>
        </DrawerContentScrollView>
        {/* <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
               MaterialCommunityIcon={({color, size})=>(
                   <Icon
                      name="exit-to-app"
                      color={color}
                      size={size}
                   />
               )}
               label="Sign Out"
               onPress={()=>{}}
            />
        
        </Drawer.Section> */}
        
        
    </SafeAreaView>
    )
}


const RootNavigator = () => (
   
    <DrawerNav.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>        
        <DrawerNav.Screen name="Home" component={LandingStackSreen} />
        <DrawerNav.Screen name="Login" component={LoginStackScreen} />
        <DrawerNav.Screen name="Register" component={RegisterStackScreen} />
    </DrawerNav.Navigator>      
    
)

export default RootNavigator;

const style = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    drawerContent:{
        flex:1,        
    },
    userInfoSection:{
        alignItems:'center'
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:16,
        lineHeight:14
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3
    },
    drawerSection:{
        marginTop:60
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    }
})