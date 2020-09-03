import React from 'react';
import { Text, View, Image, StyleSheet,Platform } from 'react-native';
import CustomButton from '../../components/custom-button';

const fontFamily= Platform.OS === 'ios' ? 'Arial-BoldMT' : 'sans-serif-medium';
const letterSpacing = 2;

const searchData = [
    {
        "id": 1,
        "name": "Leanne Graham",
    },
    {
        "id": 2,
        "name": "Leanne Howell",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
    }
]

export const DummyData = () => {
    return searchData
}

export const GetData = () => {
    axios.get('http://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return { error: 'Error Loading Content' }
        });
}


export const UpdateSearch = (val, temp) => {
    const searchTxt = val ? val : null
    
    if (searchTxt.length >= 3) {
        let searchStringSplit = searchTxt.split(/(\s+)/).filter( function(e) { return e.trim().length >=3; } );
        const searchFilterData = temp.filter(item => 
            searchStringSplit.some(searchString => item.name.toLowerCase().includes(searchString))
        );       
        return searchFilterData;    
    }
   
}



export const pageButton = (buttonName, buttonColor, fontColor, icon = null) => {
    return (
        <CustomButton style={styles.row}
            textAlign={'center'}
            // onPress={() => (cc)}
            padding={5}
            backgroundColor={buttonColor}
            borderWidth={1}
            borderColor='#6379FF'
            borderRadius={5}
            height={15}
            width={60}
            childrenStyle={{
                fontSize: 15,
                color: `${fontColor}`,
                textAlign: 'center',
                fontFamily: fontFamily,
                letterSpacing: letterSpacing
            }}>
            {buttonName}

        </CustomButton>
    )
}

export const SearchProduct = (items) => {
    return (
        <>
            {
                items.map((item, index) => {
                    return <View style={styles.master}>
                        <View style={[styles.row, styles.borderColor, { height: 140, }]}>
                            <View style={[styles.row, { marginTop: 15, marginLeft: 25 }]}>
                                <Image source={require('../../assets/images.png')} />
                            </View>
                            <View style={{ width: 196, marginLeft: 40, marginTop: 15 }}>
                                <Text style={styles.productHeading}>{item.name}</Text>
                                <Text style={styles.productSubHeading}>Vitamin - C 100mg</Text>
                                <Text style={[styles.productSubHeading, { color: '#000' }]}>$25.99</Text>
                            </View>

                        </View>
                        <View>
                            {pageButton('ADD', '#6379FF', '#FFFFFF')}
                        </View>
                    </View>
                })
            }
        </>

    )
}


const styles = StyleSheet.create({
    master: {
        borderWidth: 1,
        margin: 5,
        marginTop: 10,
        justifyContent: 'space-around',
        height: 'auto'
    },
    row: { flexDirection: 'row' },
    productHeading: { fontSize: 25, color: '#000000', paddingTop: 3, marginLeft: 6, fontWeight: 'bold' },
    productSubHeading: { fontSize: 20, color: '#707070', paddingTop: 3, marginLeft: 6, fontWeight: 'bold' },

})
