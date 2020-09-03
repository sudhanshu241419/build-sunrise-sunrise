import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = (props) => {

  const { colors } = useTheme();

  return (


    <View style={styles.searchWrapper}>
      <Ionicons name="search-sharp" style={styles.searchIcon} />
      <Ionicons name="camera" style={styles.cameraIcon} />
      <Ionicons name="mic" style={styles.micIcon} />
      <Text
        style={[styles.textInput, { marginTop: 8 }]}

        // onChangeText={(val) => getSearch(val)}
        onPress={() => props.nav.navigate('Search')}
      >Search Sunrise</Text>
    </View>

  );

}

export default Search;