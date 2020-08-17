import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
action: {
    flexDirection: 'row',
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#6379FF',   
    height:50        
},
    textInput: {      
        color: '#000',  
        fontSize:15,
        borderRadius:10,        
        width:"90%",
        marginLeft:28
    },
    searchWrapper: {
        borderColor: "#6379FF",
        borderWidth: 1,
        backgroundColor: "#fff",      
        alignContent:'center',
        marginTop:10,
        width:"95%",
        marginLeft:10,
        borderRadius:5,
        height:40,        
     },
     
searchIcon:{
    position: "absolute",    
    top:7,
    left:4,
    fontSize: 24,
    color:"#000000"
},
cameraIcon: {    
    position: "absolute",
    bottom: 10,
    top:10,
    right: 15,
    fontSize: 19,
    color:"#838383"
},
micIcon:{
    position: "absolute",
    bottom: 10,
    top:11,
    right: 0,
    fontSize: 15,
    color:"#838383"
}, 
  
   
  }); 