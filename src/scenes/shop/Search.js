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

import axios from "../../apiConfig";

import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-paper';
import styles from './styles'
//import Search from '../../components/Search/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActivityIndicator from 'react-native-loading-spinner-overlay';
import { searchData, GetData, DummyData, UpdateSearch, SearchProduct, pageButton } from './searchFunctions'
import { SafeAreaView } from 'react-native';
const win = Dimensions.get('window');

const Search = ({navigation}) => {
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
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{justifyContent:'space-around',marginLeft:10}}><Ionicons name="arrow-back" style={{color:'#fff',fontSize:30}} onPress={()=>navigation.navigate('Product')}/></View>
                <View style={[styles.searchWrapper,{marginBottom:10,width:'85%',right:5}]}>

                    <Ionicons name="search-sharp" style={styles.searchIcon} />
                    <Ionicons name="camera" style={styles.cameraIcon} />
                    <Ionicons name="mic" style={styles.micIcon} />
                    <TextInput
                        autoFocus={true}
                        name="search"
                        id="search"
                        style={styles.textInput}
                        autoCapitalize="none"
                        placeholder="Search Sunrise"
                        onChangeText={(val) => getSearch(val)}
                    />
                </View>
                </View>
               
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
                </ScrollView> :null
                
            }
        </View>
    );

}
export default Search;