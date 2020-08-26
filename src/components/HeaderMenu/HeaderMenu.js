import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from './Styles'


const HeaderMenu = (props) => {   
return(    
<SafeAreaView>
    <View style={styles.headerContainer}>
        <Text style={[styles.headerContents]} onPress={() => props.nav.navigate('Product')}>Product</Text> 
        <Text style={[styles.headerContents]} onPress={() => props.nav.navigate('Service')}>Service</Text>
        <Text style={[styles.headerContents]} onPress={() => props.nav.navigate('Marketing')}>Marketing Materials</Text> 
    </View>
</SafeAreaView>
);
}

export default HeaderMenu
