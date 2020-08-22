import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Platform,
    Text,
    View,
    StatusBar,
    ScrollView,
    Alert
} from 'react-native';
import CustomButton from '../../components/custom-button';
import LinearGradient from 'react-native-linear-gradient'
import styles from './style'
const fontFamily = Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';

const AuthLanding = ({ navigation }) => {
    const [userToken, setUserToken] = React.useState(null);
    
    return (

        <View style={styles.app}>
            <LinearGradient
                colors={['#3542B3', '#1B2356']}
                style={{ flex: 1, height: "100%" }}
                start={{ x: 0, y: 0.5 }}
            >
                <ScrollView>

                    <StatusBar backgroundColor='#3542B3' />

                    <View style={styles.authheader}>
                        <Image
                            accessibilityLabel="SUNRISE"
                            source={require('../../assets/sunrise-logo.png')}
                            resizeMode="contain"
                            style={styles.stretch}
                        />
                        <Text style={styles.title}>The Future Of Referral Marketing</Text>
                        {/* <Text style={styles.title}>{userToken}</Text> */}
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50, }}>
                        <CustomButton
                            textAlign={'center'}
                            onPress={() => navigation.navigate('Shop')}
                            padding={13}
                            backgroundColor={'#6379FF'}
                            borderRadius={25}
                            width={'75%'}
                            childrenStyle={{
                                fontSize: 30,
                                color: '#FFFFFF',
                                letterSpacing: 2,
                                fontFamily: fontFamily,
                                fontWeight: '400',
                                textAlign: 'center',
                            }}>
                            SHOP NOW
                  </CustomButton>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
                        <CustomButton
                            textAlign={'center'}
                            onPress={() => Alert.alert('Coming Soon!', 'Page not available...', [{ text: 'Okay' }])}
                            padding={13}
                            backgroundColor={'transparent'}
                            borderRadius={25}
                            borderWidth={3}
                            borderColor={'#FFFFFF'}
                            width={'75%'}
                            childrenStyle={{
                                fontSize: 30,
                                color: '#FFFFFF',
                                letterSpacing: 2,
                                fontFamily: fontFamily,
                                fontWeight: '400',
                                textAlign: 'center',
                            }}>
                            SUBMIT LEAD
                  </CustomButton>
                    </View>
                </ScrollView>
            </LinearGradient>

        </View>
    )
}

export default AuthLanding;
