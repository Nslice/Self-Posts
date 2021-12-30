import React from "react";
import {StyleSheet, View, Text, Image, Button, ScrollView, Alert} from "react-native";
import {DATA} from "src/data";
import {Theme} from "src/theme";
import GestureRecognizer from "react-native-swipe-gestures";



export const PostScreen = ({navigation, route}) => {
    const postId = route.params.postId;
    const post = DATA.find(x => x.id === postId);

    const removePost = () => {
        Alert.alert(
            "Delete post",
            "Are you sure?",
            [
                {text: "Cancel", style: "cancel",},
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {}
                }
            ],
            {cancelable: true}
        );
    };

    return (
        <GestureRecognizer onSwipeRight={(state) => navigation.goBack()}>
            <ScrollView style={css.container}>
                <Image style={css.image} source={{uri: post.img}}/>
                <View style={css.textWrap}>
                    <Text style={css.title}>
                        {post.text.repeat(50)}
                    </Text>
                </View>
                <Button title="Delete" color={Theme.DANGER_COLOR} onPress={removePost}/>
            </ScrollView>
        </GestureRecognizer>
    );
};


const css = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    image: {
        width: "100%",
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: "open-sans-regular"
    }
});