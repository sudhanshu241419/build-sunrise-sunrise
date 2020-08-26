import React from 'react';
import {
    Text,
    View,    
    ScrollView,    
    Image,
    Dimensions,
    StatusBar,
    StyleSheet
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-paper';
import styles from './styles'
import Search from '../../components/Search/Search';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Banner from '../../components/Banner/Banner';
import DealOfDay from '../../components/DealOfDay/DealOfDay';
import Recommended from '../../components/RecommendForYou/Recommended';
import Products from '../../components/Products/Products'

const win = Dimensions.get('window');

const Deals = (props) => {
    const [data, setData] = React.useState({

    });
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#3542B3', '#1B2356']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <StatusBar />
                <Search />
                <HeaderMenu nav={props.navigation} />
            </LinearGradient>
            
            

            {/* Scroll content area */}

            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
               
                <Banner win={win} title={false} imgpath="../../assets/Black-Friday-and-Cyber-Monday.png" />
                <DealOfDay win={win} />
                
                
                <View style={[styles.fdirection, styles.borderColor, styles.borderTopWidth, { marginBottom: 10 }]} />
                <View style={[styles.fdirection, styles.borderColor, styles.borderBottomWidth, { marginTop: 5 }]} />
                <Recommended />
                <View style={[styles.fdirection, styles.borderColor, styles.borderBottomWidth, { marginTop: 15 }]} />

                
                <View style={[styles.row, styles.borderTopWidth, { marginBottom: 10 }]} />
                <View style={[styles.row, styles.borderBottomWidth, styles.borderColor]} />
                <Products title='Deals Near You' titleMargin='' />
                <View style={[styles.row, styles.borderBottomWidth, styles.borderColor]} />              

            </ScrollView>
        </View>

    );

}

export default Deals;