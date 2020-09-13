import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',        
        justifyContent:'space-around',
        marginTop:10,
        marginBottom:10,
        marginHorizontal: 5, 
        overflow: 'hidden',        
    },
    headerContents:{
        flexDirection: 'row',
        fontSize:20, 
        color:'#fff',        
        },
})