import {combineReducers} from 'redux';
import ForgotReducer from './ForgotReducer';

export default combineReducers({
  forgotPassword: ForgotReducer,
});
