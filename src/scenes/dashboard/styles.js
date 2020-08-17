import {StyleSheet,Platform} from 'react-native';

const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const letterSpacing = 2;

export default StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ffffff',
      textAlign:'center', 
      padding:30,
    },
    slider_heading:{
      textAlign:'center',
      padding:5, 
      fontSize:23,
      fontWeight: 'bold',
      paddingRight:20, 
      color:'#6379FF'
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