import { StyleSheet, Platform } from 'react-native';
const fontFamily = Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily = Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
  container: {
    flex: 1,   
    textAlign: 'center',
  },
  addContainer:{flexDirection:"row",padding:5,height:70,marginTop:10},
  row:{flexDirection:"row"},
  photo:{borderWidth:1,borderRadius:5,height:60,width:70,alignItems:'center',padding:5},

  contentContainer:{width:'80%',height:70,marginLeft:10},
  masterText:{paddingLeft:5,flex: 1, fontSize:14, color:'#000', height:50},
  doj:{paddingLeft:5,flex: 1, fontSize:12, color:'#707070',height:14},
  headTitle:{
    alignItems: 'center', paddingBottom: 10,marginTop:10, backgroundColor:'#fff'
  },
  titleStyle:{ borderBottomWidth: 4, borderColor: '#6379FF', color: '#6379FF', paddingBottom: 10, fontSize: 23, fontWeight: 'bold' }
})