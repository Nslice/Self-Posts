import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {StackMainNavigator} from "./StackMainNavigator";
import {AboutScreen} from "../screens/AboutScreen";



const Drawer = createDrawerNavigator();


export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="PostsTab"
                          screenOptions={{
                              headerShown: false,
                              drawerPosition: "left"
                          }}
        >
            <Drawer.Screen name="DrawerMainTab"
                           component={StackMainNavigator}
                           options={{
                               title: "Posts"
                           }}
            />
            <Drawer.Screen name="DrawerAboutTab"
                           component={AboutScreen}
                           options={{
                               headerShown: true
                           }}
            />
        </Drawer.Navigator>
    );
};