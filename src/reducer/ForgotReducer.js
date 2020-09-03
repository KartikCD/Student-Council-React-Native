import {
  FORGOT_EMAIL_CHANGED,
  FORGOT_PASSWORD_CHANGED,
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_LOADER,
  FORGOT_PASSWORD_RESET,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false,
  message: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORGOT_EMAIL_CHANGED:
      return {...state, email: action.payload};

    case FORGOT_PASSWORD_CHANGED:
      return {...state, password: action.payload};

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        message: action.payload,
      };

    case FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        error: 'Something went wrong.',
        loading: false,
        message: '',
      };

    case FORGOT_PASSWORD_LOADER:
      return {...state, loading: true, error: '', message: ''};

    case FORGOT_PASSWORD_RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};
