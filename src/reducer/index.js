import {combineReducers} from 'redux';
import ForgotReducer from './ForgotReducer';
import LoginReducer from './LoginReducer';
import ListReducer from './ListReducer';
import RegisterReducer from './RegisterReducer';

export default combineReducers({
  forgotPassword: ForgotReducer,
  auth: LoginReducer,
  registrations: ListReducer,
  register: RegisterReducer,
});
