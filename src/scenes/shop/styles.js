import { StyleSheet, Platform } from 'react-native';
const fontFamily = Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily = Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
  container: {
    flex: 1,   
    textAlign: 'center',
  },

  header: {
    height: 80,
    marginTop: 20,
    backgroundColor: '#3542B3',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  textWeight: { fontWeight: 'bold' },

  title: {
    color: '#000000',
    height: 27,
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 10,
    marginTop: 10
  },

  borderColor: { borderColor: '#707070' },

  row: { flexDirection: "row" },

  borderTopWidth: { borderTopWidth: 1 },

  borderBottomWidth: { borderBottomWidth: 1 },

  proSubContainer: { width: "90%", marginTop: 25, marginLeft: 30 },

  productContainer: { borderWidth: 0, borderTopWidth: 0, borderColor: '#707070', height: 340 },

  flex: { flex: 1 },

  textSize: { height: 19, fontSize: 14 },

  textColor: { color: '#383838', textAlign: 'left' },

  subtextColor: { color: '#000000', textAlign: 'left', fontWeight: 'bold' },

  needSuggestions: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    padding: 0,
    height: 30,
    alignContent: 'center'
  },

  suggestionContent: {
    fontSize: 15,
    color: '#000000',
    height: 19,
    marginTop:2,
    marginLeft: 100
  },

  shopAllDep: {
    color: '#000000',
    height: 27,
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 30,
    marginTop: 10
  },

  services: {
    color: '#707070', height: 27, fontSize: 20, textAlign: 'left', paddingLeft: 30, marginTop: 20
  },

  blade: { backgroundColor: "#6379FF", padding: 5, height: 40 },

  bladeText: {
    fontSize: 16, color: '#fff', paddingTop: 3, marginLeft: 6, height: 25
  },
  
  bladeIcon: {
    color: '#fff', fontSize: 20, bottom: 10, top: 10, position: "absolute", right: 0
  },

 proColSec:{ flex: 1, width: "50%", marginLeft: 70 }


}) 