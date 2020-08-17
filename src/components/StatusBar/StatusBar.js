import React from 'react';
import {
    StatusBar as Bar,
    StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
const StatusBar = () => {
    return (
        <LinearGradient 
        colors={['#3542B3', '#1B2356']} 
        start={{ x: 0, y: 0.5 }} 
        style={[StyleSheet.absoluteFill, { height: 68 }]}>
            <Bar />
        </LinearGradient>
       
    )
}
export default StatusBar