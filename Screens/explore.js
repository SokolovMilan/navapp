import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Prva from './../Navigation/prva';

export default class Explore extends Component {
    render() {
        return (
            <Prva />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});