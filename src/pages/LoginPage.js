import React, {Component} from 'react';
import {Text, StyleSheet, Alert, View, Keyboard, Image} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-native';

import {Card, CardSection, Input, Button, Spinner} from '../components/';
import {
  loginEmailChanged,
  loginPasswordChanged,
  loginUser,
  resetLoginPasswordProps,
} from '../actions/';

class LoginForm extends Component {
  onEmailAddressChange(text) {
    this.props.loginEmailChanged(text);
  }

  onPasswordFieldChanger(text) {
    this.props.loginPasswordChanged(text);
  }

  onButtonPress() {
    Keyboard.dismiss();
    const {email, password} = this.props;
    if (this.validateEmailAddress(email) && this.validatePassword(password)) {
      this.props.loginUser({email, password});
    }
  }

  renderButton() {
    if (this.props.username) {
      this.props.resetLoginPasswordProps();
    }
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

  render() {
    return (
      <Card>
        <CardSection style={styles.imageViewStyle}>
          <Image
            source={require('../../assets/council.png')}
            style={styles.imageStyle}
            resizeMode={'center'}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.textStyle}>Login</Text>
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
            onChangeText={this.onPasswordFieldChanger.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 200,
  },
  imageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    username: state.auth.username,
  };
};

export default connect(mapStateToProps, {
  loginEmailChanged,
  loginPasswordChanged,
  loginUser,
  resetLoginPasswordProps,
})(LoginForm);
