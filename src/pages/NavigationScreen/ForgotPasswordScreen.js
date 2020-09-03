import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

import {Card, CardSection, Input, Button} from '../../components/';

class ForgotPasswordScreen extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text style={styles.textStyle}>Forgot Password</Text>
        </CardSection>

        <CardSection>
          <Input label="Email" placeholder="example@mail.com" />
        </CardSection>

        <CardSection>
          <Input label="Password" placeholder="password" secureTextEntry />
        </CardSection>

        <CardSection>
          <Button>Change Password</Button>
        </CardSection>
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
});

export {ForgotPasswordScreen};
