import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './home';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import Prva from '../Navigation/prva';
import Lista from '../Navigation/lista';
import Api from '../Navigation/apilista';
import Css from '../Navigation/vezbacss';


const RootStack = createStackNavigator(
    {
        Home: Prva,
        Lista: Lista,
        Api: Api,
        Css: Css,
    },
    {
        initialRouteName: 'Home',
    }
);



export default AppContainer = createAppContainer(Tab);