import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_LOADER,
  LOGIN_RESET,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false,
  username: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_EMAIL_CHANGED:
      return {...state, email: action.payload};

    case LOGIN_PASSWORD_CHANGED:
      return {...state, password: action.payload};

    case LOGIN_LOADER:
      return {...state, loading: true, error: '', username: false};

    case LOGIN_RESET:
      return INITIAL_STATE;

    case LOGIN_FAILED:
      return {
        ...state,
        error: 'Authentication Failed.',
        loading: false,
        username: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        username: action.payload,
      };

    default:
      return state;
  }
};
