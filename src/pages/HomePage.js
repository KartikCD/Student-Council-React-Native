import React, {Component} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
        activeColor="#fff"
        labelStyle={{fontSize: 12}}
        style={{backgroundColor: 'tomato'}}>
        {/* Register button navigation */}
        <this.Tab.Screen
          name="Register"
          component={RegistrationScreen}
          options={{
            tabBarLabel: 'Register',
            tabBarColor: '#6518f4',
            tabBarOptions: {
              activeTintColor: '#fff',
              inactiveTintColor: '#fff',
            },
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name={
                  Platform.OS === 'ios'
                    ? focused
                      ? 'ios-create'
                      : 'ios-home-outline'
                    : focused
                    ? 'md-create'
                    : 'md-create-outline'
                }
                style={{color: '#fff'}}
                color="#fff"
                size={23}
              />
            ),
          }}
        />
        {/* Scanner Navigation */}
        <this.Tab.Screen
          name="Scan"
          component={ScannerScreen}
          options={{
            tabBarLabel: 'QR Scan',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name={
                  Platform.OS === 'ios'
                    ? focused
                      ? 'ios-camera'
                      : 'ios-camera-outline'
                    : focused
                    ? 'md-camera'
                    : 'md-camera-outline'
                }
                style={{color: '#fff'}}
                color="#fff"
                size={23}
              />
            ),
          }}
        />
        {/* Forgot password */}
        <this.Tab.Screen
          name="Forgot"
          component={ForgotPasswordScreen}
          options={{
            tabBarLabel: 'Password Reset',
            tabBarColor: '#006d6a',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name={
                  Platform.OS === 'ios'
                    ? focused
                      ? 'ios-lock-closed'
                      : 'ios-lock-closed-outline'
                    : focused
                    ? 'md-lock-closed'
                    : 'md-lock-closed-outline'
                }
                style={{color: '#fff'}}
                color="#fff"
                size={23}
              />
            ),
          }}
        />
        {/* List of registrations. */}
        <this.Tab.Screen
          name="List"
          component={RegistrationList}
          options={{
            tabBarLabel: 'List',
            tabBarColor: '#cc3266',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name={
                  Platform.OS === 'ios'
                    ? focused
                      ? 'ios-list'
                      : 'ios-list-outline'
                    : focused
                    ? 'md-list'
                    : 'md-list-outline'
                }
                style={{color: '#fff'}}
                color="#fff"
                size={23}
              />
            ),
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
