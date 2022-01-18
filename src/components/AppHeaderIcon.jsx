import React from "react";
import {Platform} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {HeaderButton} from "react-navigation-header-buttons";
import {Theme} from "src/theme";



export const AppHeaderIcon = (props) => {
    return (
        <HeaderButton iconSize={24}
                      IconComponent={Ionicons}
                      color={(Platform.OS === "ios") ? Theme.MAIN_COLOR : "#fff"}
                      {...props}
        />
    );
};