import React from 'react';
import {
    Text,
    View,
    TextInput,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-community/picker';
import { useTheme } from 'react-native-paper';
import styles from './styles'
import { isEmpty } from '../../utils/validation';
import { getUser, getAccessToken } from '../../utils/api'
import axios from "../../apiConfig";
import ActivityIndicator from 'react-native-loading-spinner-overlay'
import ImagePicker from 'react-native-image-picker';

const BusinessList = ({ navigation }) => {
    const [data, setData] = React.useState({
        businessName: '',
        address: '',
        emailAddress: '',
        phoneNumber: '',
        website: '',
        notes: null,
        type: 'Services',
        relationShip: 'Personal Relationship',
        offer: 'Real Estate',
    });


    const { colors } = useTheme();


    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <Text style={styles.text_header}>List Of Business</Text>
            </View>

            <View style={styles.sub_container} />
            <ScrollView>

                <Text style={styles.referral}>Coming Soon....</Text>

            </ScrollView>

        </View>
    );

}

export default BusinessList;