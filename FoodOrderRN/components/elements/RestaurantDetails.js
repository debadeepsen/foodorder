import {
  faAddressBook,
  faAddressCard,
  faCartPlus,
  faPhone,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
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
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NumericInput from './NumericInput';

import Constants from '../../assets/js/constants';

import Restaurants from '../../assets/json/restaurants';

const RestaurantDetails = ({route, navigation}) => {
  const {restaurant_id} = route.params;

  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    // in a real application, this would be done
    // with an API call
    var current_restaurant = Restaurants.restaurants.find(
      (r) => r.id == restaurant_id,
    );
    // console.log({current_restaurant});
    setRestaurant(current_restaurant);
  }, []);

  console.log('----------');
  console.log(restaurant);
  console.log('----------');

  //return <View/>
  return <RestaurantFlatList restaurant={restaurant} />;
};

export default RestaurantDetails;

const RestaurantFlatList = ({restaurant}) => {
  //rating
  var activeStars = '',
    inactiveStars = '';
  for (let i = 0; i < restaurant.rating; i++) {
    activeStars += Constants.STAR_SYMBOL;
  }
  for (let i = 0; i < 5 - restaurant.rating; i++) {
    inactiveStars += Constants.STAR_SYMBOL;
  }

  // return <Text>{JSON.stringify(restaurant.type)}</Text>;

  return (
    <>
      <SafeAreaView
        style={{borderWidth: 1, borderColor: '#4441', elevation: 1}}>
        <FlatList
          ListHeaderComponent={
            <>
              <Image
                source={{uri: restaurant.image}}
                style={{
                  height: 200,
                  resizeMode: 'cover',
                  borderBottomWidth: 1,
                  borderColor: '#3334',
                }}
              />
              <View style={{position: 'relative'}}>
                <LinearGradient
                  colors={['#0000', '#0007']}
                  style={{
                    height: 80,
                    width: '100%',
                    marginTop: 2,
                    padding: 8,
                    position: 'absolute',
                    bottom: 0,
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 36,
                      marginBottom: 0,
                    }}>
                    {restaurant.name}
                  </Text>
                </LinearGradient>
                <Text
                  style={{
                    color: '#888',
                    fontSize: 18,
                    position: 'absolute',
                    top: -200,
                    right: 0,
                    margin: 0,
                    borderBottomLeftRadius: 10,
                    borderColor: '#7774',
                    borderWidth: 1,
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    padding: 10,
                    backgroundColor: '#fff',
                    elevation: 5,
                  }}>
                  {restaurant.type ? restaurant.type.flag : ''} &nbsp;
                  {restaurant.type ? restaurant.type.name : ''}
                </Text>
              </View>

              <View style={{borderTopColor: '#1116', borderTopWidth: 1}}></View>
              <View style={{borderTopColor: '#1114', borderTopWidth: 1}}></View>
              <View style={{borderTopColor: '#1112', borderTopWidth: 1}}></View>
              <View style={{borderTopColor: '#1111', borderTopWidth: 1}}></View>

              <View style={{padding: 10}}>
                <View style={{flexDirection: 'row', marginTop: 0}}>
                  <Text
                    style={{color: Constants.COLORS.THEME_MAIN, fontSize: 18}}>
                    {activeStars}
                  </Text>
                  <Text style={{color: '#aaa', fontSize: 18}}>
                    {inactiveStars}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 8,
                  }}>
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    style={{color: Constants.COLORS.THEME_MAIN}}
                  />
                  <Text style={{marginLeft: 5}}>{restaurant.address}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 0,
                    marginBottom: 20,
                  }}>
                  <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={() => {
                      Linking.openURL(`tel:${restaurant.phone}`);
                    }}>
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{color: Constants.COLORS.THEME_MAIN}}
                    />
                    <Text
                      style={{marginLeft: 5, textDecorationLine: 'underline'}}>
                      {restaurant.phone}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>Menu</Text>
                </View>
              </View>
            </>
          }
          data={restaurant.menu}
          renderItem={({item}) => {
            return <MenuItemBox menuItem={item} />;
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </>
  );
};

const VegNonveg = ({type}) => {
  let color = type == 'V' ? '#1a1' : '#a11';

  return (
    <View
      style={{
        width: 14,
        height: 14,
        borderColor: color,
        borderWidth: 1,
        backgroundColor: '#fff',
        zIndex: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: 7,
      }}>
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 8,
          backgroundColor: color,
        }}></View>
    </View>
  );
};

const MenuItemBox = ({menuItem}) => {
  return (
    <View
      style={{
        backgroundColor: Constants.COLORS.BACKGROUND,
        elevation: 0,
        marginBottom: 0,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#1111',
        flexDirection: 'row',
        position: 'relative',
      }}>
      <Image
        style={{
          height: 110,
          width: 110,
          resizeMode: 'cover',
          flex: 1,
          borderRadius: 3,
        }}
        source={{uri: menuItem.image}}
      />
      <View style={{paddingLeft: 10, flex: 2}}>
        <View style={{flexDirection: 'row', marginBottom: 2}}>
          <VegNonveg type={menuItem.type} />
          <Text
            style={{
              color: Constants.COLORS.THEME_SECONDARY,
              fontSize: 20,
            }}>
            {menuItem.name}
          </Text>
        </View>
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

        <View style={{flexDirection: 'row', marginTop: 5}}>
          <NumericInput
            onChange={(qty) => {
              let totalItemCost = menuItem.price * qty;
              console.log({totalItemCost});
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: Constants.COLORS.THEME_ALT,
              paddingVertical: 8,
              marginLeft: 7,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              flex: 1,
            }}>
            <Text style={{color: '#fff'}}>Add </Text>
            <FontAwesomeIcon icon={faCartPlus} style={{color: '#fff'}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
