import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Prva from './prva';
import Lista from './lista';
import Api from './apilista';
import Css from './vezbacss';


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

const AppCont = createAppContainer(RootStack);

export default class Zero extends React.Component {
    render() {
        return <AppCont />;
    }
}

