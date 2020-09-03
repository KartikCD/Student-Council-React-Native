import React, {Component} from 'react';
import {Text, StyleSheet, Alert, View, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-native';
import {Card, CardSection, Input, Button, Spinner} from '../../components/';
import {
  emailChanged,
  passwordChanged,
  performForgotPassword,
  resetForgotPasswordProps,
} from '../../actions/';

class ForgotPasswordScreens extends Component {
  onEmailAddressChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordTextChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    Keyboard.dismiss();
    const {email, password} = this.props;
    if (this.validateEmailAddress(email) && this.validatePassword(password)) {
      this.props.performForgotPassword({email, password});
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>Change Password</Button>
    );
  }

  validateEmailAddress(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email) === false) {
      Toast.show(
        'Please enter valid email address.',
        Toast.SHORT,
        Toast.BOTTOM,
      );
      return false;
    }
    return true;
  }

  validatePassword(password) {
    if (password === '') {
      Toast.show('Password should not be empty.', Toast.SHORT, Toast.BOTTOM);
      return false;
    }
    return true;
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderAlert() {
    if (this.props.message !== '') {
      Alert.alert(
        'Message',
        this.props.message,
        [
          {
            text: 'OK',
            onPress: () => {
              this.props.resetForgotPasswordProps();
            },
          },
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={styles.textStyle}>Forgot Password</Text>
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="example@mail.com"
            onChangeText={this.onEmailAddressChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordTextChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>{this.renderButton()}</CardSection>

        <View>{this.renderAlert()}</View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    padding: 10,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

const mapStateToProps = (state) => {
  return {
    email: state.forgotPassword.email,
    password: state.forgotPassword.password,
    error: state.forgotPassword.error,
    loading: state.forgotPassword.loading,
    message: state.forgotPassword.message,
  };
};

const ForgotPasswordScreen = connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  performForgotPassword,
  resetForgotPasswordProps,
})(ForgotPasswordScreens);

export {ForgotPasswordScreen};
