import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from "react-native";
import React from "react";
import Start from "./nav/Start";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "mobx-react";
import RootStore from "./mobx";

const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get("window");
export default function App() {
  const state = { isShowLauncher: true };
  console.log(state.isShowLauncher);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Start" >
        <Stack.Screen name="Start" component={Start}></Stack.Screen>
      </Stack.Navigator>
    {/* <View style={styles.container}>
      <Start />
    </View> */}
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
