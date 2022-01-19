import React from "react";
import {Platform, StyleSheet} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {Theme} from "src/theme";
import {BottomTabNavigator} from "./BottomTabNavigator";
import {PostScreen} from "src/screens/PostScreen";



const Stack = createStackNavigator();


export const StackMainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="BottomTab"
                         screenOptions={{
                             headerStyle: Platform.select({android: css.headerAndroid, ios: css.headerIos}),
                             headerTintColor: (Platform.OS === "ios") ? Theme.MAIN_COLOR : "#fff",
                             headerShown: true
                         }}
        >
            <Stack.Screen name="BottomTab"
                          component={BottomTabNavigator}
                          options={{
                              headerShown: false
                          }}
            />
            <Stack.Screen name="PostScreen"
                          component={PostScreen}
                          options={PostScreen.options}
            />
        </Stack.Navigator>
    );
};


const css = StyleSheet.create({
    headerAndroid: {
        backgroundColor: Theme.MAIN_COLOR
    },
    headerIos: {
        backgroundColor: "#fff"
    }
});