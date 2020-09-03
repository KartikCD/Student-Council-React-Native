import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';

const Button = ({onPress, children}) => {
  const {textStyle, buttonStyle} = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: Platform.OS === 'ios' ? '#007aff' : '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: Platform.OS === 'ios' ? '#fff' : '#318ffe',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 10,
    marginRight: 10,
  },
});

export {Button};
