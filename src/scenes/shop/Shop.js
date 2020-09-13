import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
    StatusBar,
    StyleSheet,
    TextInput
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useTheme, Button } from 'react-native-paper';
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
import ActivityIndicator from 'react-native-loading-spinner-overlay';
import { searchData, GetData, DummyData, UpdateSearch, SearchProduct, pageButton } from './searchFunctions'
import { SafeAreaView } from 'react-native';

const win = Dimensions.get('window');

const Shop = ({ navigation }) => {
    const [data, setData] = React.useState({
        error: null,
    });
    const [showLoader, setLoader] = React.useState(false);
    const [items, setItems] = React.useState({});
    const [temp, setTemp] = React.useState({});
    const [searchTxt, setSearchTxt] = React.useState(null);

    React.useEffect(() => {
        setTemp(DummyData())
    })

    const getSearch = (val) => {
        setSearchTxt(val)
        if (val.length > 3) {
            const searchData = UpdateSearch(val, temp)
            console.log('set',searchData)
            setItems(searchData);            
        }else{
            console.log('unset')
            setItems({})
        }
        return false;
    }


    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute', top: "50%", right: 0, left: 0, zIndex: 1 }}>
                <ActivityIndicator visible={showLoader} color="#6379FF" />
            </View>
            <LinearGradient
                colors={['#3542B3', '#1B2356']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <StatusBar />
                <Search nav={navigation} back='Product'/>
                <HeaderMenu nav={navigation} />
            </LinearGradient>

            {items.length > 0 ?
                <ScrollView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
                    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#ffffff', marginBottom: 5 }}>
                        {
                            items.map((item, index) => {
                                return <View style={styles.master} key={index}>
                                    <View style={[styles.row, styles.borderColor, { height: 140 }]}>
                                        <View style={[styles.row, { marginTop: 15, marginLeft: 25 }]}>
                                            <Image source={require('../../assets/images.png')} />
                                        </View>
                                        <View style={{ width: '75%', marginLeft: 10, marginTop: 15 }}>
                                            <Text style={styles.productHeading}>{item.name}</Text>
                                            <Text style={[styles.productSubHeading, { marginTop: 5 }]}>Vitamin - C 100mg</Text>

                                            <View style={{ right: 0, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={[styles.productSubHeading, { color: '#000', marginTop: 5 }]}>$25.99</Text>
                                                {pageButton('ADD', '#6379FF', '#FFFFFF')}
                                            </View>
                                        </View>


                                    </View>

                                </View>
                            })
                        }

                    </SafeAreaView>
                </ScrollView> :
                <>
                    <Location />

                    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

                        <Banner win={win} title={false} imgpath="../../assets/Black-Friday-and-Cyber-Monday.png" />
                        <Adds />
                        <DealOfDay win={win} />

                        <BodyBand phrase="View More Deals" iconName="ios-chevron-forward-sharp" goto="Deals" nav={navigation} />

                        <RateYourPurchase nav={navigation} />

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
                                <View style={styles.heightAuto}>
                                    <Image source={require('../../assets/automotive-service-advisor.png')} />
                                    <Text style={[styles.textSize, styles.textColor]}>Car Mechanic</Text>

                                </View>
                                <View style={styles.heightAuto}>
                                    <Image source={require('../../assets/hqdefault.png')} />
                                    <Text style={[styles.textSize, styles.textColor]}>Carpet Cleaning</Text>

                                </View>

                            </View>
                            <View style={[styles.proSubContainer, styles.row]}>
                                <View style={styles.heightAuto}>
                                    <Image source={require('../../assets/bigstock-Credit-Score-Chart-or-Pie-Grap-120307136.png')} />
                                    <Text style={[styles.textSize, styles.textColor]}>Credit Repair</Text>

                                </View>
                                <View style={styles.heightAuto}>
                                    <Image source={require('../../assets/how-income-tax-1000.png')} />
                                    <Text style={[styles.textSize, styles.textColor]}>Taxes & Accounting</Text>

                                </View>

                            </View>
                        </View>

                        <BodyBand phrase="View All Services" iconName="ios-chevron-forward-sharp" goto="Service" nav={navigation} />

                        <Text style={[styles.services, styles.textWeight]}>
                            Products
                        </Text>

                        <View style={[styles.productContainer, styles.flex]}>

                            <View style={[styles.proSubContainer, styles.row]}>
                                <View style={styles.heightAuto}>
                                    <Image source={require('../../assets/shoes.png')} />
                                    <Text style={[styles.textSize, styles.textColor]}>Shoes & Accessories</Text>
                                </View>
                                <View style={styles.heightAuto}>
                                    <Image source={require('../../assets/iphone11-select-2019-family.png')} />
                                    <Text style={[styles.textSize, styles.textColor]}>Apple Products</Text>
                                </View>

                            </View>
                            <View style={[styles.proSubContainer, styles.row,{marginBottom:5}]}>
                                <View style={styles.heightAuto}>
                                    <Image source={require('../../assets/cotaphil.png')} />
                                    <Text style={[styles.textSize, styles.textColor]}>Health & Beauty</Text>

                                </View>
                                <View style={styles.heightAuto}>
                                    <Image source={require('../../assets/kitchenware.png')} />
                                    <Text style={[styles.textSize, styles.textColor]}>Kitchenware</Text>
                                </View>

                            </View>
                        </View>

                        <BodyBand phrase="View All Product Categories" iconName="ios-chevron-forward-sharp" goto="Categories" nav={navigation} />
                    </ScrollView>
                </>
            }
        </View>
    );

}
export default Shop;