import React, {Component} from 'react';
import {
  View,
  Image,
  LayoutAnimation,
  UIManager,
  AsyncStorage,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

class SplashScreen extends Component {
  componentDidMount() {
    LayoutAnimation.easeInEaseOut();
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);

    setTimeout(() => {
      console.log('hello');
      AsyncStorage.getItem('IS_LOGIN').then((value) => {
        console.log(value);
        if (value === 'false') {
          Actions.loginscreen();
        } else {
          Actions.homescreen();
        }
      });
    }, 2000);
  }
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
          source={require('../../assets/council.png')}
          style={{width: '100%', height: '100%'}}
          resizeMode={'center'}
        />
      </View>
    );
  }
}

export default SplashScreen;
