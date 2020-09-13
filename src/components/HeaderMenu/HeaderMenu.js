import React from 'react';
import { Text, View, SafeAreaView, } from 'react-native';
import styles from './Styles'

const HeaderMenu = (props) => {   
return(    

        
    <View style={styles.headerContainer} numberOfLines={1} lazy={true}>
        <Text style={[styles.headerContents]} onPress={() => props.nav.navigate('Product')}>Product</Text> 
        <Text style={[styles.headerContents]} onPress={() => props.nav.navigate('Service')}>Service</Text>
        <Text style={[styles.headerContents]} onPress={() => props.nav.navigate('Marketing')}>Marketing Materials</Text> 
    </View>
        

);
}

export default HeaderMenu
