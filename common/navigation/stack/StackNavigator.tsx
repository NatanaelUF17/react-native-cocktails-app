// ./navigation/StackNavigator.js
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CocktailDetail from "../../../components/cocktails/with-alcohol/detail/CocktailDetail";
import DrawerMenu from "../drawer/DrawerMenu";

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={DrawerMenu} />
            <Stack.Screen name='CocktailDetail' component={CocktailDetail} />
        </Stack.Navigator>
    );
}