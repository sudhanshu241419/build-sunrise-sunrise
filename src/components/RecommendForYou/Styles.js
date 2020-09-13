import {StyleSheet,Platform,Dimensions} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';
const {width,height} = Dimensions.get('window');
const letterSpacing = 2;
export default StyleSheet.create({
    productContainer: { 
        height:'auto',
        width:width,
        justifyContent:'space-around'
    },
    recomended:{ 
        color: '#000000', 
        fontSize: 20, 
        fontWeight: 'bold', 
        textAlign: 'left', 
        paddingLeft: 10, 
        marginTop: 8 
    },
    procontainer:{
        flexDirection: "row", 
        width: width, 
        marginTop: 25,
        justifyContent:'space-around',
        textAlign:'center'
    },
    flex:{flex:1},
    description:{color: '#383838', fontSize: 14, textAlign: 'left',},
    price:{color: '#000000', fontSize: 14, fontWeight: 'bold', textAlign: 'left',},
    heightAuto:{height:'auto'}
})