import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {DrawerNavigator} from "src/navigation/DrawerNavigation";



export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    );
};