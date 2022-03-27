import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from "react-native";
import React from "react";
import Start from "./nav/Start";

const { width, height } = Dimensions.get("window");
export default function App() {
  const state = { isShowLauncher: true };
  console.log(state.isShowLauncher);
  return (
    <View style={styles.container}>
      <Start />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
