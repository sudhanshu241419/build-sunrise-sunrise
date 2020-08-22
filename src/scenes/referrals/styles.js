import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ffffff',
      textAlign:'center',       
    },
    sub_container:{ 
      height: 5, 
      width: 180, 
      borderTopColor: '#6379FF', 
      borderTopWidth: 3, 
      marginBottom: 20, 
      marginLeft: 115 
    },
    
    text_header: {
        color: '#6379FF',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign:'center',
        marginBottom:5,
        marginTop:40,     
        fontFamily:fontFamily,
        letterSpacing:letterSpacing,
            
    },
    referralInfo: {
      color: '#6379FF',      
      fontSize: 20,
      textAlign:'center',
      marginBottom:10,
      marginTop:10,
      fontFamily:fontFamily,
      letterSpacing:letterSpacing
  },
  referral: {
    color: '#000',
    fontSize: 14,
    textAlign:"center",
    marginBottom:5,
    marginTop:10,     
    fontFamily:labelfontFamily,   
},
    text_footer: {
        color: '#000',
        fontWeight:'bold',
        fontSize: 18,
        marginLeft:60,
        marginBottom:5,
        marginTop:10,     
        fontFamily:labelfontFamily,   
    },
    text_footer_exp: {
      color: '#000',
      fontWeight:'bold', 
      fontSize: 18,    
      marginTop:10
  },
  text_footer_cvv: {
    color: '#000',
    fontWeight:'bold', 
    fontSize: 18,    
    marginTop:10,
    marginLeft:150
  },
    action: {
        flexDirection: 'row',
        marginTop: 0,
        borderWidth: 1,
        borderColor: '#6379FF',
        width:"70%",
        marginLeft:60,
        height:50,
        paddingTop:10      
    },
    actionTerms: {
        flexDirection: 'row',
        marginTop: 0,
        borderWidth: 1,
        borderColor: '#6379FF',
        width:"70%",
        marginLeft:60,          
    },
    actionCvv: {
      flexDirection: 'row',
      marginTop: 0,    
      width:"70%",
      marginLeft:60,          
  },
  exp: {
      flexDirection: 'row',    
      borderWidth: 1,
      borderColor: '#6379FF',
      width:"30%", 
      height:50,
      paddingTop:10          
  },
  referralInfo: {
    color: '#6379FF',  
    fontSize: 20,
    textAlign:'center',
    marginBottom:10,
    marginTop:20,
    fontFamily:fontFamily,
    //letterSpacing:letterSpacing
    fontWeight:"bold"
},
text: {
  fontSize: 30,
  alignSelf: 'center',
  color: '#000'
},
    actionError: {
        flexDirection: 'row',
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
        
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#000',  
        fontSize:18,
        width:292,
        height: 41,
        borderColor:'#6379FF',
        textAlign:'center',
        padding:5       
    },
    picker: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      color: '#000',  
      fontSize:25,
      borderColor:'#6379FF',
      textAlign:'center',
      padding:5,    
      width:"70%"
  },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      color: '#000',  
      fontSize:18,      
      borderColor:'#6379FF',     
     
  },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        textAlign:"center"
    },
    button: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom:5
    },
    signIn: {
        width: '70%',
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    createAcount: {
      width: '49%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
    textSign: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    checkcontainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:'#fff',      
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
      backgroundColor:'#fff',      
    },
    checkbox: {
      alignSelf: "center",
      backgroundColor:'#fff', 
         
    },
    label: {
      margin: 8,
      color:'#ABABC9',
      fontSize:19,
      fontFamily:fontFamily,
    },

  pickerWrapper: {
    borderColor: "#6379FF",
    borderWidth: 1,
    backgroundColor: "#fff",
    width:'70%',
    alignContent:'center',
    marginLeft:60    
 },
 pickerIcon: {    
    position: "absolute",
    bottom: 10,
    top:0,
    right: 8,
    fontSize: 40,
    color:"#6379FF"
 },
 checkedIcon:{
  position: "absolute",
  bottom: 10,
  top:0,
  left: 8,
  fontSize: 40,
  color:"#6379FF"
 },

 pickerContent: {
    color: "#000",
    backgroundColor: "transparent",
    alignItems:"center",
    textAlign:'center'
 },
 pickerContentB2b:{
  color: "#000000",
  backgroundColor: "transparent",  
  marginLeft:100,  
},
 pickerContentAcquire: {
  color: "#000",
  backgroundColor: "transparent",
  alignItems:"center",
  textAlign:'center',
  marginLeft:50,
},
  pickerContentRealState: {
    color: "#000000",
    backgroundColor: "transparent",
    marginLeft:50,
    fontWeight:'bold',
    fontSize:18,
  }
  });  