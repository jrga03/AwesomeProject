import React, { Component } from 'react';
import {
    SectionList,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

// import BellIcon from '../assets/BellIcon';

export const Menu = () => {
    return (
        <TouchableOpacity
            onPress={ () => {navigation.navigate('DrawerOpen')} } >
            <Image
                source={require('../assets/ic_menu_white_24dp/android/drawable-hdpi/ic_menu_white_24dp.png')} />
        </TouchableOpacity>
    );    
}

const Notification = () => {
    return (
        <TouchableOpacity>
            <Image
                source={require('../assets/ic_notifications_white_24dp/android/drawable-hdpi/ic_notifications_white_24dp.png')} 
                onPress={{}} />
        </TouchableOpacity>
    );
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

export default class MyAccountScreen extends Component {
    static navigationOptions = {
        title: 'My Account',
        headerTitle: 'MY ACCOUNT',
        headerRight: <Notification />,
        headerLeft: <Image
                        onPress={ () => navigation.navigate('DrawerOpen') }
                        source={require('../assets/ic_menu_white_24dp/android/drawable-hdpi/ic_menu_white_24dp.png')} />,
    }
    
    renderItem = ({item}) => {
        return (
            <Text style={styles.items}>
                {item.text}
            </Text>
        );
    }

    renderSectionHeader = ({section}) => {
        return (
            <Text style={styles.sections}>
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

const styles = StyleSheet.create({
    items: {
        color: 'gray',
    },
    sections: {
        backgroundColor: 'lightgray',
    },
})