import React from 'react';
import { Text, View, Image, ScrollView, SafeAreaView,StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './categoryStyle';
import Search from '../../components/Search/Search';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const letterSpacing = 2;

const Categories = (props) => {
    const [data, setData] = React.useState({

    });

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#3542B3', '#1B2356']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <StatusBar />
                <Search />
                <HeaderMenu nav={props.navigation}/>
            </LinearGradient>
            <View style={styles.headtitle}>                    
                <View style={{ width: 196}}>
                    <Text style={styles.productHeading}>All Categories</Text>
                </View>                    
            </View>
            <ScrollView>
                <View style={styles.master}>
                    <View style={[styles.row, styles.borderColor, { height: 140, }]}>
                        <View style={[styles.row, { marginTop: 15, marginLeft: 25 }]}>
                            <Image source={require('../../assets/iphone11-select-2019-family.png')} />
                        </View>
                        <View style={{ width: 196, marginLeft: 40, marginTop: 15 }}>
                            <Text style={styles.productHeading}>Apple Products</Text>
                            <Text style={styles.productSubHeading}>See Apple Product & Accessories</Text>
                            
                           
                        </View>

                    </View>
                    
                </View>



                <View style={styles.masterBranch}>
                    <View style={[styles.row, styles.borderColor, { height: 140, }]}>
                        <View style={[styles.row, { marginTop: 15, marginLeft: 25 }]}>
                            <Image source={require('../../assets/shoes.png')} />
                        </View>
                        <View style={{ width: 196, marginLeft: 40, marginTop: 15 }}>
                            <Text style={styles.productHeading}>Footwear</Text>
                            <Text style={styles.productSubHeading}>Shoes & Accessories</Text>
                            
                            
                        </View>

                    </View>
                    
                </View>


                <View style={styles.masterBranch}>
                    <View style={[styles.row, styles.borderColor, { height: 140, }]}>
                        <View style={[styles.row, { marginTop: 15, marginLeft: 25 }]}>
                            <Image source={require('../../assets/cotaphil.png')} />
                        </View>
                        <View style={{ width: 196, marginLeft: 40, marginTop: 15 }}>
                            <Text style={styles.productHeading}>Health</Text>
                            <Text style={styles.productSubHeading}>Health & Beauty</Text>
                            
                            
                        </View>

                    </View>
                    
                </View>



                <View style={styles.masterBranch}>
                    <View style={[styles.row, styles.borderColor, { height: 140, }]}>
                        <View style={[styles.row, { marginTop: 15, marginLeft: 25 }]}>
                            <Image source={require('../../assets/kitchenware.png')} />
                        </View>
                        <View style={{ width: 196, marginLeft: 40, marginTop: 15 }}>
                            <Text style={styles.productHeading}>Kitchenware</Text>
                            <Text style={styles.productSubHeading}>Kitchen & Accessories</Text>
                            
                            
                        </View>

                    </View>
                    
                </View>


              
                                 

            </ScrollView>
        </View>

    );

}

export default Categories;