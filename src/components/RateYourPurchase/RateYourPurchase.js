import React from 'react';
import { Text,View,Image,TouchableOpacity  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/Ionicons';
import styles from './Styles'


const RateYourPurchase = (props) => {
return(
    <>
    
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewText}>Review Your Last Purchase</Text> 
      <Text style={styles.rateText}>Rate you purchase</Text>
    </View>


    <View style={styles.contents}>
      <View style={styles.contentsImage}>
           <Image source={require('../../assets/images.png')}/>
      </View>
      <View style={{width:196, marginLeft:40,marginTop:15}}>
         <Text style={styles.pro}>Prudtions Pride</Text> 
         <Text style={styles.prosub}>Vitamin - C 100mg</Text> 

         <View style={styles.starContainer}>
            <AntDesign name="star" style={styles.star}/>
            <AntDesign name="star" style={styles.star}/>
            <AntDesign name="star" style={styles.star}/>
            <AntDesign name="star" style={styles.star}/>
            <AntDesign name="star" style={styles.star}/>
         </View>
     </View>        
  
    </View>
    <TouchableOpacity onPress={() => props.nav.navigate('RateYourPurchase')}> 
    <View style={styles.ratemoreContainer} >
          <Text style={styles.ratemore} >Rate More Products</Text> 
          <Ionicons name="ios-chevron-forward-sharp" style={styles.icon}  /> 
    </View>
    </TouchableOpacity >
</>
);
}

export default RateYourPurchase
