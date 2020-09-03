import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/custom-button';
import styles from './styles';

const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const letterSpacing = 2;

const PastOrder = (props) => {
    const [data, setData] = React.useState({
        pageTitle : 'Past Order'
    });
    console.log("From Rate your purchase",props);
    const pastOrder = () =>{
        return (
            <View style={styles.master}>
                <View style={[styles.row, styles.borderColor, { height: 140, }]}>
                    <View style={[styles.row, { marginTop: 15, marginLeft: 25 }]}>
                        <Image source={require('../../assets/images.png')} />
                    </View>
                    <View style={{ width: 196, marginLeft: 40, marginTop: 15 }}>
                        <Text style={styles.productHeading}>Prudtions Pride</Text>
                        <Text style={styles.productSubHeading}>Vitamin - C 100mg</Text>
                        <Text style={[styles.productSubHeading, { color: '#000' }]}>$25.99</Text>                            
                    </View>
                </View>                    
            </View>    
        )
    }

    return (
        <View style={styles.container}>
            {
                (props.shop==1)?<LinearGradient
                    colors={['#3542B3', '#1B2356']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                >
                    <StatusBar />
                    <Search />
                    <HeaderMenu nav={props.nav}/>
                </LinearGradient>:null
            }
            <View >
                <Text style={styles.heading}>{data.pageTitle}</Text>
            </View>
            <ScrollView>
                {pastOrder()}
                {pastOrder()}
                {pastOrder()}
                {pastOrder()}
                {pastOrder()}                
            </ScrollView>
        </View>

    );

}

export default PastOrder;