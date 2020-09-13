import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Styles'
const Products = (props) => {
    return (
        <>
        
        
        <Text style={[styles.title, styles.textWeight]}>{props.title}</Text>

        <View style={[styles.productContainer, styles.flex]}>

            <View style={[styles.proSubContainer, styles.row]}>
                <View style={styles.heightAuto}>
                    <Image source={require('../../assets/emp.png')} />
                    <Text style={[styles.textSize, styles.textColor]}>Carpet Cleaning Special1</Text>
                    <Text style={[styles.textSize, styles.subtextColor]}>From $99/m</Text>
                </View>
                <View style={styles.heightAuto}>
                    <Image source={require('../../assets/emp.png')} />
                    <Text style={[styles.textSize, styles.textColor]}>Carpet Cleaning Special</Text>
                    <Text style={[styles.textSize, styles.subtextColor]}>From $99/m</Text>
                </View>

            </View>
            <View style={[styles.proSubContainer, styles.row]}>
                <View style={styles.heightAuto}>
                    <Image source={require('../../assets/emp.png')} />
                    <Text style={[styles.textSize, styles.textColor]}>Carpet Cleaning Special</Text>
                    <Text style={[styles.textSize, styles.subtextColor]}>From $99/m</Text>
                </View>
                <View style={styles.heightAuto}>
                    <Image source={require('../../assets/emp.png')} />
                    <Text style={[styles.textSize, styles.textColor]}>Carpet Cleaning Special</Text>
                    <Text style={[styles.textSize, styles.subtextColor]}>From $99/m</Text>
                </View>

            </View>
        </View>
        </>
    );
}

export default Products
