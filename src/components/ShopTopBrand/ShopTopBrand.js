import React from 'react';
import { View, Image, Text } from 'react-native';
import Styles from './Styles'

const ShopTopBrand = (props) => {
    return (
        <View style={Styles.container}>
            <Text style={{ color: '#000000',fontSize: 20, fontWeight: 'bold', textAlign: 'left', paddingLeft: 10, marginTop: 15, marginBottom: 15 }}>Shop top Brands</Text>
            <Image source={require('../../assets/iyh-2020.png')} style={{ width: props.win.width, alignSelf: 'stretch' }} />
        </View>
    );
}
export default ShopTopBrand
