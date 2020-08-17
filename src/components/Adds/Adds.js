import React from 'react';
import { Text,View,Image } from 'react-native';
import styles from './Styles'

const Adds = (props) => {
return(
    <View style={styles.addContainer}>
         <View style={styles.row}>
           <Image source={require('../../assets/download.png')}/>
         </View>
         <View style={styles.contentContainer}>
            <Text style={styles.masterText}>Apple Airpods Gen2. Compatible With iOS 14 Classic...</Text>
            <Text style={styles.priceText}>$217.99</Text>
         </View>
      </View>
);
}

export default Adds
