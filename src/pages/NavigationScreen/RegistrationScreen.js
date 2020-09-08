import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Picker} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-native';

import {
  registerNameChanged,
  registerCollegeChanged,
  registerEmailChanged,
  registerMobileChanged,
  registerAccessEventLists,
  registerPickerValueChange,
  registerOnPaidChange,
} from '../../actions/';

import {Card, CardSection, Input, Button, Spinner} from '../../components/';

class RegistrationScreens extends Component {
  componentDidMount() {
    this.props.registerAccessEventLists();
  }

  renderPickerList() {
    if (this.props.eventReceived) {
      return (
        <CardSection style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 20,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            Events
          </Text>
          <Picker
            onValueChange={(text) => {
              this.props.registerPickerValueChange(this.props.lists, text);
            }}
            mode={Picker.MODE_DROPDOWN}
            selectedValue={this.props.selectedValue}>
            {this.props.lists.map((item, key) => {
              return (
                <Picker.Item label={item.name} value={item.name} key={key} />
              );
            })}
          </Picker>
        </CardSection>
      );
    }
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <CardSection>
            <Text style={styles.textStyle}>Register for Event</Text>
          </CardSection>

          <CardSection>
            <Input
              label="Name"
              placeholder="Name"
              onChangeText={(text) => {
                this.props.registerNameChanged(text);
              }}
              value={this.props.name}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Email"
              placeholder="example@mail.com"
              keyboardType={'email-address'}
              onChangeText={(text) => {
                this.props.registerEmailChanged(text);
              }}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Mobile"
              placeholder="5555555555"
              keyboardType={'numeric'}
              onChangeText={(text) => {
                this.props.registerMobileChanged(text);
              }}
              value={this.props.phone}
            />
          </CardSection>

          <CardSection>
            <Input
              label="College"
              placeholder="College"
              onChangeText={(text) => {
                this.props.registerCollegeChanged(text);
              }}
              value={this.props.college}
            />
          </CardSection>

          {this.renderPickerList()}

          <CardSection>
            <Text style={styles.FeesTextStyle}>
              Event Fees = {this.props.selectedFees}
            </Text>
          </CardSection>

          <CardSection>
            <Input
              label="Paid"
              placeholder="0"
              keyboardType={'numeric'}
              onChangeText={(text) => {
                console.log('I am here...     ', typeof text);
                this.props.registerOnPaidChange(text, this.props.selectedFees);
              }}
              value={this.props.paid.toString()}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Remaining"
              placeholder="0"
              editable={false}
              keyboardType={'numeric'}
              value={this.props.remaining.toString()}
            />
          </CardSection>

          <CardSection>
            <Button>Register</Button>
          </CardSection>
        </Card>
      </ScrollView>
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
  FeesTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    email: state.register.email,
    name: state.register.name,
    phone: state.register.phone,
    college: state.register.college,
    lists: state.register.lists,
    eventReceived: state.register.eventReceived,
    selectedValue: state.register.selectedValue,
    selectedFees: state.register.selectedFees,
    paid: state.register.paid,
    remaining: state.register.remaining,
  };
};

const RegistrationScreen = connect(mapStateToProps, {
  registerCollegeChanged,
  registerEmailChanged,
  registerMobileChanged,
  registerNameChanged,
  registerAccessEventLists,
  registerPickerValueChange,
  registerOnPaidChange,
})(RegistrationScreens);

export {RegistrationScreen};
