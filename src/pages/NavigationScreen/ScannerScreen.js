import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {getDetails, scannerResetProps} from '../../actions/';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

class ScannerScreens extends Component {
  async UNSAFE_componentWillMount() {
    let granted = null;
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
    this.props.getDetails(text.data);
  }

  renderAlert() {
    if (this.props.dataReceived) {
      Alert.alert(
        'Message',
        `Name: ${this.props.data.name} \nEmail: ${this.props.data.email} \nPhone: ${this.props.data.phone} \nCollege: ${this.props.data.college} \nEvent: ${this.props.data.event} \nPaid: ${this.props.data.paid} \nRemaining: ${this.props.data.remaining} \nDOR: ${this.props.data.dor} \n`,
        [
          {
            text: 'OK',
            onPress: () => {
              this.props.scannerResetProps();
            },
          },
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    return (
      <View>
        <QRCodeScanner
          onRead={(text) => {
            this.props.getDetails(text.data);
          }}
          topContent={
            <Text>
              Go to <Text>wikipedia.org/wiki/QR_code</Text> on your computer and
              scan the QR code.
            </Text>
          }
          reactivate={this.props.reactivate}
          bottomContent={
            <TouchableOpacity>
              <Text>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
        <View>{this.renderAlert()}</View>
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

const mapStateToProps = (state) => {
  return {
    data: state.scanner.data,
    dataReceived: state.scanner.dataReceived,
    error: state.scanner.error,
    reactivate: state.scanner.reactivate,
  };
};

const ScannerScreen = connect(mapStateToProps, {getDetails, scannerResetProps})(
  ScannerScreens,
);

export {ScannerScreen};
