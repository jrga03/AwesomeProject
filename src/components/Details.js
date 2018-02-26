import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';
// import { NavigationActions } from 'react-navigation';

export default class DetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.otherParam : 'This is nested',
            key: 'Details',
        };
    };

    render() {
        const { params } = this.props.navigation.state;
        const otherParam = params ? params.otherParam : null;

        return (
            <View style={styles.container}>
                <Text>Details Screen</Text>
                <Button
                    title='More stack'
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            otherParam: 'Next', key: null,
                        });
                    }}
                />
                <Button
                    title='Back'
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title='Pop To Top'
                    onPress={() => this.props.navigation.popToTop()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
})