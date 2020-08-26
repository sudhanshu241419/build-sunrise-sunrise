import React from 'react';
import { Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/custom-button';
import styles from './styles';

const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const letterSpacing = 2;

const Shop = () => {
    const [data, setData] = React.useState({

    });

    return (
        <View style={styles.container}>

            {/* <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.Tab, { color: '#6379FF' }]}>Current Orders</Text>
                <Text style={styles.Tab}>Past Orders</Text>
            </View>
            <View style={styles.underLine} /> */}
            <View >
                <Text style={styles.heading}>Rate Past Purchases</Text>

            </View>
            <ScrollView>
                <View style={styles.master}>
                    <View style={[styles.row, styles.borderColor, { height: 140, }]}>
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
                    <View style={{ borderColor: "#707070", borderTopWidth: 1, backgroundColor: "#ffffff", height: 40, width: 350, marginLeft: 32, marginTop: 8 }}>
                        <Text style={{ flexDirection: 'row', fontSize: 16, color: '#6379FF', marginTop: 7, marginLeft: 6, height: 25, fontWeight: 'bold' }}>Rate More Products</Text>
                        <Ionicons name="ios-chevron-forward-sharp" style={{ flexDirection: 'row', color: '#6379FF', fontSize: 20, bottom: 10, top: 10, position: "absolute", right: 0 }} />
                    </View>
                </View>



                <View style={styles.masterBranch}>
                    <View style={[styles.row, styles.borderColor, { height: 140, }]}>
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
                    <View style={{ borderColor: "#707070", borderTopWidth: 1, backgroundColor: "#ffffff", height: 40, width: 350, marginLeft: 32, marginTop: 8 }}>
                        <Text style={{ flexDirection: 'row', fontSize: 16, color: '#6379FF', marginTop: 7, marginLeft: 6, height: 25, fontWeight: 'bold' }}>Rate More Products</Text>
                        <Ionicons name="ios-chevron-forward-sharp" style={{ flexDirection: 'row', color: '#6379FF', fontSize: 20, bottom: 10, top: 10, position: "absolute", right: 0 }} />
                    </View>
                </View>


                <View style={styles.masterBranch}>
                    <View style={[styles.row, styles.borderColor, { height: 140, }]}>
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
                    <View style={{ borderColor: "#707070", borderTopWidth: 1, backgroundColor: "#ffffff", height: 40, width: 350, marginLeft: 32, marginTop: 8 }}>
                        <Text style={{ flexDirection: 'row', fontSize: 16, color: '#6379FF', marginTop: 7, marginLeft: 6, height: 25, fontWeight: 'bold' }}>Rate More Products</Text>
                        <Ionicons name="ios-chevron-forward-sharp" style={{ flexDirection: 'row', color: '#6379FF', fontSize: 20, bottom: 10, top: 10, position: "absolute", right: 0 }} />
                    </View>
                </View>



                <View style={styles.masterBranch}>
                    <View style={[styles.row, styles.borderColor, { height: 140, }]}>
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
                    <View style={{ borderColor: "#707070", borderTopWidth: 1, backgroundColor: "#ffffff", height: 40, width: 350, marginLeft: 32, marginTop: 8 }}>
                        <Text style={{ flexDirection: 'row', fontSize: 16, color: '#6379FF', marginTop: 7, marginLeft: 6, height: 25, fontWeight: 'bold' }}>Rate More Products</Text>
                        <Ionicons name="ios-chevron-forward-sharp" style={{ flexDirection: 'row', color: '#6379FF', fontSize: 20, bottom: 10, top: 10, position: "absolute", right: 0 }} />
                    </View>
                </View>


                <View style={styles.masterBranch}>
                    <View style={[styles.row, styles.borderColor, { height: 140, }]}>
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
                    <View style={{ borderColor: "#707070", borderTopWidth: 1, backgroundColor: "#ffffff", height: 40, width: 350, marginLeft: 32, marginTop: 8 }}>
                        <Text style={{ flexDirection: 'row', fontSize: 16, color: '#6379FF', marginTop: 7, marginLeft: 6, height: 25, fontWeight: 'bold' }}>Rate More Products</Text>
                        <Ionicons name="ios-chevron-forward-sharp" style={{ flexDirection: 'row', color: '#6379FF', fontSize: 20, bottom: 10, top: 10, position: "absolute", right: 0 }} />
                    </View>
                </View>



                <View style={styles.masterBranch}>
                    <View style={[styles.row, styles.borderColor, { height: 140, }]}>
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
                    <View style={{ borderColor: "#707070", borderTopWidth: 1, backgroundColor: "#ffffff", height: 40, width: 350, marginLeft: 32, marginTop: 8 }}>
                        <Text style={{ flexDirection: 'row', fontSize: 16, color: '#6379FF', marginTop: 7, marginLeft: 6, height: 25, fontWeight: 'bold' }}>Rate More Products</Text>
                        <Ionicons name="ios-chevron-forward-sharp" style={{ flexDirection: 'row', color: '#6379FF', fontSize: 20, bottom: 10, top: 10, position: "absolute", right: 0 }} />
                    </View>
                </View>


                <View style={styles.masterBranch}>
                    <View style={[styles.row, styles.borderColor, { height: 140, }]}>
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
                    <View style={{ borderColor: "#707070", borderTopWidth: 1, backgroundColor: "#ffffff", height: 40, width: 350, marginLeft: 32, marginTop: 8 }}>
                        <Text style={{ flexDirection: 'row', fontSize: 16, color: '#6379FF', marginTop: 7, marginLeft: 6, height: 25, fontWeight: 'bold' }}>Rate More Products</Text>
                        <Ionicons name="ios-chevron-forward-sharp" style={{ flexDirection: 'row', color: '#6379FF', fontSize: 20, bottom: 10, top: 10, position: "absolute", right: 0 }} />
                    </View>
                </View>


                <SafeAreaView style={styles.master}>
                    <View style={[styles.borderColor, { height: 200, }]}>
                        <View style={[{ marginTop: 15, marginLeft: 25 }]}>
                            <Text style={styles.productHeading}>Related Products</Text>
                        </View>
                        <View style={[styles.row, {justifyContent:'space-around', marginTop:10 }]}>
                            <Image source={require('../../assets/kitchenware.png')} style={[styles.row]} />
                            <Image source={require('../../assets/shoes.png')} style={[styles.row]} />
                            <Image source={require('../../assets/iphone11-select-2019-family.png')} style={[styles.row]} />
                        </View>
                    </View>
                </SafeAreaView>
               
                    <SafeAreaView style={{flexDirection:"row",justifyContent:'space-around',marginBottom:10}}>
                    
                    <CustomButton style={styles.row}
                        textAlign={'center'}
                        onPress={() => (cc)}
                        padding={5}
                        backgroundColor='transparent'
                        borderWidth={3}
                        borderColor='#6379FF'
                        borderRadius={10}                        
                        height={20}
                        width={190}
                        childrenStyle={{
                            fontSize: 28,
                            color: '#C8C8C8',                            
                            textAlign: 'center',
                            fontFamily:fontFamily,
                            letterSpacing:letterSpacing
                        }}>
                        Previous
                    </CustomButton>
                   

                    <CustomButton style={[styles.row]}
                        textAlign={'center'}
                        onPress={() => (cc)}
                        
                        backgroundColor='#6379FF'
                        borderColor='#6379FF'
                        borderWidth={3}
                        borderRadius={10}                        
                        height={10}
                        padding={5}
                        width={190}
                        childrenStyle={{
                            fontSize: 28,
                            color: '#fff',
                            textAlign: 'center',
                            fontFamily:fontFamily,
                            letterSpacing:letterSpacing
                        }}>
                        Next
                        <Ionicons name ="arrow-forward-outline"  style={{ color: '#fff', fontSize: 25,marginTop:10}} />
                    </CustomButton>
                   
                    </SafeAreaView>
               

            </ScrollView>
        </View>

    );

}

export default Shop;