import React from 'react';
import { Text, View, Image, ScrollView, SafeAreaView,StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/custom-button';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Search from '../../components/Search/Search';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const letterSpacing = 2;

const Shop = (props) => {
    const [data, setData] = React.useState({});
    // console.log("test",props.route.name)
    const rateProduct = () =>{
        return (
            <View style={styles.master}>
                    <View style={[styles.row, styles.borderColor, { height: 'auto' }]}>
                        <View style={[styles.row, { marginTop: 15, marginLeft: 25 }]}>
                            <Image source={require('../../assets/images.png')} />
                        </View>
                        <View style={{ width: 196, marginLeft: 40, marginTop: 15 }}>
                            <Text style={styles.productHeading}>Prudtions Pride</Text>
                            <Text style={styles.productSubHeading}>Vitamin - C 100mg</Text>
                            <Text style={[styles.productSubHeading, { color: '#000' }]}>$25.99</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 6, paddingTop: 3 }}>
                                <AntDesign name="star" style={styles.icon} />
                                <AntDesign name="star" style={styles.icon} />
                                <AntDesign name="star" style={styles.icon} />
                                <AntDesign name="star" style={styles.icon} />
                                <AntDesign name="star" style={styles.icon1} />
                            </View>
                        </View>

                    </View>
                    <View style={styles.line}>
                        <Text style={{ flexDirection: 'row', fontSize: 16, color: '#6379FF', marginTop: 7, marginLeft: 6, fontWeight: 'bold' }}>Rate More Products</Text>
                        <Ionicons name="ios-chevron-forward-sharp" style={{ flexDirection: 'row', color: '#6379FF', fontSize: 20, bottom: 10, top: 10, position: "absolute", right: 0 }} />
                    </View>
                </View>

        )
    }

    const relatedProduct = () =>{
        return(
        <SafeAreaView style={styles.master}>           
            <View style={[styles.borderColor, { height: 'auto' }]}>
                <View style={[{ marginTop: 15, marginLeft: 25 }]}>
                    <Text style={styles.productHeading}>Related Products</Text>
                </View>
                <View style={[styles.row, {justifyContent:'space-around', marginTop:10 }]}>
                <Image source={require('../../assets/kitchenware102.png')} style={[styles.row]} />
                <Image source={require('../../assets/shoes102.png')} style={[styles.row]} />
                <Image source={require('../../assets/iphone104.png')} style={[styles.row]} />
            </View>
            </View>
        </SafeAreaView>
        )
    }

    const pageButton = (buttonName,buttonColor,fontColor,icon=null)=>{
        return (
        <CustomButton style={styles.row}
            textAlign={'center'}
            onPress={() => (cc)}
            padding={3}
            backgroundColor={buttonColor}
            borderWidth={3}
            borderColor='#6379FF'
            borderRadius={10}                        
            height={20}
            width={175}
            childrenStyle={{
                fontSize: 25,
                color: `${fontColor}`,                            
                textAlign: 'center',
                fontFamily:fontFamily,
                letterSpacing:letterSpacing
            }}>
            {buttonName}
            {
            (icon)?<Ionicons name ={icon}  style={{ color: '#fff', fontSize: 25,marginTop:10}} />:null
            }
        </CustomButton>
        )
    }


    return (
        <View style={styles.container}>
            {
                (props.route.name==="RateYourPurchase")?(
                    <LinearGradient
                        colors={['#3542B3', '#1B2356']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <StatusBar />
                        <Search />
                        <HeaderMenu nav={props.navigation}/>
                    </LinearGradient>
                ):null
            }
            <View >
                <Text style={styles.heading}>Rate Past Purchases</Text>
            </View>
            <ScrollView>
                { rateProduct() }
                { rateProduct() }
                { rateProduct() }
                { rateProduct() }

                { relatedProduct() }
                <SafeAreaView style={{flexDirection:"row",justifyContent:'space-around',marginBottom:10}}>
                  { pageButton('Previous','transparent','#C8C8C8') }
                  { pageButton('Next','#6379FF','#fff','arrow-forward-outline') }
                </SafeAreaView>
            </ScrollView>
        </View>
    );

}

export default Shop;