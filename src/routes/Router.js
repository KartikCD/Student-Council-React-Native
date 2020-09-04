import React from 'react';
import {AsyncStorage} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="homescreen">
          <Scene
            key="home"
            component={HomePage}
            title="Home"
            rightTitle="Logout"
            onRight={() => {
              try {
                AsyncStorage.setItem('USERNAME', '');
                AsyncStorage.setItem('IS_LOGIN', false);
              } catch (err) {
                console.log(err);
              }
              Actions.loginscreen();
            }}
          />
        </Scene>
        <Scene key="loginscreen" initial>
          <Scene key="login" component={LoginPage} title="Login" />
        </Scene>
      </Scene>
    </Router>
  );
};

const onLogout = () => {};

export default RouterComponent;
