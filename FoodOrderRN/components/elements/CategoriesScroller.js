import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button, Image,
    Text,
    StatusBar, ImageBackground
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Categories from '../../assets/json/categories'

const CategoriesScroller = ({ navigation }) => {

    var [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(Categories.categories);
    }, [])

    return (
        <View style={{ marginTop: 10 }}>
            <Text>CUISINES</Text>
            <ScrollView horizontal={true}>

                {
                    categories.map(c => {
                        // var url = `../../assets/img/pexels-photo-1049620.jpeg`;
                        // var img = () => require(`../../assets/img/${c.image}`);
                        // console.log(url);
                        return (
                            <TouchableOpacity key={c.id}>
                                <Image
                                    style={styles.imageBackground}
                                    source={{ uri: c.image }}>
                                </Image>

                                <LinearGradient
                                    colors={['#0000', '#0003', '#000c']}
                                    style={styles.linearGradient}>
                                    <Text style={styles.categoryCaption}>
                                        {c.name.toUpperCase()}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )
                    }
                    )
                }


            </ScrollView>
        </View>
    )
};

export default CategoriesScroller;

const styles = StyleSheet.create({
    imageBackground: {
        width: 120,
        height: 100,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },

    linearGradient: {
        height: 100,
        width: 120,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 5,
        position: "absolute"
    },

    categoryCaption: {
        color: '#fff',
        fontSize: 18
    }
})