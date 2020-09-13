import React from 'react';
import { View, Image, Text } from 'react-native';
import Styles from './Styles'

const Recommended = (props) => {
    return (
        <>
            <Text style={Styles.recomended}>Recommended For You</Text>

            <View style={[Styles.productContainer, Styles.flex]}>
                <View style={Styles.procontainer}>
                    <View style={Styles.heightAuto}>
                        <Image source={require('../../assets/emp.png')} />
                        <Text style={Styles.description}>Carpet Cleaning Special</Text>
                        <Text style={{  }}>From $99/m</Text>
                    </View>
                    <View style={Styles.heightAuto}>
                        <Image source={require('../../assets/emp.png')} />
                        <Text style={Styles.description}>Carpet Cleaning Special</Text>
                        <Text style={Styles.price}>From $99/m</Text>
                    </View>

                </View>
                <View style={Styles.procontainer}>
                    <View style={Styles.heightAuto}>
                        <Image source={require('../../assets/emp.png')} />
                        <Text style={Styles.description}>Carpet Cleaning Special</Text>
                        <Text style={Styles.price}>From $99/m</Text>
                    </View>
                    <View style={Styles.heightAuto}>
                        <Image source={require('../../assets/emp.png')} />
                        <Text style={Styles.description}>Carpet Cleaning Special</Text>
                        <Text style={Styles.price}>From $99/m</Text>
                    </View>

                </View>
            </View>
        </>
    );
}
export default Recommended
