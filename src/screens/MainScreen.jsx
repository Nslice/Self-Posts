import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "src/components/AppHeaderIcon";
import {HeaderMenuButton} from "src/components/HeaderMenuButton";
import {PostList} from "src/components/PostList";
import {DATA} from "src/data";



export const MainScreen = ({navigation}) => {
    const openPost = (post) => {
        navigation.navigate("PostScreen", {
                postId: post.id,
                date: post.date,
                isBooked: post.booked
            }
        );
    };

    return (
        <PostList data={DATA} onOpen={openPost}/>
    );
};


MainScreen.options = ({navigation, route}) => ({
    title: "My Posts",
    headerLeft: (props) => <HeaderMenuButton navigation={navigation}/>,
    headerRight: (props) => <HeaderRight/>
});

const HeaderRight = () => {
    return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take Photo"
                  iconName="ios-camera"
                  onPress={() => {
                      console.log("photo Header Button");
                  }}
            />
        </HeaderButtons>
    );
};