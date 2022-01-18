import React from "react";
import {HeaderMenuButton} from "src/components/HeaderMenuButton";
import {PostList} from "src/components/PostList";
import {DATA} from "src/data";



export const BookedScreen = ({navigation}) => {
    const openPost = (post) => {
        navigation.navigate("PostScreen", {
                postId: post.id,
                date: post.date,
                isBooked: post.booked
            }
        );
    };

    return (
        <PostList data={DATA.filter(x => x.booked)} onOpen={openPost}/>
    );
};


BookedScreen.options = ({navigation, route}) => ({
    title: "Booked",
    headerLeft: () => <HeaderMenuButton navigation={navigation}/>
});