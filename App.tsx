// Import modules
import React from "react";
import { StyleSheet, View } from "react-native";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";

import { NavigationContainer } from "@react-navigation/native";

import { StackNavigator } from "./StackNavigator";

const client = new QueryClient();

const App: React.FC = () => (
    <View style={styles.root}>
        <QueryClientProvider client={client}>
            <RecoilRoot>
                <NavigationContainer
                    theme={{
                        //@ts-ignore
                        colors: { background: "white" },
                    }}
                >
                    <StackNavigator />
                </NavigationContainer>
            </RecoilRoot>
        </QueryClientProvider>
    </View>
);

const styles = StyleSheet.create({
    root: { width: "100%", height: "100%", position: "relative" },
});

export default App;
