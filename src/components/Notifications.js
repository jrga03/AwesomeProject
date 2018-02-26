import React, { Component } from 'react';
import {
    View,
    Button
} from 'react-native';
// import { NavigationActions } from 'react-navigation';

export default class NotificationScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
                <Button
                    title='Main'
                    onPress={() => this.props.navigation.navigate('Main')}
                />
                <Button
                    title='Draw more'
                    onPress={() => this.props.navigation.navigate('Notification')}
                />
            </View>
        );
    }
}