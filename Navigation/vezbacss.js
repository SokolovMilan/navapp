import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';

export default class Druga extends Component {

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
                <View style={styles.stil1}>
                    <Text>dsfdsf</Text>


                </View>
                <View style={styles.stil2}>
                    <View  style={styles.dugme}>
                        <Button
                            color="red"
                            title="Idi na Prvu"
                            onPress={() => this.props.navigation.navigate('Home')}

                        />
                    </View>

                </View>
                <View style={styles.stil3}>
                    <View style={styles.stil31}>
                        <Text>dsfdsf</Text>

                    </View>
                    <View style={styles.stil32}>
                        <Text>dsfdsf</Text>

                    </View>
                    <View style={styles.stil33}>
                        <Text>dsfdsf</Text>

                    </View>


                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    stil1: {
        width: 300,
        height: 200,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stil2: {
        width: 300,
        height: 200,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stil3: {
        width: 300,
        height: 200,
        backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    stil31: {

        backgroundColor: 'red',
        width: 60,
        height: 160,
    },
    stil32: {
        backgroundColor: 'yellow',
        width: 100,
        height: 160,
    },
    stil33: {

        backgroundColor: 'green',
        width: 60,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dugme: {
        backgroundColor: 'blue'
    }


});