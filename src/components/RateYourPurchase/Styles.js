import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    row:{flexDirection:'row'},
    textColor:{color:'#ffffff'},
    band:{
    
    borderColor: "#707070", 
    backgroundColor:"#6379FF",
    borderTopWidth:1,
    borderBottomWidth:1,
    padding:5,
    height:40,
    marginTop:5
   },

   bandText:{ fontSize:16, paddingTop:3,marginLeft:6,height:25,fontWeight:'bold'},
   bandPossition:{ fontSize:20,bottom: 10,top:10, position: "absolute",right:0}
})