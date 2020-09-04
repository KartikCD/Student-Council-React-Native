import React, {Component} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import {connect} from 'react-redux';
import {getDetails} from '../../actions/';

class ScannerScreen extends Component {
  async UNSAFE_componentWillMount() {
    try {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Student Council App Camera Permission',
          message: 'Student Council wants to access camera',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Accessed');
      } else {
        console.log('Denied');
      }
    } catch (err) {
      console.log(err);
    }
  }

  onQrRead(text) {
    console.log(text);
  }

  render() {
    return (
      <View>
        <Text>Some text...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
});

export {ScannerScreen};
