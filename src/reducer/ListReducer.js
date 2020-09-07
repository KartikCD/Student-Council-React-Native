import {
  LIST_ACCESS_FAILED,
  ACCESS_LIST,
  ON_LIST_VALUE_CHANGE,
} from '../actions/types';

const INITIAL_STATE = {
  lists: null,
  dataReceived: false,
  listError: false,
  selectedPicker: 'BRAINIACS (3 MEMBERS)',
  registrationsReceived: false,
  registrationList: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCESS_LIST:
      return {
        ...state,
        lists: action.payload,
        dataReceived: true,
        listError: false,
      };

    case LIST_ACCESS_FAILED:
      return {
        ...state,
        listError: true,
        dataReceived: false,
        selectedPicker: '',
      };

    case ON_LIST_VALUE_CHANGE:
      return {
        ...state,
        selectedPicker: action.payload,
      };

    default:
      return state;
  }
};
