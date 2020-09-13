import { StyleSheet, Platform } from 'react-native';
const fontFamily = Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily = Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        textAlign: 'center',
    },
    sub_container:{ 
        height: 5, 
        width: 180, 
        borderTopColor: '#6379FF', 
        borderTopWidth: 3, 
        marginBottom:20, 
        marginLeft:115 
    },

    text_header: {
        color: '#6379FF',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 40,
        fontFamily: fontFamily,
        letterSpacing: letterSpacing,

    },
    referralInfo: {
        color: '#6379FF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20,
        fontFamily: fontFamily,
        fontWeight: "bold"
    },

    referral: {
        color: '#000',
        fontSize: 14,
        textAlign: "center",
        marginBottom: 5,
        marginTop: 10,
        fontFamily: labelfontFamily,
    },
    text_footer: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 60,
        marginBottom: 5,
        marginTop: 10,
        fontFamily: labelfontFamily,
    },

    action: {
        flexDirection: 'row',
        marginTop: 0,
        borderWidth: 1,
        borderColor: '#6379FF',
        width: "70%",
        marginLeft: 60,
        height: 50,
        paddingTop: 10
    },
    actionTerms: {
        flexDirection: 'row',
        marginTop: 0,
        borderWidth: 1,
        borderColor: '#6379FF',
        width: "70%",
        marginLeft: 60,
    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#000',
        fontSize: 18,
        borderColor: '#6379FF',
    },

    button: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5
    },
    signIn: {
        width: 'auto',
        height: 72,        
        justifyContent: 'space-around',
        alignItems:'center',
        padding:10,
        borderRadius: 10
    },
    textSign: {
        fontSize: 25,
        fontWeight: 'bold',
        alignItems:'center'
    },

    label: {
        margin: 8,
        color:'#ABABC9',
        fontSize:15,
        fontFamily:fontFamily        
    },

    pickerWrapper: {
        borderColor: "#6379FF",
        borderWidth: 1,
        backgroundColor: "#fff",
        width: '70%',
        alignContent: 'center',
        marginLeft: 60
    },
    pickerIcon: {
        position: "absolute",
        bottom: 10,
        top: 0,
        right: 8,
        fontSize: 40,
        color: "#6379FF"
    },
    checkedIcon: {
        position: "absolute",
        bottom: 10,
        top: 0,
        left: 8,
        fontSize: 40,
        color: "#6379FF"
    },

    pickerContent: {
        color: "#000",
        backgroundColor: "transparent",
        alignItems: "center",
        textAlign: 'center'
    },
    pickerContentB2b: {
        color: "#000000",
        backgroundColor: "transparent",
        marginLeft: 10,
    },
    pickerContentAcquire: {
        color: "#000",
        backgroundColor: "transparent",
        alignItems: "center",
        textAlign: 'center',
        marginLeft: 10,
    },
    pickerContentRealState: {
        color: "#000000",
        backgroundColor: "transparent",
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 18,
    },
    logo:{width:200,height:150,marginLeft:105},
    business_logo: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 60,        
        marginTop: 10,
        fontFamily: labelfontFamily,
    },
    logoContainer: {
       textAlign: "center",
       
    },
    logo_text:{
        color: '#000',
        fontSize: 18,
        fontWeight:'bold',
        textAlign: "center",
        marginBottom: 5,
        marginTop: 10,
        fontFamily: labelfontFamily,
    },
    touch:{height:40,width:'100%',textAlign:'center',marginLeft:150  },
    select:{
        marginTop:5,color: '#fff',fontSize:15,justifyContent:'space-between',backgroundColor: '#6379FF',height:30,width:100,textAlign:'center',borderRadius:5,paddingTop:4
    },
    addContainer:{flexDirection:"row",padding:5,height:'auto',justifyContent:'space-around', borderWidth:1,margin:5},
    row:{flexDirection:"row"},
    photo:{borderWidth:1,borderRadius:5,height:60,width:60,alignItems:'center',justifyContent:'space-around'},
    contentContainer:{width:'80%',height:'auto',marginLeft:10,justifyContent:'space-around'},
    masterText:{paddingLeft:5,flex: 1, fontSize:18, color:'#000', justifyContent:'space-around'},
    name:{paddingLeft:5,flex: 1, fontSize:18, color:'#000', justifyContent:'space-around',fontWeight:'bold'}


});  