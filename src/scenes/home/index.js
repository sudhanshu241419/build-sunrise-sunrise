import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const HomeScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Landing')}>
      <Text>Landing page</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default HomeScreen;