import { StyleSheet, Platform } from 'react-native';

const fontFamily = Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const letterSpacing = 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },

  text_header: {
    color: '#6379FF',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 5,    
    fontFamily: fontFamily,

  },

  text_name: {
    color: '#6379FF',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'left',    
    height:33,
    fontFamily: fontFamily,
  },
  vip_name: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',    
    height:27,
    fontFamily: fontFamily,
  },
  content:{
    flexDirection:'row',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',    
    height:27,
    fontFamily: fontFamily,
  },
  content1:{
    flexDirection:'row',
    color: '#000000',    
    fontSize: 20,
    textAlign: 'left',    
    height:27,
    fontFamily: fontFamily,    
    flexWrap:'wrap'
  },

  social: {
    color: '#6379FF',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',    
    height:33,
    marginTop:10,
    fontFamily: fontFamily,
  },

})