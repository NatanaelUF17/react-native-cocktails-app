// ./navigation/StackNavigator.js
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../../Home";
import CocktailDetail from "../../../components/cocktails/detail/CocktailDetail";

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='CocktailDetail' component={CocktailDetail} />
        </Stack.Navigator>
    );
}