import React from 'react';
import {
    Text,
    View,
    Image,
    StatusBar,
    ScrollView
} from 'react-native';
import styles from './styles'
import Carousel, { Pagination } from 'react-native-snap-carousel';


const ShareEBusinessCard = () => {
    const carouselRef = React.useRef('')
    const [entries, setEntries] = React.useState([
        { imageUrl: require('../../assets/barcode.png'), title: "E-Business Card" },
        { imageUrl: require('../../assets/barcode.png'), title: "E-Business Card" },
        { imageUrl: require('../../assets/barcode.png'), title: "E-Business Card" },
    ]);
    const [activeSlide, setActiveSlide] = React.useState(0);
    const _renderItem = ({ item, index }) => (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 15,
            width: 290,
            height: 240

        }}
        >
            <Image
                accessibilityLabel={item.title}
                source={item.imageUrl}
                resizeMode="contain"
                style={{ width: 300, height: 200, }}
            />
        </View>
    )

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#1B2356' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Share Your E-Business Card</Text>
            </View>            
            <View style={{ height: 5, width: 180, borderTopColor: '#6379FF', borderTopWidth: 3, marginBottom: 20, marginLeft: 115 }} />
            
            <ScrollView>
            <View style={{ justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>

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


            </View>
            <View style={{padding:30}}>
            <View>
                <Text style={styles.text_name}>Joseph Pilgrim</Text>
                <Text style={styles.vip_name}>V.I.P Executive</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.content}>Email:</Text>
                <Text style={styles.content1}> jpilgrim@sunrise.com</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.content}>Phone:</Text>
                <Text style={styles.content1}> (800) 932 - 3932</Text>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={styles.content}>Direct Link:</Text>
                <Text style={styles.content1}>app.sunrise.com/jpilgrim2901</Text>
            </View>
            <View>
                <Text style={[styles.text_name,{marginTop:10}]}>Referral Code</Text>
                <Text style={styles.vip_name}>2910DA</Text>
            </View>

            <View>
                <Text style={styles.social}>Share On Social Media</Text>                
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../../assets/facebook.png')} style={{marginLeft:40}}/> 
                <Image source={require('../../assets/insta.png')} style={{marginLeft:10}} /> 
                <Image source={require('../../assets/whats.png')} style={{marginLeft:10}} /> 
                <Image source={require('../../assets/twitte.png')} style={{marginLeft:10}} />
            </View>
            <View>
                <Text style={styles.social}>Copy Link</Text>                
            </View> 
            </View>

            </ScrollView>
        </View>
    )
}

export default ShareEBusinessCard;