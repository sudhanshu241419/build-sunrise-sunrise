import React from 'react';
import { View,Image } from 'react-native';
import styles from './Styles'

const Banner = (props) => {
    return(
        <View style={styles.bannerContainer} >
            <Image source={require('../../assets/Black-Friday-and-Cyber-Monday.png')} style={{width:props.win.width,alignSelf: 'stretch'}}/>
        </View>
    );
}
export default Banner
