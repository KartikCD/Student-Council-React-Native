import {combineReducers} from 'redux';
import ForgotReducer from './ForgotReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
  forgotPassword: ForgotReducer,
  auth: LoginReducer,
});
