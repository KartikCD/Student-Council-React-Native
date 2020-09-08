import {Actions} from 'react-native-router-flux';
import axios from 'axios';

import {BASE_URL} from '../constants/Constants';
import {ACCESS_LIST, LIST_ACCESS_FAILED, ON_LIST_VALUE_CHANGE} from './types';

export const accessEventsList = () => {
  return (dispatch) => {
    axios
      .get(BASE_URL + '/getEvents.php')
      .then((response) => {
        getRegistrations(dispatch, response.data.events, ACCESS_LIST, 'All');
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
  return (dispatch) => {
    getRegistrations(dispatch, null, ON_LIST_VALUE_CHANGE, text);
  };
};

const getRegistrations = (dispatch, events, type, selectedValue) => {
  axios
    .get(BASE_URL + '/getregistry.php', {
      params: {
        event: selectedValue,
      },
    })
    .then((response) => {
      if (type === ACCESS_LIST) {
        dispatch({
          type: ACCESS_LIST,
          payload: events,
          list: response.data.registration_details,
          pickedValue: selectedValue,
        });
      } else if (type === ON_LIST_VALUE_CHANGE) {
        dispatch({
          type: ON_LIST_VALUE_CHANGE,
          list: response.data.registration_details,
          pickedValue: selectedValue,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LIST_ACCESS_FAILED,
      });
    });
};
