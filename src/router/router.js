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

export const SubStack = DrawerNavigator({
  Notifications: {
    screen: NotificationScreen,
  },
});

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