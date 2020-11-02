import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
  } from '../actions/types';
  
  export default function(state = {}, action) {
    switch (action.type) {
      case FACEBOOK_LOGIN_SUCCESS:
        return { token: '2356891235' };
      case FACEBOOK_LOGIN_FAIL:
        return { token: '1555151551' };
      default:
        return state;
    }
  }