import {StyleSheet,Platform,Dimensions} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';
const {width,height} = Dimensions.get('window')
const letterSpacing = 2;
export default StyleSheet.create({
    container: {
        flex: 1,   
        textAlign: 'center',
        backgroundColor:'#fff',
        justifyContent:'space-around',
        width:width
      },
    row:{flexDirection:'row'},
    textColor:{color:'#ffffff'},
      
   Tab:{marginLeft:20,flexDirection:'row', fontSize: 12, color: '#000000', marginTop:10, height: 16,fontWeight:'bold'},
   heading:{marginLeft:20, fontSize: 29, color: '#000000', marginTop:20, height: 40},
   borderColor: { borderColor: '#707070' },
   icon:{ flexDirection: 'row', color: '#FFC500', fontSize: 30, },
   icon1:{ flexDirection: 'row', color: '#999', fontSize: 30, },
   productHeading:{ fontSize: 25, color: '#000000', paddingTop: 3, marginLeft: 6, fontWeight: 'bold' },
   productSubHeading:{ fontSize: 20, color: '#707070', paddingTop: 3, marginLeft: 6, fontWeight: 'bold' },
   master:{ 
     borderWidth: 1, 
     margin: 5, 
     padding:10,
     marginTop: 10, 
     justifyContent:'space-around',
     height:'auto'
     
    },
   masterBranch:{ borderWidth: 1, margin: 5,},
   underLine:{borderWidth: 1.5,borderColor:'#6379FF', width:110,marginTop: 5},
   line:{ 
     borderColor: "#707070", 
     borderTopWidth: 1,      
     backgroundColor: "#ffffff", 
     height: 45, 
     width:'80%', 
     marginLeft: 32, 
     marginTop: 8,
     marginBottom:1
     
    }
})
