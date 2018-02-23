import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { RootStack } from '../router/router';

const router = RootStack.router;
const mainNavAction = router.getActionForPathAndParams('Main');
const initialNavState = router.getStateForAction(mainNavAction);

const NavReducer = (state = initialNavState, action) => {
    return router.getStateForAction(action, state);
};

export default NavReducer;