import * as React from 'react';
import {Button, View, Text, StatusBar, TouchableOpacity} from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
import HeaderComp from './components/elements/HeaderComp';
import HeaderTitleComp from './components/elements/HeaderTitleComp';
import HeaderRightComp from './components/elements/HeaderRightComp';
import Constants from './assets/js/constants';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {navigationRef} from './RootNavigation';
import {faBars, faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        hidden={true}
        backgroundColor={Constants.COLORS.BACKGROUND}
        barStyle="dark-content"
      />
      <HeaderComp />
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Constants.COLORS.BACKGROUND,
          },
          headerTitle: (props) => <HeaderTitleComp {...props} />,
          headerRight: (props) => <HeaderRightComp {...props} />,
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
