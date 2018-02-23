import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    Button,
    StyleSheet,
    FlatList
} from 'react-native';
// import { NavigationActions } from 'react-navigation';

export default class ToDoList extends Component {
    // static navigationOptions = {

    // }

    render() {
        return (
            <ScrollView>
                <View>
                    <TextInput 
                        placeholder='Input text here'
                        style={styles.textBox}
                        underlineColorAndroid='transparent'
                    />
                    <Text
                        style={styles.text}
                    >
                        SAMPLE TEXT
                    </Text>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textBox: {
        padding: 15,
        backgroundColor: 'snow',
    },
    text: {
        padding: 15,
        backgroundColor: 'lightgray',
    },
})