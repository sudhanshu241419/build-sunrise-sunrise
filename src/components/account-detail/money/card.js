import React from 'react';
import {
    Text, 
    View,   
    Platform
  } from 'react-native';
import styles from './styles';
import CustomButton from '../../custom-button';

const MoneyCardComponent = () => {
    return(
        <View style={styles.mon_card_container}>
            <View style={styles.mon_card}>
                <Text style={styles.mon_card_heading}>Total Earned</Text>
                <CustomButton
                textAlign={'center'}
                onPress={(e) => e.preventDefault()}
                padding={12}
                backgroundColor={'#6379FF'}
                borderWidth={5}
                borderColor={'#6379FF'}
                borderRadius={28}
                width={'90%'}
                childrenStyle={[styles.mon_card_text,{color: '#FFFFFF'}]}>
                $2179.00
                </CustomButton>
            </View>
            <View style={styles.mon_card}>
                <Text style={styles.mon_card_heading}>Total Paid</Text>
                <CustomButton
                textAlign={'center'}
                onPress={(e) => e.preventDefault()}
                padding={12}
                width={'90%'}
                backgroundColor={'#fff'}
                borderWidth={5}
                borderColor={'#6379FF'}
                borderRadius={28}
                childrenStyle={[styles.mon_card_text,{color: '#6379FF'}]}>
                $1102.11
                </CustomButton>
            </View>
        </View>
    )
}

export default MoneyCardComponent;