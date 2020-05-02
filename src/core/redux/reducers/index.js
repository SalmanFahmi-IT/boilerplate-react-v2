import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import route from './route.reducer';
import GenerateReducer from './base.reducer';
import authReducer from './auth.reducer';
import * as _module from '../../modules';

export default combineReducers({
	/* top-level reducers */
	route,
	routing: routerReducer,
	userInfo: authReducer,
	proposition: GenerateReducer(_module.proposition)
});
