import React from "react";
import {StyleSheet, View, Text, Image, Button, ScrollView, Alert} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import moment from "moment";
import {Theme} from "src/theme";
import {AppHeaderIcon} from "src/components/AppHeaderIcon";
import {DATA} from "src/data";



export const PostScreen = ({route}) => {
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
        <ScrollView style={css.container}>
            <Image style={css.image} source={{uri: post.img}}/>
            <View style={css.textWrap}>
                <Text style={css.title}>
                    {post.text.repeat(50)} /* TODO: убрать */
                </Text>
            </View>
            <View style={css.button}>
                <Button title="Delete" color={Theme.DANGER_COLOR} onPress={removePost}/>
            </View>
        </ScrollView>
    );
};


PostScreen.options = ({route}) => ({
    title: `Post on ${moment(route.params.date).format("DD.MM.YYYY")}`,
    gestureEnabled: true,
    headerRight: (props) => <HeaderRight isBooked={route.params.isBooked}/>
});

const HeaderRight = ({isBooked}) => {
    return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take Photo"
                  iconName={isBooked ? "ios-star" :"ios-star-outline"}
                  onPress={() => console.log("booked start")}
            />
        </HeaderButtons>
    );
};


const css = StyleSheet.create({
    container: {
        marginBottom: 5,
    },
    image: {
        width: "100%",
        height: 200
    },
    textWrap: {
        paddingVertical: 5,
        paddingLeft: 10,
    },
    title: {
        fontFamily: "open-sans-regular"
    },
    button: {
       marginHorizontal: 3
    }
});