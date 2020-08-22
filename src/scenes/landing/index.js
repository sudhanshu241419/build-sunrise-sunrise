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
import { getAccessToken, getUser } from '../../utils/api'
import styles from './style'
const fontFamily = Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';

const LandingScreen = ({ navigation }) => {
  const [userToken, setUserToken] = React.useState(null);
  React.useEffect(() => {
    getAccessToken().then((value) => setUserToken(value));
  }, []);

  return (

    <View style={styles.app}>
      <LinearGradient
        colors={['#3542B3', '#1B2356']}
        style={{ flex: 1, height: "100%" }}
        start={{ x: 0, y: 0.5 }}
      >
        <StatusBar backgroundColor='#3542B3' />

        <ScrollView>
          <View style={styles.header}>
            <Image
              accessibilityLabel="SUNRISE"
              source={require('../../assets/sunrise-logo.png')}
              resizeMode="contain"
              style={styles.stretch}
            />
            <Text style={styles.title}>The Future Of Referral Marketing</Text>
            {/* <Text style={styles.title}>{userToken}</Text> */}
          </View>

          <View style={{ alignItems: 'center',marginTop:30}}>
            <CustomButton
              textAlign={'center'}
              onPress={() => navigation.navigate('Register')}
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
              GET STARTED
                    </CustomButton>
          </View>
          <View style={{ paddingTop: 25 }}>
            <Text style={styles.text}>Don't have account?</Text>
            <CustomButton
              onPress={() => navigation.navigate('Login')}
              textAlign={'center'}
              childrenStyle={{
                fontFamily: fontFamily,
                letterSpacing: 2,
                fontSize: 35,
                color: '#6379FF',
                fontWeight: '900',
                textAlign: 'center',
              }}>
              Sign In here
                    </CustomButton>
          </View>

        </ScrollView>
      </LinearGradient>

    </View>
  )
}

export default LandingScreen;
