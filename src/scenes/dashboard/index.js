import React from 'react';
import {    
    Text,    
    View,
    Image,
    StatusBar,   
} from 'react-native';
import styles from './styles'
import MoneyCardComponent from '../../components/account-detail/money/card';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CustomButton from '../../components/custom-button';
import { connect } from 'react-redux';
import { getAccessToken, getUser } from '../../utils/api'

const DashboardScreen = (props) => {
    const carouselRef = React.useRef('')
    const [entries, setEntries] = React.useState([
        { imageUrl: require('../../assets/marketing1.png'), title: "marketing" },
        { imageUrl: require('../../assets/marketing1.png'), title: "marketing" },
        { imageUrl: require('../../assets/marketing1.png'), title: "marketing" },
    ]);
    const [activeSlide, setActiveSlide] = React.useState(0);
    const [userToken, setUserToken] = React.useState();
    const _renderItem = ({ item, index }) => (
        <View style={{
            backgroundColor: 'lightgreen', justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
                accessibilityLabel={item.title}
                source={item.imageUrl}
                resizeMode="contain"
                style={{ width: 300, height: 200, }}
            />
        </View>
    )

    React.useEffect(() => {
        getAccessToken().then((value) => setUserToken(value));

        console.log(userToken)

    }, []);



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#1B2356' barStyle="light-content" />
            <MoneyCardComponent />
            <View style={{ padding: 30, justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.slider_heading}>{"Latest News"}   </Text>
                    <Text style={styles.slider_heading}>{userToken}   </Text>

                    <Carousel
                        ref={carouselRef}
                        data={entries}
                        renderItem={_renderItem}
                        onSnapToItem={(index) => setActiveSlide(index)}
                        sliderWidth={300}
                        itemWidth={300}
                    />
                    <Pagination
                        dotsLength={entries.length}
                        activeDotIndex={activeSlide}
                        containerStyle={{ paddingTop: 12 }}
                        dotStyle={{
                            width: 60,
                            height: 4,
                            borderRadius: 5,
                            backgroundColor: '#6379FF'
                        }}
                        inactiveDotStyle={{
                            width: 60,
                            height: 4,
                            borderRadius: 5,
                            backgroundColor: '#C8C8C8'
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={1}
                    />
                </View>
                <View>
                    <CustomButton
                        textAlign={'center'}
                        onPress={(e) => e.preventDefault()}
                        padding={10}
                        borderRadius={20}
                        backgroundColor={'#fff'}
                        borderWidth={5}
                        borderColor={'#6379FF'}
                        childrenStyle={[styles.shop_btn_text, { color: '#6379FF' }]}
                    >
                        SHOP NOW
                    </CustomButton>
                </View>
                <View>
                    <Text style={{ color: '#ABABC9', textAlign: 'center', paddingTop: 15, fontSize: 17 }}>Need Help? Contact Us</Text>
                </View>
            </View>
        </View>
    )
}

export default connect()(DashboardScreen);