import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './home';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
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

const Tab = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
           navigationOptions: {
                tabBarLabel: 'Home',
                tabBarOptions: {
                   activeTintColor: 'red',
                   inactiveTintColor: 'blue',
                },
               tabBarIcon: ({ tintColor }) => (
                   <Icon name="ios-home" size={24} color="blue"/>
               )

           }
        },
        Explore: {
            screen: RootStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-apps" size={24} color="blue"/>
                )

            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
        },
    }

);

export default AppContainer = createAppContainer(Tab);