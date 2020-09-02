import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  RegistrationList,
  RegistrationScreen,
  ForgotPasswordScreen,
  ScannerScreen,
} from './NavigationScreen/';

class HomePage extends Component {
  componentDidMount() {}

  Tab = createMaterialBottomTabNavigator();

  myTabs() {
    return (
      <this.Tab.Navigator
        initialRouteName="Register"
        activeColor="#e91e63"
        labelStyle={{fontSize: 12}}
        style={{backgroundColor: 'tomato'}}>
        {/* Register button navigation */}
        <this.Tab.Screen
          name="Register"
          component={RegistrationScreen}
          options={{
            techBarLabel: 'Register',
            techBarIcon: () => <Icon name="pencil" color="#000" size={26} />,
          }}
        />
        {/* Scanner Navigation */}
        <this.Tab.Screen
          name="Scan"
          component={ScannerScreen}
          options={{
            techBarLabel: 'QR Scan',
            techBarIcon: () => <Icon name="pencil" color="#000" size={26} />,
          }}
        />
        {/* Forgot password */}
        <this.Tab.Screen
          name="Forgot"
          component={ForgotPasswordScreen}
          options={{
            techBarLabel: 'Forgot password',
            techBarIcon: () => <Icon name="pencil" color="#000" size={26} />,
          }}
        />
        {/* List of registrations. */}
        <this.Tab.Screen
          name="List"
          component={RegistrationList}
          options={{
            techBarLabel: 'List',
            techBarIcon: () => <Icon name="pencil" color="#000" size={26} />,
          }}
        />
      </this.Tab.Navigator>
    );
  }

  render() {
    return <NavigationContainer>{this.myTabs()}</NavigationContainer>;
  }
}

export default HomePage;
