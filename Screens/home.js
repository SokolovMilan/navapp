import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ovo je home page</Text>
            </View>

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