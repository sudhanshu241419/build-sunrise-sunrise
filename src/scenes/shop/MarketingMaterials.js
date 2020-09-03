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
import Location from '../../components/Location/Location';
import Banner from '../../components/Banner/Banner';
import Adds from '../../components/Adds/Adds';
import DealOfDay from '../../components/DealOfDay/DealOfDay';
import RateYourPurchase from '../../components/RateYourPurchase/RateYourPurchase';
import Recommended from '../../components/RecommendForYou/Recommended';
import ShopTopBrand from '../../components/ShopTopBrand/ShopTopBrand'
import Products from '../../components/Products/Products'
import BodyBand from '../../components/BodyBand/BodyBand'
const win = Dimensions.get('window');

const Shop = ({navigation}) => {
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
                <Search nav={navigation} back='Marketing'/>
                <HeaderMenu nav={navigation} />
            </LinearGradient>
            
            

            {/* Scroll content area */}

            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
               
                <Adds />
                <DealOfDay win={win} />

                <BodyBand phrase="View More Deals" iconName="ios-chevron-forward-sharp" />

                
                <View style={[styles.fdirection, styles.borderColor, styles.borderTopWidth, { marginBottom: 10 }]} />
                <View style={[styles.fdirection, styles.borderColor, styles.borderBottomWidth, { marginTop: 5 }]} />
                <Recommended />
                <View style={[styles.fdirection, styles.borderColor, styles.borderBottomWidth, { marginTop: 15 }]} />

                <ShopTopBrand win={win} />

                <View style={[styles.row, styles.borderColor, styles.borderBottomWidth, { marginTop: 25 }]} />
                <Products title='Buy It Again' titleMargin='' />

                <View style={[styles.row, styles.borderTopWidth, { marginBottom: 10 }]} />
                <View style={[styles.row, styles.borderBottomWidth, styles.borderColor]} />
                <Products title='Deals Near You' titleMargin='' />
                <View style={[styles.row, styles.borderBottomWidth, styles.borderColor]} />              

            </ScrollView>
        </View>

    );

}

export default Shop;