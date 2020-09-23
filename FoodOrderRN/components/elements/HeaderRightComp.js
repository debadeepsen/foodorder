import {faBars, faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Constants from '../../assets/js/constants';
import * as RootNavigation from '../../RootNavigation';

const HeaderRightComp = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('navigation.toggleDrawer();');
        navigation.toggleDrawer();
      }}>
      <FontAwesomeIcon
        icon={faBars}
        size={28}
        v
        style={{
          alignSelf: 'flex-end',
          marginRight: 15,
        }}
      />
    </TouchableOpacity>
  );
};

export default HeaderRightComp;
