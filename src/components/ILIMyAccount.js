import React, { Component } from 'react';
import {
    SectionList,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// import BellIcon from '../assets/BellIcon';

class Back extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Image
                    source={require('../assets/ic_arrow_back_white_24dp/android/drawable-hdpi/ic_arrow_back_white_24dp.png')} />
            </TouchableOpacity>
        );
    }
    
}

class Notification extends Component {

    render() {
        return (
            <TouchableOpacity>
                <Image
                    source={require('../assets/ic_notifications_white_24dp/android/drawable-hdpi/ic_notifications_white_24dp.png')}
                    // source={require('../assets/ic_notifications_white_24px.svg')}
                    // style={{ height: 30, width: 30 }} 
                    />
            </TouchableOpacity>
        );
    }
}

const sections = [
    {
        id: 0,
        title: 'Basic Profile',
        data: [
            { id: 0, text: 'First Name' },
            { id: 1, text: 'Surname' },
            { id: 2, text: 'Email Address' },
            { id: 3, text: 'Mobile Number' },
            { id: 4, text: 'Company' },
        ],
    },
    {
        id: 1,
        title: 'Account',
        data: [
            { id: 0, text: 'Gmail Account (logged as)' },
            { id: 1, text: 'Change login info' },
        ],
    },
];

const extractKey = ({id}) => id;

const notifIcon = '../assets/ic_notifications_white_24dp/android/drawable-hdpi/ic_notifications_white_24dp.png';

export default class MyAccountScreen extends Component {
    static navigationOptions = {
        title: 'My Account',
        headerRight: <Notification />,
        headerLeft: <Back />
    }

    renderItem = ({item}) => {
        return (
            <Text style={{}}>
                {item.text}
            </Text>
        );
    }

    renderSectionHeader = ({section}) => {
        return (
            <Text style={{}}>
                {section.title}
            </Text>
        )
    }

    render() {
        return (
            <SectionList
                style={{}}
                sections={sections}
                renderItem={this.renderItem}
                renderSectionHeader={this.renderSectionHeader}
                keyExtractor={extractKey} />
        );
    }
}