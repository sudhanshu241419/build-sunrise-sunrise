import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    locationContainer:{flexDirection: 'row',borderColor: "#6379FF",backgroundColor:"#6379FF",padding:5,height:40},
    icon:{flexDirection: 'row',color:'#fff', fontSize:20,top:5,marginLeft:5},
    locationText:{flexDirection: 'row', fontSize:16, color:'#fff', paddingTop:5,marginLeft:10,height:25}
})