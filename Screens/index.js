import React, {Component} from 'react';
import HomeScreen from './tab';
import SignInScreen from './signin';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';


const AppStack = createStackNavigator({ Home: HomeScreen});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
    }
));