
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    StatusBar, ImageBackground
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from '../../assets/js/constants';


const DealsBox = ({ navigation }) => {
    return (
        <ImageBackground source={require('../../assets/img/pexels-photo-326278.jpeg')} style={styles.image}>
            <Text style={{ fontSize: 35, color: "#fff" }}>UPTO 50% OFF</Text>
            <Text style={{ fontSize: 15, color: "#fff" }}>Use code HUNGRY at checkout</Text>
        </ImageBackground>
    );
}

export default DealsBox;

const styles = StyleSheet.create({
    home: {
        fontSize: 18
    },
    addr: {
        fontSize: 12
    },
    image: {
        height: 120,
        borderRadius: 10,
        resizeMode: "cover",
        justifyContent: "center",
        padding: 10
    },
})