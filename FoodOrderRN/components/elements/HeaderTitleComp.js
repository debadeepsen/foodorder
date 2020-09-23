import {faBars, faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
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


const HeaderTitleComp = () => {
  return (
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
  );
};

export default HeaderTitleComp;

const styles = StyleSheet.create({
  home: {
    fontSize: 16,
  },
  addr: {
    fontSize: 10,
  },
});
