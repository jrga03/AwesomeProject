import { AppRegistry, View } from 'react-native';
import App from './components/App';
import { createStore } from 'redux';
import { reducer } from './components/ToDoRedux';

const store = createStore(reducer);

const AppWithStore = () => <App store={store} />

AppRegistry.registerComponent('AwesomeProject', () => AppWithStore);
