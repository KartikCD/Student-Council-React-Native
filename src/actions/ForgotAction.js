import {Actions} from 'react-native-router-flux';
import axios from 'axios';

import {
  FORGOT_EMAIL_CHANGED,
  FORGOT_PASSWORD_CHANGED,
  FORGOT_PASSWORD_LOADER,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_RESET,
} from './types';

import {BASE_URL} from '../constants/Constants';

export const emailChanged = (text) => {
  return {
    type: FORGOT_EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: FORGOT_PASSWORD_CHANGED,
    payload: text,
  };
};

export const performForgotPassword = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: FORGOT_PASSWORD_LOADER});
    axios
      .get(BASE_URL + '/changepassword.php', {
        params: {
          username: email,
          password: password,
        },
      })
      .then((response) => {
        if (response.data.status === 'SUCCESS') {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: response.data.message,
          });
        } else {
          dispatch({type: FORGOT_PASSWORD_FAILED});
        }
      })
      .catch((err) => {
        dispatch({type: FORGOT_PASSWORD_FAILED});
      });
  };
};

export const resetForgotPasswordProps = () => {
  return {type: FORGOT_PASSWORD_RESET};
};
