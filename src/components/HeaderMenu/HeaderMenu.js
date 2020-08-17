import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles'
const HeaderMenu = () => {
return(
<View style={styles.headerContainer}>
    <Text style={[styles.headerContents,{marginLeft:0}]}>Product</Text> 
    <Text style={[styles.headerContents,{marginLeft:35}]}>Service</Text>
    <Text style={[styles.headerContents,{marginLeft:33}]}>Marketing Materials</Text> 
</View>
);
}

export default HeaderMenu
