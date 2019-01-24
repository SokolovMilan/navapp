import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Prva extends Component {

    constructor(){
        super();
        this.state = {
        }

        this.onPress1 = this.onPress1.bind(this);
    }

    onPress1(){
        console.log('8977897897');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ovo je prva</Text>
                <View style={styles.vcon}>
                    <TouchableHighlight onPress={this.onPress1}
                                        underlayColor="red"
                                        style={styles.v1}>
                        <View >
                            <Text>Prva</Text>
                            <Icon name="ios-home" color="white" size={24}/>
                        </View>
                    </TouchableHighlight>
                </View>
                <Button
                    color="red"
                    title="List Names"
                    onPress={() => this.props.navigation.navigate('Lista')}
                />
                <Button
                    color="red"
                    title="Api lista"
                    onPress={() => this.props.navigation.navigate('Api')}
                />
                <Button
                    color="red"
                    title="CSS"
                    onPress={() => this.props.navigation.navigate('Css')}
                />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    vcon:{
        height: 150,
        width: 150,
        marginBottom: 50,
        marginTop: 50,
    },
    v1: {
        backgroundColor: 'blue',
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }



});