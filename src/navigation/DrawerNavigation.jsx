import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {StackMainNavigator} from "./StackMainNavigator";
import {AboutScreen} from "src/screens/AboutScreen";
import {CreateScreen} from "src/screens/CreateScreen";



const Drawer = createDrawerNavigator();


export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="PostsTab"
                          screenOptions={{
                              headerShown: false,
                              drawerPosition: "left"
                          }}
                          backBehavior="history"
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
                               title: "About",
                               headerShown: true
                           }}
            />
            <Drawer.Screen name="CreateScreen"
                           component={CreateScreen}
                           options={{
                               title: "Create",
                               headerShown: true
                           }}
            />
        </Drawer.Navigator>
    );
};