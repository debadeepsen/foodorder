import * as React from 'react';
import { Button, View, Text, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/screens/HomeScreen';
import HeaderComp from './components/elements/HeaderComp';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from './assets/js/constants';

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={Constants.COLORS.BACKGROUND} barStyle="dark-content" />
            <HeaderComp />
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}