import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

function Separator() {
  return (
    <View style={styles.separator} />
  )
}

export default Separator;

var styles = StyleSheet.create({
    separator: {
      flex: 1,
      backgroundColor: '#E4E4E4',
      height: 1,
      marginLeft: 15
    }
  });