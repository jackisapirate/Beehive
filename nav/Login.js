import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { Button, Input } from "@rneui/themed";
import request from "../utils/request";
import { ACCOUNT_LOGIN } from "../utils/pathMap";

const { width, height } = Dimensions.get("window");
export default class Login extends Component {
  state = {
    username: "example@gmail.com",
    password: "123456",
  }
  // login input
  usernameChange = (username) => {
    this.setState({username});
    console.log(username);
  }
  loginFunc = async() => {
    console.log("click login button");
    const{username}=this.state;
    // const res = await request.post(ACCOUNT_LOGIN, {
    //   username: "example@gmail.com"
    // });
    // console.log(res);
    console.log(this.state.username);
  };


  render() {
    const{username, password} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Image
            source={require("../assets/cover.png")}
            style={styles.avatar}
          ></Image>

          <Input
            style={[styles.textInput, styles.username]}
            placeholder="please input username!"
            placeholderTextColor="#ddd"
            underlineColorAndroid="transparent"
            onChangeText={this.usernameChange}
            value={username}
            onSubmitEditing={this.loginFunc}
          />
          <Input
            style={[styles.textInput, styles.password]}
            secureTextEntry={true}
            placeholder="please input password!"
            placeholderTextColor="#ddd"
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity style={styles.loginBtn} activeOpacity={0.7} onPress={this.loginFunc}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.btns}>
            <TouchableOpacity>
              <Text style={styles.textSelection}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textSelection}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          {/* <View>
            <Button title="Hello World" />
          </View>
          <View>
            <Input leftIcon={{type: 'font-awesome', name: 'chevron-left'}} />
          </View> */}
        </View>
      </View>
    );
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
    width: "80%",
    height: height,
    // backgroundColor: "dodgerblue",
    backgroundColor: "#5F9E40",
    marginTop: "5.5%",
  },
  avatar: {
    width: "100%",
    height: 120,
    marginTop: 50,
    marginBottom: 50,
  },
  textInput: {
    width: "100%",
    backgroundColor: "#76a5af",
    height: 40,
    paddingLeft: 10,
    marginBottom: "8%",
  },
  username: {},
  password: {},
  loginBtn: {
    width: "100%",
    height: 30,
    backgroundColor: "skyblue",
    borderRadius: 4,
    // marginTop: 20,
  },
  loginText: {
    textAlign: "center",
    lineHeight: 30,
    color: "#fff",
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  textSelection: {
    color: "#fff",
  },
});
