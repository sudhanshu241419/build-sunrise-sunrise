import React from 'react';
import {   
    Text,    
    View,    
    StatusBar
} from 'react-native';
import styles from './history.styles'
import MoneyCardComponent from '../../components/account-detail/money/card';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../components/custom-button';

const ReferralHistoryScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={{ alignItems: 'center', paddingBottom: 10 }}>
                <Text style={{ borderBottomWidth: 4, borderColor: '#6379FF', color: '#6379FF', paddingBottom: 10, fontSize: 23, fontWeight: 'bold' }}>Refferal History</Text>
            </View>
            <MoneyCardComponent />
            <View style={{ paddingTop: 5, paddingBottom: 6 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', paddingBottom: 3 }}>Lead Status</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="circle" size={18} color="#76CE76" style={{ paddingRight: 2 }} />
                        <Text style={{ color: "#000000" }}>{`Lead Closed`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 8 }}>
                        <Icon name="circle" size={18} color="#707070" style={{ paddingRight: 2 }} />
                        <Text style={{ color: "#000000" }}>Lead Pending</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 8 }}>
                        <Icon name="circle" size={18} color="#C51A1A" style={{ paddingRight: 2 }} />
                        <Text style={{ color: "#000000" }}>Lead Not Closed</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>November 27, 2021</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3, paddingBottom: 3 }}>
                    <Text style={{ color: "#C51A1A" }}>Jenkins, Wilson</Text>
                    <Text style={{ color: "#C51A1A" }}>0.00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3, paddingBottom: 3 }}>
                    <Text style={{ color: "#76CE76" }}>Jackson, Mikayla</Text>
                    <Text style={{ color: "#76CE76" }}>+$572.01</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3, paddingBottom: 3 }}>
                    <Text style={{ color: "#707070" }}>West, Adams</Text>
                    <Text style={{ color: "#707070" }}>0.00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3, paddingBottom: 3 }}>
                    <Text style={{ color: "#707070" }}>Kayla, Young</Text>
                    <Text style={{ color: "#707070" }}>0.00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3, paddingBottom: 3 }}>
                    <Text style={{ color: "#707070" }}>Johnson, Betty</Text>
                    <Text style={{ color: "#707070" }}>0.00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3, paddingBottom: 3 }}>
                    <Text style={{ color: "#707070" }}>Rivera, Carlos</Text>
                    <Text style={{ color: "#707070" }}>0.00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3, paddingBottom: 3 }}>
                    <Text style={{ color: "#707070" }}>Pilgrim, Joe</Text>
                    <Text style={{ color: "#707070" }}>0.00</Text>
                </View>
            </View>
            <View style={{ padding: 30, justifyContent: 'space-between' }}>
                <View>
                    <CustomButton
                        textAlign={'center'}
                        onPress={(e) => e.preventDefault()}
                        padding={10}
                        borderRadius={20}
                        backgroundColor={'#6379FF'}
                        childrenStyle={[styles.shop_btn_text, { color: '#fff' }]}
                    >
                        Submit Referral
                    </CustomButton>
                </View>
            </View>
        </View>
    )
}

export default ReferralHistoryScreen;