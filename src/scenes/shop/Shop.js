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
                <Search />
                <HeaderMenu nav={navigation}/>
            </LinearGradient>
            
            <Location />

            {/* Scroll content area */}

            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <Banner win={win} title={false} imgpath="../../assets/Black-Friday-and-Cyber-Monday.png" />
                <Adds />
                <DealOfDay win={win} />

                <BodyBand phrase="View More Deals" iconName="ios-chevron-forward-sharp" goto="Deals" nav={navigation}/>

                <RateYourPurchase nav={navigation}/>

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

                <View style={[styles.row, styles.needSuggestions, styles.borderColor]}>
                    <Text style={[styles.row, styles.suggestionContent, styles.textWeight]}>Need Suggestions? ContactUs!</Text>
                </View>

                <Text style={[styles.shopAllDep, styles.textWeight]}>
                    Shop All Departments & Services
                </Text>
                <Text style={[styles.services, styles.textWeight]}>
                    Services
                </Text>

                <View style={[styles.productContainer, styles.flex]}>

                    <View style={[styles.proSubContainer, styles.row]}>
                        <View style={[styles.flex, { width: "70%" }]}>
                            <Image source={require('../../assets/automotive-service-advisor.png')} />
                            <Text style={[styles.textSize, styles.textColor]}>Car Mechanic</Text>

                        </View>
                        <View style={styles.proColSec}>
                            <Image source={require('../../assets/hqdefault.png')} />
                            <Text style={[styles.textSize, styles.textColor]}>Carpet Cleaning</Text>

                        </View>

                    </View>
                    <View style={[styles.proSubContainer, styles.row]}>
                        <View style={[styles.flex, { width: "70%" }]}>
                            <Image source={require('../../assets/bigstock-Credit-Score-Chart-or-Pie-Grap-120307136.png')} />
                            <Text style={[styles.textSize, styles.textColor]}>Credit Repair</Text>

                        </View>
                        <View style={styles.proColSec}>
                            <Image source={require('../../assets/how-income-tax-1000.png')} />
                            <Text style={[styles.textSize, styles.textColor]}>Taxes & Accounting</Text>

                        </View>

                    </View>
                </View>

                <BodyBand phrase="View All Services" iconName="ios-chevron-forward-sharp" goto="Service" nav={navigation}/>

                <Text style={[styles.services, styles.textWeight]}>
                    Products
                </Text>

                <View style={[styles.productContainer, styles.flex]}>

                    <View style={[styles.proSubContainer, styles.row]}>
                        <View style={[styles.flex, { width: "70%" }]}>
                            <Image source={require('../../assets/shoes.png')} />
                            <Text style={[styles.textSize, styles.textColor]}>Shoes & Accessories</Text>

                        </View>
                        <View style={styles.proColSec}>
                            <Image source={require('../../assets/iphone11-select-2019-family.png')} />
                            <Text style={[styles.textSize, styles.textColor]}>Apple Products</Text>

                        </View>

                    </View>
                    <View style={[styles.proSubContainer, styles.row]}>
                        <View style={[styles.flex, { width: "70%" }]}>
                            <Image source={require('../../assets/cotaphil.png')} />
                            <Text style={[styles.textSize, styles.textColor]}>Health & Beauty</Text>

                        </View>
                        <View style={styles.proColSec}>
                            <Image source={require('../../assets/kitchenware.png')} />
                            <Text style={[styles.textSize, styles.textColor]}>Kitchenware</Text>

                        </View>

                    </View>
                </View>

                <BodyBand phrase="View All Product Categories" iconName="ios-chevron-forward-sharp" goto="Categories" nav={navigation}/>

            </ScrollView>
        </View>

    );

}

export default Shop;