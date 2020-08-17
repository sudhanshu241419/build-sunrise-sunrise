import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    dealContainer:{flex:1,marginTop:10},
    title:{
        color:'#000000', 
        height:21,
        fontSize:16,        
        textAlign:'left',
        paddingLeft:10,
    },
    textMargin:{ marginTop:10,marginBottom:15},
    textWeight:{fontWeight:'bold'},
})