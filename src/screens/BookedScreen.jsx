import React from "react";
import {StyleSheet, View, Text} from "react-native";



export const BookedScreen = () => {
    return (
        <View style={css.center}>
            <Text>BookedScreen</Text>
        </View>
    );
};


const css = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});