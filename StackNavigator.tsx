// StackNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import screens from "./screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={"홈"}
        >
            <Stack.Screen name={"홈"} component={DrawerNavigator} />
        </Stack.Navigator>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName={"메인"}
            screenOptions={{
                headerShown: true,
            }}
        >
            <Drawer.Screen name={"메인"} component={screens.메인} />
        </Drawer.Navigator>
    );
};

export { StackNavigator };
