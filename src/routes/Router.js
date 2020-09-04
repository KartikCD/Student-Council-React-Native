import React from 'react';
import {AsyncStorage} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SplashScreen from '../pages/SplashScreen';

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
            onRight={async () => {
              try {
                await AsyncStorage.setItem('USERNAME', '');
                await AsyncStorage.setItem('IS_LOGIN', 'false');
                Actions.loginscreen();
              } catch (err) {
                console.log(err);
              }
            }}
          />
        </Scene>
        <Scene key="loginscreen">
          <Scene key="login" component={LoginPage} title="Login" />
        </Scene>
        <Scene key="splashscreen" initial>
          <Scene key="splash" component={SplashScreen} hideNavBar={true} />
        </Scene>
      </Scene>
    </Router>
  );
};

const onLogout = () => {};

export default RouterComponent;
