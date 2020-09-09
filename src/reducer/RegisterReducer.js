import {
  REGISTER_COLLEGE_CHANGED,
  REGISTER_EMAIL_CHANGED,
  REGISTER_MOBILE_CHANGED,
  REGISTER_NAME_CHANGED,
  REGISTER_ONLIST_ACCESS,
  REGISTER_ERROR,
  REGISTER_ONPICKER_VALUE_CHANGE,
  REGISTER_ONPAID_CHANGE,
  REGISTER_LOADER,
  REGISTER_SUCCESS,
  REGISTER_UPLOAD_ERROR,
  REGISTER_RESET,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  name: '',
  phone: '',
  college: '',
  lists: null,
  eventReceived: false,
  selectedValue: '',
  selectedFees: 0,
  paid: 0,
  remaining: 0,
  loading: false,
  error: false,
  isSuccess: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_RESET: {
      return {
        ...INITIAL_STATE,
        lists: action.payload,
        eventReceived: true,
        selectedValue: action.selectedValue,
        selectedFees: action.selectedFees,
        remaining: parseInt(action.selectedFees, 10),
      };
    }

    case REGISTER_LOADER:
      return {...state, loading: true, isSuccess: false, error: false};

    case REGISTER_UPLOAD_ERROR:
      return {...state, loading: false, error: true, isSuccess: false};

    case REGISTER_SUCCESS:
      return {...state, loading: false, isSuccess: true, error: false};

    case REGISTER_NAME_CHANGED:
      return {...state, name: action.payload};

    case REGISTER_EMAIL_CHANGED:
      return {...state, email: action.payload};

    case REGISTER_MOBILE_CHANGED:
      return {...state, phone: action.payload};

    case REGISTER_COLLEGE_CHANGED:
      return {...state, college: action.payload};

    case REGISTER_ONLIST_ACCESS:
      return {
        ...state,
        lists: action.payload,
        selectedValue: action.selectedValue,
        selectedFees: parseInt(action.selectedFees, 10),
        eventReceived: true,
        paid: 0,
        remaining: parseInt(action.selectedFees, 10),
      };

    case REGISTER_ERROR:
      return {
        ...state,
      };

    case REGISTER_ONPICKER_VALUE_CHANGE:
      return {
        ...state,
        selectedValue: action.selectedValue,
        selectedFees: parseInt(action.selectedFees, 10),
        paid: 0,
        remaining: parseInt(action.selectedFees, 10),
      };

    case REGISTER_ONPAID_CHANGE:
      return {
        ...state,
        paid: action.paid,
        remaining: action.rem,
      };

    default:
      return state;
  }
};
