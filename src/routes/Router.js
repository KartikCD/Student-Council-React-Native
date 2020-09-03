import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import HomePage from '../pages/HomePage';

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
              console.log('Error');
            }}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
