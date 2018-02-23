import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  Button,
  StyleSheet,
  FlatList,
  Modal,
  TextInput
} from 'react-native';
import { 
  StackNavigator, 
  DrawerNavigator,
  TabNavigator
} from 'react-navigation';
import ToDoList from './todo';
import HomeScreen from './Home';
import DetailsScreen from './Details';
import NotificationScreen from './Notifications';
import ModalScreen from './Modal';

const SubStack = DrawerNavigator({
  Notifications: {
    screen: NotificationScreen,
  },
});

const MainStack = StackNavigator(
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

const RootStack = StackNavigator(
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
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

// AppRegistry.registerComponent('App', () => App)