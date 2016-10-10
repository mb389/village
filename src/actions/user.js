import * as types from '../constants/actionTypes';

export const userReg = (userInfo) => {
  return (dispatch) => {
    return dispatch({
      type: types.USER_REG,
      userInfo
    })
  }
}
