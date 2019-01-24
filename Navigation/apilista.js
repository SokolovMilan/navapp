import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView, Button} from 'react-native';

export default class Comp3 extends Component<Props> {

    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
        };
    }

    componentDidMount(){
        this.fetchusers();
    }

    fetchusers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(response)
                });
            });
    }
    prikazi(user){
        return(
            <View  style={styles.row}>
                <Text style={styles.rowText}>{user.id}: {user.name}</Text>
            </View>
        )
    }

    render() {
        return (
            <View  style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.prikazi.bind(this)}
                />
                <View  style={styles.dugme}>
                    <Button
                        color="red"
                        title="Idi na Prvu"
                        onPress={() => this.props.navigation.navigate('Home')}

                    />
                </View>

            </View>




        );
    }
}


const styles = StyleSheet.create({

    container:{
        marginTop: 100,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'lightgray',
        marginBottom: 3
    },
    rowText: {
        flex: 1,
    },
    dugme: {
        backgroundColor: 'blue',
        width: 120,
    }


});