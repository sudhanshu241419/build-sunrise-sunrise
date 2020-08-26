import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    headerContainer:{flexDirection: 'row',height:40,justifyContent:'space-around',marginTop:10},
    headerContents:{flexDirection: 'row',fontSize:20, color:'#fff',height:30},
})