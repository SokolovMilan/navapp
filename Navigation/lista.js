import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';


export default class Cetvrta extends Component {

    constructor(){
        super();
        this.state = {
            radnici: ['milan','zoran','ivan'],
            radnici2: [
                {name: 'milana'},
                {name: 'ivana'},
                {name: 'dragana'}
            ]
        };
    }



    render() {
        return (


                <View style={styles.container}>
                    <Text>List Names</Text>
                    <View style={styles.vcon}>
                        <View style={styles.v1}>
                            <Text style={styles.t1}>Zaposleni map: </Text>
                            {this.state.radnici2.map(item => {
                                return (
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                )
                            })}

                        </View>
                    </View>
                    <Button
                        color="red"
                        title="Idi na Prvu"
                        onPress={() => this.props.navigation.navigate('Prva')}
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
        height: 300,
        width: 150,
        marginBottom: 50,
        marginTop: 50,
        backgroundColor: 'lightgray',
    },
    v1: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    t1: {
        paddingBottom: 10,
        paddingTop: 20,

    },
    l1: {
        flex: 1
    }

});