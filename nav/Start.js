import { StyleSheet, View, Dimensions } from "react-native";
import React, { Component } from "react";
import Welcome from "./Welcome";
import Login from "./Login";

const { width, height } = Dimensions.get("window");
export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowLauncher: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isShowLauncher: false,
      });
    }, 2000);
  }

  componentWillUnmount() {
    this.setState = () => false;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isShowLauncher ? <Welcome /> : <Login />}

        {/* <Login /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
