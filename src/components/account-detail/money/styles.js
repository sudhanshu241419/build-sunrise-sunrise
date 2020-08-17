import {StyleSheet,Platform} from 'react-native';

const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const letterSpacing = 2;

export default StyleSheet.create({
    mon_card_container: {
        flexDirection:'row'    
    },
    mon_card: {
        width: '50%'
    },
    mon_card_text: {
        fontSize: 25,
        color: '#FFFFFF',
        letterSpacing:letterSpacing,
        fontFamily:fontFamily,
        paddingTop: 18,
        paddingBottom:18,
        fontWeight: '400',
        textAlign: 'center',
    },
    mon_card_heading:{
        textAlign:'center',
        padding:5, 
        fontSize: 15,
        paddingRight:20, 
        fontWeight:"bold",
        color:'#6379FF'
    }
})