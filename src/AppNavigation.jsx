import {StyleSheet, Platform, Button, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import moment from "moment";
import {MainScreen} from "src/screens/MainScreen";
import {PostScreen} from "src/screens/PostScreen";
import {AboutScreen} from "src/screens/AboutScreen";
import {Theme} from "src/theme";
import React from "react";
import {AntDesign} from "@expo/vector-icons";



const Stack = createNativeStackNavigator();


export const AppNavigation = () => {




    return (
        <NavigationContainer>
            <ConfiguredStackNavigator>
                <Stack.Screen name="Main"
                              component={MainScreen}
                              options={MainScreen.options}/>
                <Stack.Screen name="Post"
                              component={PostScreen}
                              options={PostScreen.options}
                />
                <Stack.Screen name="About" component={AboutScreen}/>
            </ConfiguredStackNavigator>
        </NavigationContainer>
    );
};


const ConfiguredStackNavigator = ({children}) => {
    return (
        <Stack.Navigator initialRouteName="Main"
                         screenOptions={{
                             headerStyle: Platform.select({android: css.headerAndroid, ios: css.headerIos}),
                             headerTintColor: (Platform.OS === "ios") ? Theme.MAIN_COLOR : "#fff"
                         }}>
            {children}
        </Stack.Navigator>
    );
};


const css = StyleSheet.create({
    headerAndroid: {
        backgroundColor: Theme.MAIN_COLOR,
    },
    headerIos: {
        backgroundColor: "#fff",
    }
});