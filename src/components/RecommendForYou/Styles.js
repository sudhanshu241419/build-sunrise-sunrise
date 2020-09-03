import {StyleSheet,Platform} from 'react-native';
const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const labelfontFamily= Platform.OS === 'ios' ? 'Segoe UI,Bold' : 'sans-serif-medium';

const letterSpacing = 2;
export default StyleSheet.create({
    recomended:{ color: '#000000', fontSize: 20, fontWeight: 'bold', textAlign: 'left', paddingLeft: 10, marginTop: 8 },
    procontainer:{flexDirection: "row", width: "90%", marginTop: 25, marginLeft: 30},
    pro:{flex: 1, width: "70%"},
    protwo:{ flex: 1, width: "50%", marginLeft: 70 },
    description:{color: '#383838', fontSize: 14, textAlign: 'left',},
    price:{color: '#000000', fontSize: 14, fontWeight: 'bold', textAlign: 'left',}
})