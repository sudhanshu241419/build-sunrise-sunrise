import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        justifyContent: 'space-around'
    },
    text_header: {
        color: '#4359F7',
        fontWeight: 'bold',
        fontSize: 31,
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 50
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    icon_style: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    action: {
        flexDirection: 'row',
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#63636333',
        borderRadius: 7,
        width: "70%",
        marginLeft: 60,
        height: 50,
        paddingTop: 10

    },

    fPassContainer: { marginLeft: 48 },
    fpassword: {
        color: '#ABABC9',
        fontSize: 15,
        marginTop: 5,
        marginRight:35
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
        marginTop: Platform.OS === 'ios' ? 0 : -9,
        color: '#05375a',
        borderRadius: 10,
        fontSize: 24,        
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        textAlign: "center"
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    touchsignIn:{ 
        width:'70%',             
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    signIn: {
        width:'100%',        
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    createAcount: {
        width: '70%',
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5
    },
    actionRemember: {
        flexDirection: 'row',
        height: 50,        
        justifyContent: "space-around",        
    },
    checkcontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent:'space-between',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 15,       
        marginLeft:28
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        marginTop: 5,
        color: '#1A1A1A',
        fontSize: 15
    },
});