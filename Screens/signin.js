import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';


export default class Signin extends Component {

    constructor(){
        super();
        this.state = {
            number: 0
        };

        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        console.log('ulogovani ste');
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <View style={styles.container222}>
                <Button
                    color="red"
                    title="Sign In"
                    onPress={this.onPress}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container222:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    }
});