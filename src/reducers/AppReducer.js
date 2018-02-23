import { combineReducers } from 'redux';
import ToDoReducer from './ToDoReducer';
import NavReducer from './NavReducer';

const AppReducer = combineReducers({
    todo: ToDoReducer,
    nav: NavReducer,
});

export default AppReducer;