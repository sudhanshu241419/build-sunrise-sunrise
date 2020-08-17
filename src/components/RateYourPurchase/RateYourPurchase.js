import React from 'react';
import { Text,View,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/Ionicons';
import styles from './Styles'

const RateYourPurchase = (props) => {
return(
    <>
    
    <View style={{flex:1, backgroundColor:"#FFFFFF",padding:5,height:40,marginTop:10}}>
      <Text style={{fontSize:20, color:'#000000', paddingTop:3,marginLeft:6,height:27,fontWeight:'bold'}}>Review Your Last Purchase</Text> 
      <Text style={{fontSize:16, color:'#707070', paddingTop:3,marginLeft:6,height:21,fontWeight:'bold'}}>Rate you purchase</Text>
    </View>


    <View style={{flexDirection:"row", borderColor:'#707070', borderWidth:1,padding:5,height:140,marginTop:30,borderBottomWidth:0,borderRightWidth:0}}>
      <View style={{flexDirection:"row",marginTop:15,marginLeft:25}}>
           <Image source={require('../../assets/images.png')}/>
      </View>
      <View style={{width:196, marginLeft:40,marginTop:15}}>
         <Text style={{fontSize:25, color:'#000000', paddingTop:3,marginLeft:6,height:33,fontWeight:'bold'}}>Prudtions Pride</Text> 
         <Text style={{fontSize:20, color:'#707070', paddingTop:3,marginLeft:6,height:27,fontWeight:'bold'}}>Vitamin - C 100mg</Text> 

         <View style={{flexDirection:'row',marginLeft:6,paddingTop:3}}>
            <AntDesign name="star" style={{flexDirection: 'row',color:'#C8C8C8',fontSize: 30,}}/>
            <AntDesign name="star" style={{flexDirection: 'row',color:'#C8C8C8',fontSize: 30,}}/>
            <AntDesign name="star" style={{flexDirection: 'row',color:'#C8C8C8',fontSize: 30,}}/>
            <AntDesign name="star" style={{flexDirection: 'row',color:'#C8C8C8',fontSize: 30,}}/>
            <AntDesign name="star" style={{flexDirection: 'row',color:'#C8C8C8',fontSize: 30,}}/>
         </View>
     </View>        
  
    </View>
    <View style={{borderColor: "#707070",borderTopWidth:1, backgroundColor:"#ffffff",height:40,width:350,marginLeft:32,marginTop:8}}>
          <Text style={{flexDirection: 'row', fontSize:16, color:'#6379FF', marginTop:7,marginLeft:6,height:25,fontWeight:'bold'}}>Rate More Products</Text> 
          <Ionicons name="ios-chevron-forward-sharp" style={{flexDirection: 'row',color:'#6379FF', fontSize:20,bottom: 10,top:10, position: "absolute",right:0}}/>
    </View>
</>
);
}

export default RateYourPurchase
