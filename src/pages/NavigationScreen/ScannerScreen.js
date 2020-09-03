import React, {Component} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import {connect} from 'react-redux';
import {getDetails} from '../../actions/';
// import QRCodeScanner from 'react-native-qrcode-scanner';

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
      // <QRCodeScanner
      //   onRead={this.onQrRead.bind(this)}
      //   reactivate={true}
      //   permissionDialogMessage="Need Permission to access Camera"
      //   reactivateTimeout={10}
      //   showMarker={true}
      //   markerStyle={{borderColor: '#fff', borderRadius: 10}}
      //   topContent={
      //     <Text style={styles.centerText}>
      //       Scan QR Code to get details of the participants.
      //     </Text>
      //   }
      // />

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
