import React, {Component} from 'react';
import {Text, Picker, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';

import {accessEventsList, onEventValueChange} from '../../actions/';
import {Card, CardSection, Input, Button, ListItem} from '../../components/';
import {BASE_URL} from '../../constants/Constants';

class RegistrationLists extends Component {
  componentDidMount() {
    console.log(this.props.dataReceived);
    this.props.accessEventsList();
  }

  renderPickerList() {
    if (this.props.dataReceived) {
      return (
        <CardSection style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 16,
              paddingLeft: 5,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            Events
          </Text>
          <Picker
            onValueChange={(text) => {
              if (this.props.selectedPicker === text) {
              } else {
                this.props.onEventValueChange(text);
              }
            }}
            mode={Picker.MODE_DROPDOWN}
            selectedValue={this.props.selectedPicker}>
            <Picker.Item label="All" value="All" key={-1} />
            {this.props.lists.map((item, key) => {
              return (
                <Picker.Item label={item.ename} value={item.ename} key={key} />
              );
            })}
          </Picker>
        </CardSection>
      );
    }
  }

  plotData(item) {
    return <ListItem data={item} />;
  }

  renderList() {
    const {list, registrationsReceived, registrationList} = this.props;
    console.log(list, registrationsReceived, registrationList);
    if (this.props.registrationsReceived) {
      return (
        <CardSection style={{padding: 1, flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 16,
              paddingLeft: 5,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            Registrations
          </Text>

          <FlatList
            data={this.props.registrationList}
            renderItem={({item}) => this.plotData(item)}
            keyExtractor={(item) => item.id.toString()}
          />
        </CardSection>
      );
    } else {
      return (
        <CardSection>
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 5,
              paddingBottom: 10,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            No registrations for this event!
          </Text>
        </CardSection>
      );
    }
  }

  // getList() {
  //   return axios.get(BASE_URL + '/getregistry.php', {
  //     params: {
  //       event: this.props.selectedPicker,
  //     },
  //   });
  // }

  // async renderList() {
  //   await this.getList()
  //     .then((response) => {
  //       console.log(response.data.registration_details);
  //       if (response.data.registration_details.length === 0) {
  //         return (
  //           <CardSection>
  //             <Text
  //               style={{
  //                 fontSize: 18,
  //                 paddingLeft: 5,
  //                 paddingBottom: 10,
  //                 fontWeight: 'bold',
  //                 alignSelf: 'center',
  //               }}>
  //               No registrations for this event!
  //             </Text>
  //           </CardSection>
  //         );
  //       } else {
  //         return (
  //           <CardSection style={{padding: 1}}>
  //             <Text
  //               style={{
  //                 fontSize: 16,
  //                 paddingLeft: 5,
  //                 paddingBottom: 10,
  //                 fontWeight: 'bold',
  //               }}>
  //               Registrations
  //             </Text>

  //             <FlatList
  //               data={response.data.registration_details}
  //               renderItem={({item}) => this.plotData(item)}
  //               keyExtractor={(item) => item.id.toString()}
  //             />
  //           </CardSection>
  //         );
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return (
  //         <CardSection>
  //           <Text
  //             style={{
  //               fontSize: 18,
  //               paddingLeft: 5,
  //               paddingBottom: 10,
  //               fontWeight: 'bold',
  //               alignSelf: 'center',
  //             }}>
  //             No registrations for this event!
  //           </Text>
  //         </CardSection>
  //       );
  //     });
  // }

  render() {
    return (
      <Card>
        {this.renderPickerList()}
        {this.renderList()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    lists: state.registrations.lists,
    dataReceived: state.registrations.dataReceived,
    listError: state.registrations.listError,
    selectedPicker: state.registrations.selectedPicker,
    registrationsReceived: state.registrations.registrationsReceived,
    registrationList: state.registrations.registrationList,
  };
};

const RegistrationList = connect(mapStateToProps, {
  accessEventsList,
  onEventValueChange,
})(RegistrationLists);

export {RegistrationList};
