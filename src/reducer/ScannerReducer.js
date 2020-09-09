import {SCAN_FAIL, SCAN_SUCCESS, SCAN_RESET} from '../actions/types';

const INITIAL_STATE = {
  data: null,
  dataReceived: false,
  error: false,
  reactivate: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCAN_FAIL:
      return {...state, error: true, dataReceived: false, reactivate: true};

    case SCAN_SUCCESS:
      return {
        ...state,
        error: false,
        dataReceived: true,
        data: action.payload,
        reactivate: false,
      };

    case SCAN_RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};
