import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const NumericInput = () => {
  const [value, setValue] = useState(0);

  const buttonPressed = (type) => {
    console.log(type);
    if (type == '-') {
      if (value == 0) return;
      setValue(value - 1);
    } else {
      if (value == 100) return;
      setValue(value + 1);
    }
  };

  return (
    <View style={{flexDirection: 'row', width: 100, height: '100%'}}>
      <TouchableOpacity
        style={[styles.button, styles.leftButton]}
        onPress={() => buttonPressed('-')}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={styles.middleText}>{value}</Text>
      <TouchableOpacity
        style={[styles.button, styles.rightButton]}
        onPress={() => buttonPressed('+')}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumericInput;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderColor: '#1112',
    backgroundColor: '#3331',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  leftButton: {
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },

  rightButton: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },

  middleText: {
    flex: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1112',
    borderBottomWidth: 1,
    borderBottomColor: '#1112',
  },
});
