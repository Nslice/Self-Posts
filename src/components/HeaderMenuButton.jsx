import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "src/components/AppHeaderIcon";



export const HeaderMenuButton = ({navigation}) => {
    return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Menu"
                  iconName="ios-menu"
                  onPress={() => navigation.openDrawer()}
            />
        </HeaderButtons>
    );
};