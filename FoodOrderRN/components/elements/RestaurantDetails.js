import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
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
import LinearGradient from 'react-native-linear-gradient';
import NumericInput from 'react-native-numeric-input';

import Constants from '../../assets/js/constants';

import Restaurants from '../../assets/json/restaurants';

const RestaurantDetails = ({route, navigation}) => {
  const {restaurant} = route.params;

  return (
    <ScrollView>
      <Image
        source={{uri: restaurant.image}}
        style={{
          height: 200,
          resizeMode: 'cover',
          borderBottomWidth: 1,
          borderColor: '#3334',
        }}
      />
      {/* <LinearGradient
        colors={['#6662', '#0000']}
        style={{
          height: 60,
          marginTop:2,
          padding:10
        }}> */}
      {/* </LinearGradient> */}
      <View style={{borderTopColor: '#1112', borderTopWidth: 2}}></View>
      {/* <View
        style={{
          borderTopColor: Constants.COLORS.THEME_SECONDARY,
          borderTopWidth: 2,
          marginTop: 2,
        }}></View>
      <View
        style={{
          borderTopColor: Constants.COLORS.THEME_MAIN,
          borderTopWidth: 3,
          marginTop: 2,
        }}></View> */}
      <View style={{padding: 10}}>
        <Text
          style={{
            color: Constants.COLORS.THEME_SECONDARY,
            fontSize: 36,
            marginBottom: 20,
          }}>
          {restaurant.name}
        </Text>
        <Text
          style={{
            color: '#888',
            fontSize: 20,
          }}>
          {restaurant.type.flag} &nbsp;
          {restaurant.type.name}
        </Text>
        <Text style={{marginTop: 10, marginBottom: 20}}>
          221A/C, Baker Street, Apartment B, London, AB, 12345.
        </Text>

        <SafeAreaView>
          <FlatList
            data={restaurant.menu}
            renderItem={({item}) => {
              return <MenuItemBox menuItem={item} />;
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default RestaurantDetails;

const MenuItemBox = ({menuItem}) => {
  return (
    <View
      style={{
        backgroundColor: Constants.COLORS.BACKGROUND,
        elevation: 0,
        marginBottom: 0,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#2222',
        flexDirection: 'row',
      }}>
      <Image
        style={{height: 110, width: 110, resizeMode: 'cover', flex: 1}}
        source={{uri: menuItem.image}}
      />
      <View style={{paddingLeft: 10, flex: 2}}>
        <Text
          style={{
            color: Constants.COLORS.THEME_TERTIARY,
            fontSize: 20,
          }}>
          {menuItem.name}
        </Text>
        <Text
          style={{
            color: '#888',
            fontSize: 12,
          }}>
          {menuItem.description}
        </Text>
        <Text
          style={{
            marginTop: 5,
          }}>
          {Constants.CURRENCY_SIGN}
          {menuItem.price}
        </Text>

        <NumericInput type="up-down" onChange={(value) => console.log(value)} />
        <TouchableOpacity
          style={{
            backgroundColor: Constants.COLORS.THEME_ALT,
            marginTop: 10,
            padding: 3,
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: '#fff'}}>Add </Text>
          <Text style={{color: '#fff', fontSize: 24}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
