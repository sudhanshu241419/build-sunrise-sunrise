import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    addContainer:{
        flexDirection:"row", 
        borderColor:'#6379FF', 
        borderLeftWidth:0, 
        borderRightWidth:0, 
        borderWidth:1,
        padding:5,
        paddingBottom:0,
        height:'auto',
        marginTop:10
    },
    row:{flexDirection:"row"},
    contentContainer:{width:'80%',height:70},
    masterText:{paddingLeft:5,flex: 1, fontSize:14, color:'#000', height:50},
    priceText:{paddingLeft:5,flex: 1, fontSize:12, color:'#707070',marginTop:5,height:14},
})