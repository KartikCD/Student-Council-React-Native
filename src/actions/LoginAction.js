import {Actions} from 'react-native-router-flux';
import axois from 'axios';
import {AsyncStorage} from 'react-native';

import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_FAILED,
  LOGIN_LOADER,
  LOGIN_RESET,
  LOGIN_SUCCESS,
} from './types';
import {BASE_URL} from '../constants/Constants';

export const loginEmailChanged = (text) => {
  return {
    type: LOGIN_EMAIL_CHANGED,
    payload: text,
  };
};

export const loginPasswordChanged = (text) => {
  return {
    type: LOGIN_PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_LOADER});
    axois
      .get(BASE_URL + '/verifyappuser.php', {
        params: {
          username: email,
          password: password,
        },
      })
      .then((response) => {
        console.log('I am here');
        if (response.data.status === 'SUCCESS') {
          try {
            AsyncStorage.setItem('USERNAME', response.data.message);
            AsyncStorage.setItem('IS_LOGIN', true);
          } catch (error) {
            console.log(error);
          }

          dispatch({
            type: LOGIN_SUCCESS,
            payload: true,
          });
        } else {
          dispatch({type: LOGIN_FAILED});
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: LOGIN_FAILED});
      });
  };
};

export const resetLoginPasswordProps = () => {
  return (dispatch) => {
    dispatch({type: LOGIN_RESET});
    Actions.homescreen();
  };
};
