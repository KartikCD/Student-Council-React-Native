import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.cardSectionStyles, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardSectionStyles: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});

export {CardSection};
