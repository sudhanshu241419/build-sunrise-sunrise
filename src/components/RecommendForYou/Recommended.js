import React from 'react';
import { View, Image, Text } from 'react-native';
import Styles from './Styles'

const Recommended = (props) => {
    return (
        <>
            <Text style={{ color: '#000000', height: 27, fontSize: 20, fontWeight: 'bold', textAlign: 'left', paddingLeft: 10, marginTop: 10 }}>Recommended For You</Text>

            <View style={Styles.container}>
                <View style={{ flexDirection: "row", width: "90%", marginTop: 25, marginLeft: 30 }}>
                    <View style={{ flex: 1, width: "70%" }}>
                        <Image source={require('../../assets/emp.png')} />
                        <Text style={{ color: '#383838', height: 19, fontSize: 14, textAlign: 'left', }}>Carpet Cleaning Special</Text>
                        <Text style={{ color: '#000000', height: 19, fontSize: 14, fontWeight: 'bold', textAlign: 'left', }}>From $99/m</Text>
                    </View>
                    <View style={{ flex: 1, width: "50%", marginLeft: 70 }}>
                        <Image source={require('../../assets/emp.png')} />
                        <Text style={{ color: '#383838', height: 19, fontSize: 14, textAlign: 'left',justifyContent:'space-around'}}>Carpet Cleaning Special</Text>
                        <Text style={{ color: '#000000', height: 19, fontSize: 14, fontWeight: 'bold', textAlign: 'left', }}>From $99/m</Text>
                    </View>

                </View>
                <View style={{ flexDirection: "row", width: "90%", marginTop: 30, marginLeft: 30 }}>
                    <View style={{ flex: 1, width: "70%" }}>
                        <Image source={require('../../assets/emp.png')} />
                        <Text style={{ color: '#383838', height: 19, fontSize: 14, textAlign: 'left', }}>Carpet Cleaning Special</Text>
                        <Text style={{ color: '#000000', height: 19, fontSize: 14, fontWeight: 'bold', textAlign: 'left', }}>From $99/m</Text>
                    </View>
                    <View style={{ flex: 1, width: "50%", marginLeft: 70 }}>
                        <Image source={require('../../assets/emp.png')} />
                        <Text style={{ color: '#383838', height: 19, fontSize: 14, textAlign: 'left' }}>Carpet Cleaning Special</Text>
                        <Text style={{ color: '#000000', height: 19, fontSize: 14, fontWeight: 'bold', textAlign: 'left', }}>From $99/m</Text>
                    </View>

                </View>
            </View>
        </>
    );
}
export default Recommended
