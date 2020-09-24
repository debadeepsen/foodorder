import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import Constants from '../../assets/js/constants';
import CategoriesScroller from '../elements/CategoriesScroller';
import DealsBox from '../elements/DealsBox';
import RestaurantList from '../elements/RestaurantList';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import RestaurantDetails from '../elements/RestaurantDetails';
import HeaderComp from '../elements/HeaderComp';
import HeaderRightComp from '../elements/HeaderRightComp';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <HeaderComp />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerRight: (props) => <HeaderRightComp {...props} />,
        }}>
        <Stack.Screen name="HomeMain" component={HomeMain} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator>
    </>
  );
};

export default HomeScreen;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeMain = () => {
  return (
    <View>
      <RestaurantList />
    </View>
  );
};

const Feed = () => <Text>Feed</Text>;
const Messages = () => <Text>Feed</Text>;
