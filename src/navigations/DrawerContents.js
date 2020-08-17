import React from 'react';
import {View,SafeAreaView } from "react-native";
import {DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import {Avatar,Title,Caption,Drawer} from 'react-native-paper'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default DrawerContent=(props)=>{
  const { signOut } = React.useContext(AuthContext);
    return(
      <SafeAreaView style={{flex:1,backgroundColor:'#1F2865',zIndex:1}}>
          <DrawerContentScrollView {...props}>
              <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{alignItems:'center',marginTop:60}}>
                        <Avatar.Image source={require('../assets/jp.png')}
                          size={100}
                        />
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Title style={{fontSize:14,fontFamily:'Segoe UI', color:'#fff',marginBottom:0}}>
                            Joseph Pilgrim
                        </Title>
                        <Title style={{fontSize:18,fontFamily:'Segoe UI', color:'#fff'}}>VIP Manager</Title>
                        <Caption style={{fontSize:14,fontFamily:'Segoe UI', color:'#fff',marginBottom:30}}>jplgrim@myasg.biz</Caption>
                    </View>
                </View>
              </View> 
              <Drawer.Section style={styles.drawerSection}>              
             
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem              
                          label="Add Referrals"
                          onPress={()=>{props.navigation.navigate('AddReferrals')}} 
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.lightBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem               
                          label="Referrals History"
                          onPress={()=>{props.navigation.navigate('ReferralHistory')}} 
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.darkBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem               
                          label="Soap Now"
                          onPress={()=>{props.navigation.navigate('Shop')}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.lightBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem               
                          label="Rate Your Purchase"
                          onPress={()=>{props.navigation.navigate('RateYourPurchase')}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.darkBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
  
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem
                          label="Write a Review"
                          onPress={()=>{}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.lightBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem
                          label="Share"
                          onPress={()=>{}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.darkBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
  
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem               
                          label="Your E-Store"
                          onPress={()=>{}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.lightBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem               
                          label="Your E-Business Card"
                          onPress={()=>{props.navigation.navigate('EBusinessCard')}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.darkBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
  
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem
                          label="Add Remove Business Listing"
                          onPress={()=>{props.navigation.navigate('AddBusiness')}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.lightBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem
                          label="Referrals History"
                          onPress={()=>{}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.darkBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
  
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem
                          label="How App Works"
                          onPress={()=>{}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.lightBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem
                          label="Contact Support"
                          onPress={()=>{}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.darkBlue}               
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem               
                          label="Privacy Policy"
                          onPress={()=>{}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.lightBlue}              
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem          
                          label="Dashboard"
                          onPress={()=>{props.navigation.navigate('Dashboard')}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.darkBlue}
                      //    icon = {()=>
                      //     <Ionicons name="send-sharp" size={15} color="#ffffff"/>
                      //     }
                      /> 
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem               
                          label="My Customer"
                          onPress={()=>{props.navigation.navigate('MyCustomer')}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.lightBlue}              
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
  
              <View style={{flexDirection: 'row',marginTop: 0,width:"90%"}}>
                  <View style={{flexDirection: 'row',width:"100%"}}>
                      <DrawerItem               
                          label="Sign Out"
                          onPress={() => {signOut()}}
                          labelStyle={{color: '#ffffff', fontSize:14}}
                          style={style.lightBlue}              
                      />
                  </View>
                  <View style={{flexDirection: 'row', paddingTop:16}}>
                      <Ionicons name="send-sharp" size={14} color="#ffffff"/>
                  </View>
              </View>
              </Drawer.Section>
              
          </DrawerContentScrollView>
          
      </SafeAreaView>
      )
  }