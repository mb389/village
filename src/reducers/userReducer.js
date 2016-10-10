
import {USER_REG} from '../constants/actionTypes';
import initialState from './initialState';


export default function userReducer(state = initialState.user, action) {
  let newState;

  switch (action.type) {
    case USER_REG:
      const newState = {
        email: action.userInfo.email,
        password: action.userInfo.password
      }
      return { ...state, ...newState };

    default:
      return state;
  }
}
