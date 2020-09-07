import {Actions} from 'react-native-router-flux';
import axios from 'axios';

import {BASE_URL} from '../constants/Constants';
import {ACCESS_LIST, LIST_ACCESS_FAILED, ON_LIST_VALUE_CHANGE} from './types';

export const accessEventsList = () => {
  return (dispatch) => {
    axios
      .get(BASE_URL + '/getEvents.php')
      .then((response) => {
        dispatch({
          type: ACCESS_LIST,
          payload: response.data.events,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: LIST_ACCESS_FAILED,
        });
      });
  };
};

export const onEventValueChange = (text) => {
  return {
    type: ON_LIST_VALUE_CHANGE,
    payload: text,
  };
};
