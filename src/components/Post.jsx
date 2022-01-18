import React from "react";
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity} from "react-native";
import moment from "moment";



export const Post = ({data, onOpen}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(data)}>
            <View style={css.post}>
                <ImageBackground style={css.image} source={{uri: data.img}}>
                    <View style={css.textWrap}>
                        <Text style={css.title}>
                            {moment(data.date).format("DD.MM.YYYY")}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};


const css = StyleSheet.create({
    post: {
        marginBottom: 5,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    textWrap: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingVertical: 5,
        alignItems: "center",
        width: "100%"
    },
    title: {
        color: "#fff",
        fontFamily: "open-sans-regular"
    }
});