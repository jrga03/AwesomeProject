import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import App from './src/components/App';
import AppReducer from './src/reducers/AppReducer';

const store = createStore(AppReducer);

const AppWithStore = () => <App store={store} />

// class AppWithStore extends Component {
//     store = createStore(AppReducer);

//     render() {
//         return (
//             <Provider store={this.store}>
//                 <App />
//             </Provider>
//         );
//     }
// }

AppRegistry.registerComponent('AwesomeProject', () => AppWithStore);
