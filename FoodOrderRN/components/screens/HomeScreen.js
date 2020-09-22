
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


const HomeScreen = ({ navigation }) => {
    return (
        <View style={{backgroundColor: Constants.COLORS.BACKGROUND, height:'100%', padding:10 }}>
            <DealsBox />
            <CategoriesScroller />
        </View>
    );
}

export default HomeScreen;