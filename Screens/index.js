import React, {Component} from 'react';
import HomeScreen from '../Screens/home';
import Explore from '../Screens/explore';
import SignInScreen from './signin';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Prva from '../Navigation/prva';
import Lista from '../Navigation/lista';
import Api from '../Navigation/apilista';
import Css from '../Navigation/vezbacss';
import Icon from 'react-native-vector-icons/Ionicons';


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
            screen: Explore,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-apps" size={24} color="blue"/>
                )

            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
        },
    }

);

const RootStack = createStackNavigator(
    { Prva: Prva},
    { Lista: Lista },
    { Api: Api },
    { Css: Css}
);


const AppStack = createStackNavigator(
    { Tab: Tab },
    { Root: RootStack},
    {
        initialRouteName: 'Tab'
    }
);


const AppContainer = createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
        SignIn: SignInScreen,
        RootStack: RootStack
    },
    {
        initialRouteName: 'SignIn',
    }
));

export default AppContainer;