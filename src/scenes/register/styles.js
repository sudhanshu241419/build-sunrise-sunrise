import { StyleSheet, Platform } from 'react-native';
const fontFamily = Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily = Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent:'space-around',
    textAlign: 'center',
  },

  text_header: {
    color: '#4359F7',
    fontWeight: 'bold',
    fontSize: 31,
    textAlign: 'center',
    marginBottom: 15,    
    fontFamily: fontFamily,
    letterSpacing: letterSpacing
  },
  paymentInfo: {
    color: '#686ced',

    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    fontFamily: fontFamily,
    letterSpacing: letterSpacing
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
  text_footer_exp: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10
  },
  text_footer_cvv: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 125
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
  actionCvv: {
    flexDirection: 'row',
    marginTop: 0,
    width: "70%",
    marginLeft: 60,
  },
  exp: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#6379FF',
    width: "30%",
    height: 50,
    paddingTop: 10
  },
  cvv: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#6379FF',
    width: "30%",
    marginLeft: 115,
    height: 50,
    paddingTop: 10
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
    fontSize: 18,

  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    textAlign: "center"
  },
  button: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 5
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
    fontWeight: 'bold',
    padding: 5
  },
  checkcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  checkbox: {
    alignSelf: "center",
    backgroundColor: '#fff',

  },
  label: {
    margin: 8,
    color: '#000',
    fontSize: 17,
    fontFamily: fontFamily,
    justifyContent:'space-around'
  },

  statusBarContainer: {
    flex: 1,
    backgroundColor: '#2980b9',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
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
    top: 5,
    zIndex:1,
    right: 1,
    fontSize: 40,
    color: "#6379FF",    
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
pickerContentB2b: {
  color: "#000000",
  backgroundColor: "#fff",
  marginLeft: 10,
},
icon_style: {
  paddingLeft: 5,
  paddingRight: 5,
},

});  