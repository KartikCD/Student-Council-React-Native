import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class RegistrationScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>Register...</Text>
        <Icon name="area-chart" size={26} />
      </View>
    );
  }
}

export {RegistrationScreen};
