import axios from 'axios';
import {SCAN_SUCCESS, SCAN_FAIL, SCAN_RESET} from './types';

import {BASE_URL} from '../constants/Constants';

export const getDetails = (id) => {
  return (dispatch) => {
    axios
      .get(BASE_URL + '/getRegister.php', {
        params: {
          id: id,
        },
      })
      .then((response) => {
        console.log(response.data);
        var data = response.data;
        if (Array.isArray(data) === true) {
          dispatch({type: SCAN_FAIL, payload: 'No such entry found.'});
        } else {
          dispatch({type: SCAN_SUCCESS, payload: response.data});
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: SCAN_FAIL, payload: 'Something went wrong.'});
      });
  };
};

export const scannerResetProps = () => {
  return {
    type: SCAN_RESET,
  };
};
