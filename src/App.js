import React, {Component} from 'react';
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import HomePage from './pages/HomePage';

class App extends Component {
  componentDidMount() {
    AsyncStorage.getItem('name')
      .then((value) => {
        this.setState({retreivedName: value});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  state = {name: '', retreivedName: ''};

  onButtonClick() {
    console.log('State is ', this.state);
    try {
      AsyncStorage.setItem('name', this.state.name || 'kartik');
      this.setState({retreivedName: this.state.name});
    } catch (err) {
      console.log(err);
    }
  }

  renderLetter() {
    if (this.state.retreivedName == null) {
      return <Text style={{fontSize: 30}}></Text>;
    }
    return <Text style={{fontSize: 30}}>{this.state.retreivedName}</Text>;
  }

  render() {
    console.log(this.state);

    return <HomePage />;
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: 'blue',
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
});

export default App;
