import React from 'react';
import { Text,View,Image } from 'react-native';
import styles from './Styles'

const DealOfDay = (props) => {
return(
    <View style={styles.dealContainer}>
            <Text style={[styles.title,styles.textMargin,styles.textWeight]}>Deal of The Day</Text> 
            <Image source={require('../../assets/oil-change-icon10.png')} style={{width:props.win.width,alignSelf: 'stretch'}}/>
            <Text style={styles.title}>30% Off Synthetic Oil Change</Text> 
            <Text style={[styles.title,styles.textWeight]}>Ends in 26:00:31</Text> 
    </View>
);
}

export default DealOfDay
