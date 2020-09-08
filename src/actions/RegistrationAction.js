import {Actions} from 'react-native-router-flux';
import axois from 'axios';
import {AsyncStorage} from 'react-native';

import {
  REGISTER_NAME_CHANGED,
  REGISTER_MOBILE_CHANGED,
  REGISTER_EMAIL_CHANGED,
  REGISTER_COLLEGE_CHANGED,
  REGISTER_ONLIST_ACCESS,
  REGISTER_ERROR,
  REGISTER_ONPICKER_VALUE_CHANGE,
  REGISTER_ONPAID_CHANGE,
} from './types';

import {BASE_URL} from '../constants/Constants';

export const registerAccessEventLists = () => {
  return (dispatch) => {
    axois
      .get(BASE_URL + '/getEvents.php')
      .then((response) => {
        let events = response.data.events;
        let data = [];
        for (var i = 0; i < events.length; i++) {
          let list = {};
          list['name'] = events[i].ename;
          list['fees'] = events[i].fees;
          data.push(list);
        }
        dispatch({
          type: REGISTER_ONLIST_ACCESS,
          payload: data,
          selectedValue: data[0].name,
          selectedFees: data[0].fees,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: REGISTER_ERROR});
      });
  };
};

export const registerOnPaidChange = (text, ogValue) => {
  let paid = 0;
  let rem = 0;
  //   console.log('Remaining   ', ogValue);
  if (text === '') {
    // console.log(paid, '  ', rem);
    return {
      type: REGISTER_ONPAID_CHANGE,
      paid: 0,
      rem: parseInt(ogValue),
    };
  }
  if (parseInt(text, 10) > ogValue) {
    paid = 0;
    rem = parseInt(ogValue, 10);
  } else {
    rem = parseInt(ogValue, 10) - parseInt(text, 10);
    paid = parseInt(text, 10);
  }
  //   console.log(paid, '  ', rem);
  return {
    type: REGISTER_ONPAID_CHANGE,
    paid: paid,
    rem: rem,
  };
};

export const registerPickerValueChange = (list, value) => {
  return {
    type: REGISTER_ONPICKER_VALUE_CHANGE,
    selectedValue: value,
    selectedFees: list.find((element) => element.name === value).fees,
  };
};

export const registerNameChanged = (text) => {
  return {
    type: REGISTER_NAME_CHANGED,
    payload: text,
  };
};

export const registerEmailChanged = (text) => {
  return {
    type: REGISTER_EMAIL_CHANGED,
    payload: text,
  };
};

export const registerMobileChanged = (text) => {
  return {
    type: REGISTER_MOBILE_CHANGED,
    payload: text,
  };
};

export const registerCollegeChanged = (text) => {
  return {
    type: REGISTER_COLLEGE_CHANGED,
    payload: text,
  };
};
