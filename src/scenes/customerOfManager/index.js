import React from 'react';
import {
    Text,
    View,    
    ScrollView,    
    Image,
    Dimensions,
    StatusBar,    
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-paper';
import styles from './styles'
const win = Dimensions.get('window');

const MyCustomer = () => {
    const [data, setItems] = React.useState(
        [
            { "photo": 'download.png', "firstname": "Sudhanshu", "lastname": "kumar", "doj": "8 Aug 2020", "city": "Delhi", "zip": "14844", "country": "USA" },
            { "photo": 'download.png', "firstname": "Yogendra", "lastname": "", "doj": "8 Aug 2020", "city": "Delhi", "zip": "14844", "country": "USA" },
            { "photo": 'download.png', "firstname": "Test", "lastname": "kumar", "doj": "8 Aug 2020", "city": "Delhi", "zip": "14844", "country": "USA" }
        ]
    );
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#3542B3', '#1B2356']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <StatusBar />

            </LinearGradient>

            <View style={styles.headTitle}>
                <Text style={styles.titleStyle}>Customer History</Text>
            </View>

            {/* Scroll content area */}

            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>


                {
                    data.map((item, index) =>
                        <View style={styles.addContainer} key={index}>

                            <View style={[styles.row, styles.photo]}>
                                <Image source={require('../../assets/download.png')} />
                            </View>
                            <View style={styles.contentContainer}>
                                <Text style={styles.masterText}>{item.firstname}, {item.lastname}, {item.city} - {item.zip}, {item.country} </Text>
                                <Text style={styles.doj}>DOJ : {item.doj}</Text>
                            </View>
                        </View>
                    )}

            </ScrollView>
        </View>

    );

}

export default MyCustomer;