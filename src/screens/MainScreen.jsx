import React from "react";
import {StyleSheet, View, Text, Button, FlatList} from "react-native";
import {Post} from "src/components/Post";
import {DATA} from "src/data";



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


const css = StyleSheet.create({
    wrapper: {
        paddingTop: 3,
        paddingLeft: 10

    },
});