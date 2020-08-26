import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    container: {
        flex: 1,   
        textAlign: 'center',
        backgroundColor:'#f7f2f2'
      },
    row:{flexDirection:'row'},
    textColor:{color:'#ffffff'},
      
   Tab:{marginLeft:20,flexDirection:'row', fontSize: 12, color: '#000000', marginTop:10, height: 16,fontWeight:'bold'},
   heading:{marginLeft:20, fontSize: 29, color: '#000000', marginTop:20, height: 40},
   borderColor: { borderColor: '#707070' },
   icon:{ flexDirection: 'row', color: '#FFC500', fontSize: 30, },
   icon1:{ flexDirection: 'row', color: '#999', fontSize: 30, },
   productHeading:{ fontSize: 25, color: '#6379FF', paddingTop: 3, marginLeft: 6, fontWeight: 'bold' },
   productSubHeading:{ fontSize: 15, color: '#000000', paddingTop: 3, marginLeft: 6, },
   master:{ borderWidth: 1, margin:4, marginTop: 5, justifyContent:'space-around', backgroundColor:'#fff',borderColor:'#000', borderWidth:1},
   masterBranch:{ borderWidth: 1, margin:4, backgroundColor:'#fff',borderColor:'#000', borderWidth:1},
   underLine:{borderWidth: 1.5,borderColor:'#6379FF', width:110,marginTop: 5},
   headtitle:{ margin:4, marginTop: 5, justifyContent:'space-around',},
})