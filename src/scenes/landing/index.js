import React, {Component} from 'react';
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
import {getAccessToken,getUser} from '../../utils/api'

const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const letterSpacing = 2;

const LandingScreen = ({navigation}) => {
  const [userToken, setUserToken] = React.useState(null);
  React.useEffect(() => {   
    getAccessToken().then((value)=>setUserToken(value));      
  }, []);

  return(
    
  <View style={styles.app}>
    <ScrollView>
    <LinearGradient
          colors={['#3542B3', '#1B2356']}
          style={{ flex:1,height:"100%"}}
          start={{ x: 0, y: 0.5 }}         
    >
     
    <StatusBar backgroundColor='#3542B3'/>
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
    <View style={{textAlign: 'center'}}>
      { userToken !==null ?
      (<View style={{justifyContent: 'center',
      textAlign: 'center',}}> 
      <View style={{justifyContent: 'center', alignItems: 'center',marginTop:30,}}>
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
            letterSpacing:letterSpacing,
            fontFamily:fontFamily,
            fontWeight: '400',
            textAlign: 'center',
          }}>
          SHOP NOW
        </CustomButton>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop:10,}}>
        <CustomButton
          textAlign={'center'}
          onPress={() => Alert.alert('Coming Soon!','Page not available...', [{text: 'Okay'}])}
          padding={13}
          backgroundColor={'transparent'}
          borderRadius={25}
          borderWidth={3}
          borderColor={'#FFFFFF'}
          width={'75%'}
          childrenStyle={{
            fontSize: 30,
            color: '#FFFFFF',
            letterSpacing:letterSpacing,
            fontFamily:fontFamily,
            fontWeight: '400',
            textAlign: 'center',
          }}>
          SUBMIT LEAD
        </CustomButton>
      </View>
      <View style={{marginTop:200}}></View>
      </View>)
      :
      (<><View style={{justifyContent: 'center', alignItems: 'center',marginTop:10}}>
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
            letterSpacing:letterSpacing,
            fontFamily:fontFamily,
            fontWeight: '400',
            textAlign: 'center',
          }}>
          GET STARTED
        </CustomButton>
      </View>
      <View style={{paddingTop: 25}}>
        <Text style={styles.text}>Don't have account?</Text>
        <CustomButton
          onPress={() => navigation.navigate('Login')}
          textAlign={'center'}
          childrenStyle={{
            fontFamily: fontFamily,
            letterSpacing:letterSpacing,
            fontSize: 35,
            color: '#6379FF',
            fontWeight: '900',
            textAlign: 'center',
          }}>
          Sign In here
        </CustomButton>
      </View><View style={{marginTop:200}}></View></>)
    }
    </View>
    </LinearGradient>
    </ScrollView>
  </View>
)
}

const styles = StyleSheet.create({
  
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500,
    flex: 1,    
    justifyContent: 'space-between',    
  },
  header: {
        justifyContent: 'center',
        alignItems: 'center',
  },
  title: {
    fontWeight: '200',
    lineHeight:35,
    fontFamily: fontFamily,
    letterSpacing:letterSpacing,
    fontSize: 25,
    // marginVertical: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  stretch: {
    width: 250,
    height: 250,
    // resizeMode: 'stretch',
    // justifyContent:'center',
  },
  text:{
    fontWeight: '400',
    fontFamily: fontFamily,
    letterSpacing:letterSpacing,
    paddingBottom: 0,
    fontSize: 20,
    marginVertical: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  code: {
    fontFamily: 'monospace, monospace',
  },
});

export default LandingScreen;
