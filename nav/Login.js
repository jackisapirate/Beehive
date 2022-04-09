import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { Component } from "react";
import { Input } from "react-native-elements";
import request from "../utils/request";
import { ACCOUNT_LOGIN } from "../utils/pathMap";
import validator from "../utils/validator"

const { width, height } = Dimensions.get("window");
export default class Login extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    emailF: "",
    passwordR: "",
    passwordConfirm: "",
    showForgot: false,
    showLogin: true,
    showRegister: false,
    emailValid: true,
    passwordValid: true,
    emailAlarm: "",
    passwordAlarm: "",
  };
  // login input
  usernameChange = (username) => {
    this.setState({ username });
    console.log(username);
  };
  emailChange = (emailChange) => {
    this.setState({ email: emailChange });
  };
  passwordRChange = (passwordR) => {
    this.setState({ passwordR: passwordR });
  };
  passwordConfirmChange = (passwordConfirm) => {
    this.setState({ passwordConfirm: passwordConfirm });
  };


  toggleDialog1 = () => {
    console.log("Forgot");
  };
  loginFunc = async () => {
    console.log("click login button");
    const { username } = this.state;
    // const res = await request.post(ACCOUNT_LOGIN, {
    //   username: "example@gmail.com"
    // });
    // console.log(res);
    console.log(this.state.username);
  };
  registerFunc = async () => {
    console.log("click register button");
    this.emailSubmitEditing();
    this.passwordSubmitEditing();
    // const res = await request.post(ACCOUNT_LOGIN, {
    //   username: "example@gmail.com"
    // });
    // console.log(res);
  }
  resetFunc = async () => {
    console.log("click reset button");
    // const res = await request.post(ACCOUNT_LOGIN, {
    //   username: "example@gmail.com"
    // });
    // console.log(res);
  };
  changeShowForgot = () => {
    // this.state.showForgot = !this.state.showForgot;
    this.setState({ showForgot: true, showLogin: false, showRegister: false });
    console.log("showForgot: " + this.state.showForgot);
    console.log("showLogin: " + this.state.showLogin);
    console.log("showRegister: " + this.state.showRegister);
  };
  changeShowLogin = () => {
    this.setState({ showLogin: true, showForgot: false, showRegister: false });
    console.log("showForgot: " + this.state.showForgot);
    console.log("showLogin: " + this.state.showLogin);
    console.log("showRegister: " + this.state.showRegister);
  };
  changeShowRegister = () => {
    this.setState({ showRegister: true, showForgot: false, showLogin: false });
    console.log("showForgot: " + this.state.showForgot);
    console.log("showLogin: " + this.state.showLogin);
    console.log("showRegister: " + this.state.showRegister);
    this.setState({ emailValid: true });
    this.setState({ passwordValid: true });
  };
  emailSubmitEditing = () => {
    /*
    validate the email
    */
   const{email} = this.state;
   emailValid = validator.validatorEmail(email);
   if(email.length==0){
    emailValid = false;
    this.setState({emailAlarm: "Email format can not be blank!"})
   } else{
    this.setState({emailAlarm: "Email format is incorrect!"})
   }
   this.setState({ emailValid });
   console.log(emailValid);
   return;
  };
  passwordSubmitEditing = () => {
    /*
    validate two password is match or not
    */
   const{passwordR, passwordConfirm} = this.state;
   passwordValid = (passwordR == passwordConfirm);
   if(passwordR.length==0){
    passwordValid = false;
    this.setState({passwordAlarm: "The password can not be blank!"} )
   } else {
    this.setState({passwordAlarm: "The two entered passwords do not match!"} )
   }
   this.setState({ passwordValid });
   console.log(passwordValid);
   return;
  };
  render() {
    const { username, password, passwordR, passwordConfirm, email, emailF, showForgot, showLogin, showRegister, emailValid, passwordValid, emailAlarm, passwordAlarm }=this.state;
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Image
            source={require("../assets/cover.png")}
            style={styles.avatar}
          ></Image>
          {showLogin ? (
            <View>
              <Input
                style={[styles.textInput, styles.username]}
                placeholder="please input username!"
                placeholderTextColor="#ddd"
                underlineColorAndroid="transparent"
                onChangeText={this.usernameChange}
                name="username"
                onSubmitEditing={this.loginFunc}
              />
              <Input
                style={[styles.textInput, styles.password]}
                secureTextEntry={true}
                placeholder="please input password!"
                placeholderTextColor="#ddd"
                underlineColorAndroid="transparent"
                name="password"
              />

              <TouchableOpacity
                style={styles.loginBtn}
                activeOpacity={0.7}
                onPress={this.loginFunc}
              >
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>

              <View style={styles.btns}>
                <TouchableOpacity onPress={this.changeShowForgot}>
                  <Text style={styles.textSelection}>Forgot Password?</Text>
                  {/* <Button
                    title="Open Simple Dialog"
                    onPress={this.toggleDialog1}
                    buttonStyle={styles.button}
                  /> */}
                </TouchableOpacity>
                <TouchableOpacity onPress={this.changeShowRegister}>
                  <Text style={styles.textSelection}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <></>
          )}

{showRegister ? (
            <View>
              <Input
                style={[styles.textInput, styles.username]}
                placeholder="please input Email"
                placeholderTextColor="#ddd"
                underlineColorAndroid="transparent"
                onChangeText={this.emailChange}
                name="email"
                onSubmitEditing={this.emailSubmitEditing}
                errorMessage={emailValid ? "" : emailAlarm}
              />
              <Input
                style={[styles.textInput, styles.password]}
                secureTextEntry={true}
                placeholder="please input password!"
                placeholderTextColor="#ddd"
                underlineColorAndroid="transparent"
                name="passwordR"
                onChangeText={this.passwordRChange}
              />
              <Input
                style={[styles.textInput, styles.password]}
                secureTextEntry={true}
                placeholder="please input password again!"
                placeholderTextColor="#ddd"
                underlineColorAndroid="transparent"
                name="passwordConfirm"
                onChangeText={this.passwordConfirmChange}
                onSubmitEditing={this.passwordSubmitEditing}
                errorMessage={passwordValid ? "" : passwordAlarm}
              />
              <TouchableOpacity
                style={styles.loginBtn}
                activeOpacity={0.7}
                onPress={this.registerFunc}
              >
                <Text style={styles.loginText}>Register</Text>
              </TouchableOpacity>

              <View style={styles.btns}>
                <TouchableOpacity onPress={this.changeShowForgot}>
                  <Text style={styles.textSelection}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.changeShowLogin}>
                  <Text style={styles.textSelection}>Login in</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <></>
          )} 
 
 
 
 
 {showForgot ? (
            <View>
              <Input
                style={[styles.textInput, styles.username]}
                placeholder="please input Email"
                placeholderTextColor="#ddd"
                underlineColorAndroid="transparent"
                // onChangeText={this.usernameChange}
                name="emailF"
                onSubmitEditing={this.loginFunc}
              />
              {/* <Input
                style={[styles.textInput, styles.password]}
                secureTextEntry={true}
                placeholder="please input password!"
                placeholderTextColor="#ddd"
                underlineColorAndroid="transparent"
              /> */}

              {/* <Button
                  title="Open Simple Dialog"
                  onPress={this.toggleDialog1}
                  buttonStyle={styles.button}
                /> */}
              <TouchableOpacity
                style={styles.loginBtnReset}
                activeOpacity={0.7}
                onPress={this.resetFunc}
              >
                <Text style={styles.loginText}>Reset</Text>
              </TouchableOpacity>

              <View style={styles.btns}>
                <TouchableOpacity onPress={this.changeShowLogin}>
                  <Text style={styles.textSelection}>Login in</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.changeShowRegister}>
                  <Text style={styles.textSelection}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <></>
          )}


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
  loginBtnReset: {
    width: "100%",
    height: 30,
    backgroundColor: "red",
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
