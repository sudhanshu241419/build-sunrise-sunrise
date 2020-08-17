import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from '../scenes/landing';
import LoginScreen from '../scenes/login';
import RegisterScreen from '../scenes/register';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Home" component={LandingScreen}/>
        <RootStack.Screen name="Login" component={LoginScreen}/>
        <RootStack.Screen name="Register" component={RegisterScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;