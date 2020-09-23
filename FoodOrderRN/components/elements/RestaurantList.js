import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Constants from '../../assets/js/constants';

import Restaurants from '../../assets/json/restaurants';

const RestaurantList = ({navigation}) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    setRestaurants(Restaurants.restaurants);
  }, []);

  return (
    <View style={Constants.STYLE.MTOP}>
      <Text style={Constants.STYLE.H2}>RESTAURANTS</Text>

      <SafeAreaView>
        <FlatList
          data={restaurants}
          renderItem={({item}) => {
            return <RestaurantBox restaurant={item} />;
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

const RestaurantBox = ({restaurant}) => {
  //price point
  var range = '';
  for (let i = 0; i < restaurant.price_range; i++) {
    range += Constants.CURRENCY_SIGN;
  }

  //rating
  var activeStars = '',
    inactiveStars = '';
  for (let i = 0; i < restaurant.rating; i++) {
    activeStars += Constants.STAR_SYMBOL;
  }
  for (let i = 0; i < 5 - restaurant.rating; i++) {
    inactiveStars += Constants.STAR_SYMBOL;
  }

  return (
    <View style={{marginBottom: 12, marginTop:4}}>
      <TouchableOpacity style={{height: 100, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image
            style={{width: 100, height: 100, borderRadius: 3}}
            source={{uri: restaurant.image}}
          />
        </View>
        <View style={{flex: 2}}>
          <Text style={Constants.STYLE.H3}>{restaurant.name}</Text>
          <View style={{flexDirection: 'row', marginTop: 4}}>
            <Text
              style={{
                backgroundColor: Constants.COLORS.THEME_SECONDARY,
                color: '#fff',
                padding: 2,
                paddingHorizontal: 5,
                borderRadius: 2,
                textTransform: 'uppercase',
              }}>
              {restaurant.type.name}
            </Text>
            <View style={{marginLeft: 3}}>
              <Text style={{fontWeight: 'bold'}}>{range}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 4}}>
            <Text style={{color: Constants.COLORS.THEME_MAIN, fontSize: 16}}>
              {activeStars}
            </Text>
            <Text style={{color: '#aaa', fontSize: 16}}>{inactiveStars}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 1}}>
            <Text style={{color: '#111', fontSize: 14}}>
              {restaurant.distance.value +
                ' ' +
                restaurant.distance.unit +
                ' away'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantList;
