import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';


export default class Signin extends Component {

    constructor(){
        super();
        this.state = {
            number: 0
        }

        this.onpress = this.onpress.bind(this);
    }

    onpress(){
        console.log('ulogovani ste');
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <View style={styles.container222}>
                <Button
                    color="red"
                    title="Sign In"
                    onPress={this.onpress}
                />


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container222:{
       marginTop: 100
    }

});