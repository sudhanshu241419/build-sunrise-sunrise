import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    headerContainer:{flexDirection: 'row',padding:5,height:40,margin:10},
    headerContents:{flexDirection: 'row',fontSize:20, color:'#fff',height:27},
})