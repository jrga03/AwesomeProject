import React from 'react';
import {
    StackNavigator,
    DrawerNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import ToDoList from '../components/todo';
import HomeScreen from '../components/Home';
import DetailsScreen from '../components/Details';
import NotificationScreen from '../components/Notifications';
import ModalScreen from '../components/Modal';
import MyAccountScreen from '../components/ILIMyAccount';

const MyAccountStack = StackNavigator(
    {
        MyAccountHome: {
            screen: MyAccountScreen},
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'red',
            },
            headerTitleStyle: {
                alignSelf: 'center',
            },
        }
    }
);

export const MainStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export const SubStack = DrawerNavigator({
    Notifications: {
        screen: NotificationScreen,
    },
});

export const AppDrawer = DrawerNavigator(
    {
        MyAccount: {
            screen: MyAccountStack,
        },
    },
    {
        initialRouteName: 'MyAccount',
    }
);

export const RootStack = StackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        Modal: {
            screen: ModalScreen,
        },
        Notification: {
            screen: SubStack,
        },
        ToDo: {
            screen: ToDoList,
        },
        ILIMyAccount: {
            screen: AppDrawer,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
    <RootStack
        navigation={addNavigationHelpers({ dispatch, state: nav })}
    />
);

const mapStateToProps = state => ({
    nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState);