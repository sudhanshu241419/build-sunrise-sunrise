import React from 'react';
import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles'
const BodyBand = (props) => {
    return (
        <View style={[styles.row, styles.band]}>
            <Text style={[styles.row,styles.textColor,styles.bandText]} onPress={() => props.nav.navigate(props.goto)}>{props.phrase}</Text>
            <Ionicons name={props.iconName} style={[styles.row,styles.textColor,styles.bandIcon]}  onPress={() => props.nav.navigate(props.goto)}/>
        </View>
    )
}
export default BodyBand