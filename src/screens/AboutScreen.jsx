import React from "react";
import {StyleSheet, View, Text} from "react-native";



export const AboutScreen = () => {
    return (
        <View style={css.center}>
            <Text>Приложение для заметок</Text>
            <Text>Версия приложения <Text style={css.version}>1.0.0</Text></Text>
        </View>
    );
};


const css = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    version: {
        fontFamily: "open-sans-bold"
    }
});