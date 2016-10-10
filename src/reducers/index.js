
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import user from './userReducer';
 import { reducer as formReducer } from 'redux-form'

 const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
	user
});


 export default rootReducer;
