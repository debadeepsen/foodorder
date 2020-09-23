import {faBars, faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
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

const HeaderComp = () => {
  
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 70,
        backgroundColor: Constants.COLORS.BACKGROUND,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        elevation: 20,
      }}>
      <View
        style={{
          paddingLeft: 10,
          flex: 3,
          flexDirection: 'row',
        }}>
        <View>
          <FontAwesomeIcon icon={faHome} size={28} style={{marginTop: 5}} />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.home}>Home</Text>
          <Text style={styles.addr}>123, ABC Road</Text>
          <Text style={styles.addr}>YZ 98745</Text>
        </View>
      </View>

      <View style={{marginLeft: 10, flex: 1}}>
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
      </View>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  home: {
    fontSize: 18,
  },
  addr: {
    fontSize: 12,
  },
});
