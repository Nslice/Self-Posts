import React from "react";
import {StyleSheet, View, Text} from "react-native";



export const CreateScreen = () => {
    return (
        <View style={css.center}>
            <Text>CreateScreen</Text>
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