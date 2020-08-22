import { StyleSheet } from 'react-native';
const fontFamily = Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const letterSpacing = 2;
export default StyleSheet.create({
    
    app: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center", 
        width:'100%'      
    },
    header: {
        height:'55%',
        marginTop:10,        
        justifyContent: 'center',
        alignItems: 'center',
    },
    authheader: {
        height:'55%',
        marginTop:10,        
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontWeight: '200',
        lineHeight: 35,
        fontFamily: fontFamily,
        letterSpacing: letterSpacing,
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',        
    },
    stretch: {
        width: 250,
        height: 250,
        // resizeMode: 'stretch',
        // justifyContent:'center',
    },
    text: {
        fontWeight: '400',
        fontFamily: fontFamily,
        letterSpacing: letterSpacing,
        paddingBottom: 0,
        fontSize: 20,
        marginVertical: 10,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    code: {
        fontFamily: 'monospace, monospace',
    },
});