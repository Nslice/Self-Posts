import React from "react";
import {StyleSheet, View, Text} from "react-native";



export const AboutScreen = () => {
    return (
        <View style={css.center}>
            <Text>AboutScreen</Text>
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