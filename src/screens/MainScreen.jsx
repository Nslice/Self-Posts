import React from "react";
import {StyleSheet, View, Text, Button, FlatList, Platform} from "react-native";
import {Post} from "src/components/Post";
import { Ionicons } from "@expo/vector-icons";
import {DATA} from "src/data";
import {AntDesign} from "@expo/vector-icons";
import {HeaderButton, HeaderButtons, Item} from "react-navigation-header-buttons";
import {Theme} from "src/theme";



export const MainScreen = ({navigation}) => {
    const openPost = (post) => {
        console.log("post", post);
        navigation.navigate("Post", {postId: post.id, date: post.date});
    };


    return (
        <View style={css.wrapper}>
            <FlatList data={DATA}
                      keyExtractor={x => x.id}
                      renderItem={x => <Post data={x.item} onOpen={openPost}/>}/>
        </View>
    );
};


MainScreen.options = () => ({
    title: "My Blog",
    headerRight:  headerRight
});


const onPresHandler = () => {

}

const headerRight = () => {
    return (
        <Buttons/>
    );
}

const Buttons = () => {
    return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="TakePhoto"/>
        </HeaderButtons>
    );
}

const AppHeaderIcon = (props) => {
    return (
        <HeaderButton iconSize={24}
                      IconComponent={Ionicons}
                      color="red"
                      {...props}/>

    );
};




const css = StyleSheet.create({
    wrapper: {
        paddingTop: 3,
        paddingLeft: 10
    },
});