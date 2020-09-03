import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    row:{flexDirection:'row'},
    textColor:{color:'#ffffff'},
    reviewContainer:{flex:1, backgroundColor:"#FFFFFF",padding:5,height:40,marginTop:10},
    reviewText:{fontSize:20, color:'#000000', paddingTop:3,marginLeft:6,fontWeight:'bold'},
    rateText:{fontSize:16, color:'#707070', paddingTop:3,marginLeft:6,fontWeight:'bold'},
    contents:{flexDirection:"row", borderColor:'#707070', borderWidth:1,padding:5,height:140,marginTop:30,borderBottomWidth:0,borderRightWidth:0},
    contentsImage:{flexDirection:"row",marginTop:15,marginLeft:25},
    pro:{fontSize:25, color:'#000000', paddingTop:3,marginLeft:6,fontWeight:'bold'},
    prosub:{fontSize:20, color:'#707070', paddingTop:3,marginLeft:6,fontWeight:'bold'},
    ratemoreContainer:{borderColor: "#707070",borderTopWidth:1, backgroundColor:"#ffffff",height:40,width:350,marginLeft:32,marginTop:8},
    ratemore:{flexDirection: 'row', fontSize:16, color:'#6379FF', marginTop:7,marginLeft:6,height:25,fontWeight:'bold'},
    icon:{flexDirection: 'row',color:'#6379FF', fontSize:20,bottom: 10,top:10, position: "absolute",right:0},
    starContainer:{flexDirection:'row',marginLeft:6,paddingTop:3},
    star:{flexDirection: 'row',color:'#C8C8C8',fontSize: 30}
})