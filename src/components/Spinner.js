import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = ({size}) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
  },
});

export {Spinner};
