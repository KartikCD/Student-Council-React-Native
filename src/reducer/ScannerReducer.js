import {SCAN_DEFAULT, SCAN_FAIL, SCAN_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
  data: '',
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCAN_DEFAULT:
      return INITIAL_STATE;

    case SCAN_SUCCESS:
      return {...state, data: action.payload};

    case SCAN_FAIL:
      return {...state, error: action.payload};

    default:
      return state;
  }
};
