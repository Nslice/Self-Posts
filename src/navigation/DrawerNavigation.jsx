import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";
import {Theme} from "src/theme";
import {AboutScreen} from "src/screens/AboutScreen";
import {CreateScreen} from "src/screens/CreateScreen";
import {StackMainNavigator} from "./StackMainNavigator";


const Drawer = createDrawerNavigator();


// TODO: добавить в примеры
export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="PostsTab"
                          screenOptions={{
                              headerShown: false,
                              drawerPosition: "left",
                              drawerActiveTintColor: Theme.MAIN_COLOR,
                              drawerLabelStyle: {
                                  fontFamily: "open-sans-bold"
                              }
                          }}
                          backBehavior="history"
        >
            <Drawer.Screen name="DrawerMainTab"
                           component={StackMainNavigator}
                           options={{
                               drawerLabel: "Posts"
                           }}
            />
            <Drawer.Screen name="DrawerAboutTab"
                           component={AboutScreen}
                           options={{
                               title: "About",
                               drawerLabel: "About",
                               drawerIcon: () => <Ionicons name="ios-star"/>, // TODO: убрать
                               headerShown: true
                           }}
            />
            <Drawer.Screen name="CreateScreen"
                           component={CreateScreen}
                           options={{
                               drawerLabel: "Create",
                               headerShown: true
                           }}
            />
        </Drawer.Navigator>
    );
};