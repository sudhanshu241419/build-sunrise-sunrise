import {StyleSheet,Platform} from 'react-native';

const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const letterSpacing = 2;

export default StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ffffff',
      textAlign:'center', 
      justifyContent:'space-between',
      padding:30,
    },
  shop_btn_text: {
    fontSize: 25,
    color: '#FFFFFF',
    letterSpacing:letterSpacing,
    fontFamily:fontFamily,
    paddingTop: 7,
    paddingBottom:7,
    fontWeight: '400',
    textAlign: 'center',
  }
})