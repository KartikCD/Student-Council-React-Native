import axios from 'axios';
import {SCAN_SUCCESS, SCAN_DEFAULT, SCAN_FAIL} from './types';

import {BASE_URL} from '../constants/Constants';

export const getDetails = (id) => {
  return (dispatch) => {
    dispatch({type: SCAN_DEFAULT});
    axios
      .get(BASE_URL + '/getRegister.php', {
        params: {
          id: id,
        },
      })
      .then((response) => {
        if (Array.isArray(response.data) == false) {
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
