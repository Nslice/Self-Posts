import React from "react";
import {Platform, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {Theme} from "src/theme";
import {MainScreen} from "src/screens/MainScreen";
import {BookedScreen} from "src/screens/BookedScreen";



const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();


/**
 * Material Bottom Tabs для андройда
 * @return {JSX.Element}
 */
const MaterialBottomTabNavigator = () => {
    return (
        <MaterialBottomTab.Navigator initialRouteName="MainScreenNavigator"
                                     barStyle={{backgroundColor: Theme.MAIN_COLOR}}
                                     shifting={true}
        >
            <MaterialBottomTab.Screen name="MainScreenNavigator"
                                      component={MainScreenNavigator}
                                      options={{
                                          tabBarLabel: "All",
                                          tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.color}/>
                                      }}
            />
            <MaterialBottomTab.Screen name="BookedScreenNavigator"
                                      component={BookedScreenNavigator}
                                      options={{
                                          tabBarLabel: "Booked",
                                          tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.color}/>
                                      }}
            />
        </MaterialBottomTab.Navigator>
    );
};


/**
 * Bottom Tabs для ios
 * @return {JSX.Element}
 */
const SimpleBottomTabNavigator = () => {
    return (
        <BottomTab.Navigator initialRouteName="MainScreenNavigator"
                             tabBarStyle={{backgroundColor: "#fff"}}
        >
            <BottomTab.Screen name="MainScreenNavigator"
                              component={MainScreenNavigator}
                              options={{
                                  tabBarLabel: "All",
                                  tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.color}/>
                              }}
            />
            <BottomTab.Screen name="BookedScreenNavigator"
                              component={BookedScreenNavigator}
                              options={{
                                  tabBarLabel: "Booked",
                                  tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.color}/>
                              }}
            />
        </BottomTab.Navigator>
    );
};


/*
 Создал навигатор для одного экрана, чтобы была возможность настроить хедер.
 Этот скрин используется в BottomNavigator в котором нет возможности настроить хедер
 */
const MainScreenNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="MainScreen"
                         screenOptions={navigatorScreenOptions}
        >
            <Stack.Screen name="MainScreen"
                          component={MainScreen}
                          options={MainScreen.options}
            />
        </Stack.Navigator>
    );
};

const BookedScreenNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="BookedScreen"
                         screenOptions={navigatorScreenOptions}
        >
            <Stack.Screen name="BookedScreen"
                          component={BookedScreen}
                          options={BookedScreen.options}
            />
        </Stack.Navigator>
    );
};

const navigatorScreenOptions = () => ({
    headerStyle: Platform.select({android: css.headerAndroid, ios: css.headerIos}),
    headerTintColor: (Platform.OS === "ios") ? Theme.MAIN_COLOR : "#fff",
    headerShown: true
});

const css = StyleSheet.create({
    headerAndroid: {
        backgroundColor: Theme.MAIN_COLOR
    },
    headerIos: {
        backgroundColor: "#fff"
    }
});


/**
 * @type {React.ComponentType<any>}
 */
export const BottomTabNavigator = Platform.select({
    android: MaterialBottomTabNavigator,
    ios: SimpleBottomTabNavigator
});