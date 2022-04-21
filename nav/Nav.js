import {
    StyleSheet,
    View,
    Dimensions,
    Text,
  } from "react-native";
  import React from "react";
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import UserInfo from "../pages/account/userinfo";
  import Start from "../nav/Start";
  
  function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  const Stack = createNativeStackNavigator();
  export default function Nav() {
    const state = { isShowLauncher: true };
    console.log(state.isShowLauncher);
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Start" >
          <Stack.Screen name="Start" component={Start} navigation = {Start}></Stack.Screen>
          <Stack.Screen name="UserInfo" component={UserInfo} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  