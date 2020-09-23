import React from 'react';
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

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: Constants.COLORS.BACKGROUND,
        height: '100%',
        padding: 10,
      }}>
      <DealsBox />
      <CategoriesScroller />
      <View>
        <RestaurantList />
      </View>
    </ScrollView>

    // <Tab.Navigator>
    //   <Tab.Screen name="Feed" component={Feed} />
    //   <Tab.Screen name="Messages" component={Messages} />
    // </Tab.Navigator>
  );
};

export default HomeScreen;

const Tab = createBottomTabNavigator();

const Feed = () => <Text>Feed</Text>;
const Messages = () => <Text>Feed</Text>;
