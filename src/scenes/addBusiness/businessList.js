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

import {connect} from 'react-redux'
import { useTheme } from 'react-native-paper';
import styles from './styles'
import axios from "../../apiConfig";
import ActivityIndicator from 'react-native-loading-spinner-overlay'

const imagepath = "http://sslkrypson.com/magento24/pub/media/business/";
const BusinessList = (props) => {
    const [showLoader, setLoader] = React.useState(false)
    const [userdetails, setUserDetails] = React.useState({});
    const [business_list,setBusiness] = React.useState({})

    React.useEffect(() =>{       
        getBusinessList()
    },[]);
    const getBusinessList = () =>{      
        setLoader(true);               
        let bid=[]

        if(props.state.userdetails.length > 0){

            bid = props.state.userdetails[0].plan.map((items,index)=>{
                if(items.attribute_code=="associated_busniess"){
                    let bids = JSON.parse(items.value)
                    return bids.map((id,ind)=>{return id.busniess_id})
                }else{
                    null
                }                
            })
            for (let i = 0; i < bid.length; i++) {
                if (bid[i] !== undefined) {                   
                        
                    axios.get('krypson-business/busniess/search?searchCriteria[filter_groups][0][filters][1][field]=busniess_id&searchCriteria[filter_groups][0][filters][1][value]='+bid[i]+'&searchCriteria[filter_groups][0][filters][1][condition_type]=in')
                        .then(function (response) {
                            //console.log(response)
                            response.data.items.length>0?setBusiness(response.data.items):null    
                            setLoader(false);
                        })
                        .catch(function (error) {
                            console.log(error.response.data.message);
                            setLoader(false);
                        });
                
                }
              }

        }else{
            setLoader(false); 
        }        
        
    }
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={{ position: 'absolute', top: "50%", right: 0, left: 0, zIndex: 1 }}>
                <ActivityIndicator visible={showLoader} color="#6379FF" />
            </View>
            <View style={styles.header}>
                <Text style={styles.text_header}>List Of Business</Text>
            </View>

            <View style={styles.sub_container} />
            <ScrollView>
            {
                business_list.length>0?business_list.map((item, index) =>
                    <View style={styles.addContainer} key={index}>
                        <View style={[styles.row, styles.photo]}>
                            <Image source={{uri:'http://sslkrypson.com/magento24/pub/media/business/'+item.image}} style={{ height: 50, width:50 }}/> 
                            {/* image */}
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.name}>{item.name} </Text>
                            <Text style={styles.masterText}>{item.email}</Text>
                            <Text style={styles.masterText}>{item.phone_no}</Text>
                            <Text style={styles.masterText}>{item.address}</Text>
                            <Text style={styles.masterText}>{item.website}</Text>
                        </View>
                    </View>
                ):<Text style={styles.referral}>Coming Soon...</Text>
            }

            </ScrollView>

        </View>
    );

}
const mapStateToProps = (state) => {
    return {state}
  }
export default connect(mapStateToProps)(BusinessList)