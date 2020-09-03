import React from 'react';
import {
    Text,
    View,
    Image,
    StatusBar,
    ScrollView
} from 'react-native';
import styles from './addressStyle'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import {Picker} from '@react-native-community/picker';
const Address = () => {
    const [data,setData]=React.useState({
        action:''
    })
    const [actionType,setActionType] = React.useState([
            {action:'Edit',action_id:1},
            {action:'Delete',action_id:2}
        ])

    const addressList = (addressType) => {
        return (
            <View style={{ padding: 30 }}>
                <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={styles.text_name}>{addressType}</Text>
                    <View style={styles.pickerWrapper}>
                    <Entypo name="dots-three-horizontal" style={styles.pickerIcon}/>
                    <Picker
                        mode="dropdown"
                        style={styles.pickerContentB2b}
                        selectedValue={data.action}    
                        onValueChange={(itemValue, itemIndex) =>
                            setData({...data,action: itemValue})
                        }
                    >
                        <Picker.Item label={'Edit'} value={1} key={0} />
                        <Picker.Item label={'Delete'} value={2} key={1} />
                               
                        
                    </Picker>
                    </View>
                   
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.content1}>Mr. Joseph</Text>
                    
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Text style={styles.content1}>jpilgrim@sunrise.com</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.content1}>(800) 932 - 3932</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={styles.content1}>602/E, NY, USA, 10010</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={styles.content1}>Near to Max Hospital</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#1B2356' barStyle="light-content" />

            <View style={styles.addAddressContainer}>
                <AntDesign name="pluscircleo" style={styles.addAddressIcon} />
                <Text style={styles.addAddressText}>Add New Address</Text>
            </View>

            <ScrollView>
                {addressList("Home")}
                {addressList("Office")}

            </ScrollView>
        </View>
    )
}

export default Address;