import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {CardSection} from './';

class ListItem extends Component {
  renderList() {
    return (
      <Text>
        {/* Name: ${this.props.data.name} \nEmail: ${this.props.data.email}{' '}
        \nPhone: ${this.props.data.phone}\n College: ${this.props.data.college}
        \n Event: ${this.props.data.event} \nPaid: ${this.props.data.paid}{' '}
        \nRemaining: ${this.props.data.remaining} \nDOR: ${this.props.data.dor}{' '}
        \nEntered By: ${this.props.data.enteredby}` */}
        Name: {this.props.data.name} {'\n'}Email: {this.props.data.email} {'\n'}
        Phone: {this.props.data.phone} {'\n'}College: {this.props.data.college}{' '}
        {'\n'}Event: {this.props.data.event} {'\n'}Paid: {this.props.data.paid}{' '}
        {'\n'}Remaining: {this.props.data.remaining} {'\n'}DOR:{' '}
        {this.props.data.dor} {'\n'}Entered By: {this.props.data.enteredby}
      </Text>
    );
  }

  render() {
    return (
      <View>
        <CardSection>{this.renderList()}</CardSection>
      </View>
    );
  }
}

export {ListItem};
