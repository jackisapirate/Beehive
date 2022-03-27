import {
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, {Component} from "react";


const { width, height } = Dimensions.get("window");
export default class Welcome extends Component{
  render (){
      return(
        <View style={styles.container}>
        <View style={styles.wrap}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.avatar}
          ></Image>
        </View>
      </View>
      )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: "#5F9E40",
    alignItems: "center",
    flexDirection: "column",
    // justifyContent: "center",
  },
  wrap: {
    width: "100%",
    height: height,
    // backgroundColor: "dodgerblue",
    backgroundColor: "#5F9E40",
    marginTop: "5.5%",
  },
  avatar: {
    width: "100%",
    height: 120,
    marginTop: "40%",
    marginBottom: 50,
  },
});
