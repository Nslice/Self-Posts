import React from "react";
import {StyleSheet, Platform} from "react-native";
import {Ionicons} from "@expo/vector-icons";

import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

import {Theme} from "src/theme";
import {MainScreen} from "src/screens/MainScreen";
import {PostScreen} from "src/screens/PostScreen";
import {BookedScreen} from "src/screens/BookedScreen";
import {AboutScreen} from "src/screens/AboutScreen";


const Stack = createStackNavigator();

const PostNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="MainScreen"
                         screenOptions={navigatorScreenOptions}
        >
            <Stack.Screen name="MainScreen"
                          component={MainScreen}
                          options={MainScreen.options}
            />
            <Stack.Screen name="PostScreen"
                          component={PostScreen}
                          options={PostScreen.options}
            />
        </Stack.Navigator>
    );
};


const BookedNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="BookedScreen"
                         screenOptions={navigatorScreenOptions}>
            <Stack.Screen name="BookedScreen"
                          component={BookedScreen}
                          options={BookedScreen.options}
            />
            <Stack.Screen name="PostScreen"
                          component={PostScreen}
                          options={PostScreen.options}
            />
        </Stack.Navigator>
    );
};


const BottomTab = (Platform.OS === "android")
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <BottomTab.Navigator initialRouteName="PostNav"
                             screenOptions={{
                                 tabBarActiveTintColor: (Platform.OS === "ios") ? Theme.MAIN_COLOR : "#fff",
                                 headerShown: false
                             }}
                             barStyle={Platform.select({android: css.headerAndroid, ios: css.headerIos})}
                             shifting={true}
        >
            <BottomTab.Screen name="PostNav"
                              component={PostNavigator}
                              options={{
                                  tabBarLabel: "All",
                                  tabBarIcon: info => {
                                      return <Ionicons name="ios-albums" size={25} color={info.color}/>
                                  }
                              }}
            />
            <BottomTab.Screen name="BookedTab"
                              component={BookedNavigator}
                              options={{
                                  tabBarLabel: "Booked",
                                  tabBarIcon: info => {
                                      return <Ionicons name="ios-star" size={25} color={info.color}/>
                                  }
                              }}
            />
        </BottomTab.Navigator>
    );
};


const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="PostsTab"
                          screenOptions={{
                              headerShown: false,
                              drawerPosition: "left"
                          }}
        >
            <Drawer.Screen name={"PostsTab"} component={BottomNavigator}/>
            <Drawer.Screen name={"About"} component={AboutScreen}/>
        </Drawer.Navigator>
    );
};


export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <MainNavigator/>
        </NavigationContainer>
    );
};


const css = StyleSheet.create({
    headerAndroid: {
        backgroundColor: Theme.MAIN_COLOR
    },
    headerIos: {
        backgroundColor: "#fff",
    }
});

const navigatorScreenOptions = {
    headerStyle: Platform.select({android: css.headerAndroid, ios: css.headerIos}),
    headerTintColor: (Platform.OS === "ios") ? Theme.MAIN_COLOR : "#fff",
};