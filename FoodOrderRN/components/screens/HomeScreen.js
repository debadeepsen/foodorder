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
      <RestaurantList />
    </ScrollView>
  );
};

export default HomeScreen;
