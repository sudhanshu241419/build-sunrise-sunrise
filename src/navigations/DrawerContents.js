import React from 'react';
import {View,SafeAreaView,Text} from "react-native";
import {DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import {Avatar,Title,Caption,Drawer} from 'react-native-paper'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../components/context';
import { getUser } from '../utils/api'
import {connect} from 'react-redux'
const withAddBusiness = [
    { "level": "Home", "link": "Home", "status": 1 },
    { "level": "Dashboard", "link": "Dashboard", "status": 1 },
    { "level": "Add Referrals", "link": "AddReferrals", "status": 1 },
    { "level": "Referrals History", "link": "ReferralHistory", "status": 1 },
    { "level": "Soap Now", "link": "Shop", "status": 1 },
    { "level": "Rate Your Purchase", "link": "RateYourPurchase", "status": 1 },
    { "level": "Your E-Business Card", "link": "EBusinessCard", "status": 1 },
    { "level": "Add Business", "link": "AddBusiness", "status": 1 },
    { "level": "Business List", "link": "BusinessList", "status": 1 },
    { "level": "My Customer", "link": "MyCustomer", "status": 1 },
    { "level": "Write a Review", "link": "", "status": 1 },
    { "level": "Share", "link": "", "status": 1 },
    { "level": "Your E-Store", "link": "", "status": 1 },
    { "level": "How App Works", "link": "", "status": 1 },
    { "level": "Contact Support", "link": "", "status": 1 },
    { "level": "Privacy Policy", "link": "", "status": 1 },
    { "level": "Sign Out", "link": "signout", "status": 1 }
]

const withoutAddBusiness = [
    { "level": "Home", "link": "Home", "status": 1 },
    { "level": "Dashboard", "link": "Dashboard", "status": 1 },
    { "level": "Add Referrals", "link": "AddReferrals", "status": 1 },
    { "level": "Referrals History", "link": "ReferralHistory", "status": 1 },
    { "level": "Soap Now", "link": "Shop", "status": 1 },
    { "level": "Rate Your Purchase", "link": "RateYourPurchase", "status": 1 },
    { "level": "Your E-Business Card", "link": "EBusinessCard", "status": 1 },    
    { "level": "Business List", "link": "BusinessList", "status": 1 },
    { "level": "My Customer", "link": "MyCustomer", "status": 1 },
    { "level": "Write a Review", "link": "", "status": 1 },
    { "level": "Share", "link": "", "status": 1 },
    { "level": "Your E-Store", "link": "", "status": 1 },
    { "level": "How App Works", "link": "", "status": 1 },
    { "level": "Contact Support", "link": "", "status": 1 },
    { "level": "Privacy Policy", "link": "", "status": 1 },
    { "level": "Sign Out", "link": "signout", "status": 1 }
]
const DrawerContent = (props) => {
    const { signOut, toggleTheme } = React.useContext(AuthContext);
    const [data, setData] = React.useState({firstName:'', lastName:'', emailAddress: '', plan_id: ''});
    
    React.useEffect(() => {

        getUser().then((value) => {
            // console.log("drawercontents",value)
            value!==null?setData({
                firstName: value.firstName,
                lastName: value.lastName,
                emailAddress: value.email,               
                plan_id: value.userDetails.plan_id
            }):null          
        });

        if(props.userDetails.length>0){
            // console.log("drawercontents userDetails",props.userDetails[0])
            setData({
                firstName:props.userDetails[0].firstName,
                lastName:props.userDetails[0].lastName,
                emailAddress:props.userDetails[0].email,
                plan_id:props.userDetails[0].plan_id,
            })
        }

    }, []);

    const navWithAddAddress = () =>{
        const nav1 = withAddBusiness.map((item,index)=>{
                            
            return <View style={[styles.flexdirection, styles.width90]} key={index}>
            <View style={[styles.flexdirection, styles.width100]}>
                <DrawerItem
                    label={item.level}
                    onPress={() => { item.link=='signout'?signOut():props.navigation.navigate(item.link) }}
                    labelStyle={{ color: '#ffffff', fontSize: 14 }}
                    style={index%2==0?styles.darkBlue:styles.lightBlue}
                />
            </View>
            <View style={[styles.flexdirection, { paddingTop: 16 }]}>
                <Ionicons name="send-sharp" size={14} color="#ffffff" />
            </View>
        </View>})
        return nav1
    }

    const navWithOutAddAddress = () =>{
       const nav2 = withoutAddBusiness.map((item,index)=>{
            return <View style={[styles.flexdirection, styles.width90]} key={index}>
            <View style={[styles.flexdirection, styles.width100]}>
                <DrawerItem
                    label={item.level}
                    onPress={() => { item.link=='signout'?signOut():props.navigation.navigate(item.link) }}
                    labelStyle={{ color: '#ffffff', fontSize: 14 }}
                    style={index%2==0?styles.darkBlue:styles.lightBlue}
                />
            </View>
            <View style={[styles.flexdirection, { paddingTop: 16 }]}>
                <Ionicons name="send-sharp" size={14} color="#ffffff" />
            </View>
        </View>})
        return nav2
    }

    
    
    return (
        <SafeAreaView style={[styles.safeArea, styles.flex]}>
            <DrawerContentScrollView {...props}>
                <View style={styles.flex}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.avtar}>
                            <Avatar.Image source={require('../assets/jp.png')}
                                size={100}
                            />
                            {/* <Text>{data.firstName}</Text> */}
                        </View>
                        <View style={{ alignItems: 'center'}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Title style={[styles.title, styles.font14,{marginLeft:15}]}>                                   
                                    {props.userDetails.length>0?props.userDetails[0].firstName:data.firstName} {props.userDetails.length>0?props.userDetails[0].lastName:data.lastName}
                                </Title>
                                <Feather name="edit-2" title="Edit" style={{ color: "#fff", fontSize: 20, margin: 8 }} 
                                onPress={() => { props.navigation.navigate('Profile') }}  />
                            </View>
                            <Title style={[styles.title, styles.font18]}>VIP Manager</Title>
                            <Caption style={[styles.title, styles.font14, { marginBottom: 30 }]}>
                                {props.userDetails.length>0?props.userDetails[0].email:data.emailAddress}
                            </Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>                    
                    {
                        props.userDetails.length>0 && props.userDetails[0].plan_id>2?
                        navWithAddAddress():navWithOutAddAddress()                                
                    } 
                                      
                </Drawer.Section>
            </DrawerContentScrollView>

        </SafeAreaView>
    )
}
const mapStateToProps = (state) => {
    const userDetails = state.userdetails;
    return {userDetails}
}
export default connect(mapStateToProps)(DrawerContent)