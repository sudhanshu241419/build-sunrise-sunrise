import React from 'react';
import {View, TextInput} from 'react-native';
import { useTheme } from 'react-native-paper';
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const [data, setData] = React.useState({
   search : ''
  });
  const { colors } = useTheme();
  //search-sharp , camera, mic, location, ios-chevron-forward-sharp
  const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            search: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            search: val,
            check_textInputChange: false
        });
    }
}


  return (
    <View style={styles.searchWrapper}>
      
            <Ionicons name="search-sharp" style={styles.searchIcon}/>
            <Ionicons name="camera" style={styles.cameraIcon}/>
            <Ionicons name="mic" style={styles.micIcon}/>
            <TextInput
              name="search"
              id="search"
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Search Sunrise"
              onChangeText={(val) => textInputChange(val)}     
            />               
        </View>   
  );

}

export default Search;