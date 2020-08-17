import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles'
const Location = () => {
return(
<View style={styles.locationContainer}>
    <Ionicons name="location" style={styles.icon}/>
    <Text style={styles.locationText}>Location In - Brooklyn 112266</Text> 
</View>
);
}

export default Location
