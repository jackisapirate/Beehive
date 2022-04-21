import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import SvgUri from "react-native-svg-uri";
import { male, female } from "../../../assets/fonts/iconSvg";
import { Input } from "react-native-elements";
import DatePicker from "react-native-datepicker";

const { width, height } = Dimensions.get("window");

export default class Index extends Component {
  state = {
    nickname: "",
    gender: "male",
    birthday: "",
  };
  chooseGender = (gender) => {
    this.setState({ gender });
  };
  render() {
    const { gender, nickname, birthday } = this.state;
    const dateNow = new Date();
    const currentDate = `${dateNow.getFullYear()} + "-" + ${dateNow.getMonth()} + 1 + "-" + ${dateNow.getDate()}`;
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text style={styles.text}>Userinfo Page</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Fill in my information</Text>
          </View>
          <View>
            <View style={{ marginTop: 20 }}>
              <View
                style={{
                  width: "60%",
                  flexDirection: "row",
                  alignSelf: "center",
                  //   backgroundColor: "blue",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: "#eee",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: gender === "male" ? "#aaa" : "#eee",
                  }}
                  onPress={this.chooseGender.bind(this, "male")}
                >
                  <SvgUri svgXmlData={male} width="50" height="50" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.chooseGender.bind(this, "female")}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: "#eee",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: gender === "female" ? "#aaa" : "#eee",
                  }}
                >
                  <SvgUri svgXmlData={female} width="50" height="50" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Input
              value={nickname}
              placeholder="Input your nickname"
              onchangeText={(nickname) => this.setState({ nickname })}
            />
          </View>
          <View>
            <DatePicker
              androidMode="spinner"
              style={{ width: "100%" }}
              date={birthday}
              mode="date"
              placeholder="Select your Birghday"
              format="YYYY-MM-DD"
              minDate="1900-01-01"
              maxDate={currentDate}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  display: "none",
                },
                dateInput: {
                  marginLeft: 10,
                  borderWidth: 0,
                  borderBottomWidth: 1.1,
                  alignItems: "flex-start",
                  paddingLeft: 3,
                },
                placeholderText:{
                    fontSize: 18,
                    color: "#999",
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(birthday) => {
                this.setState({ birthday });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#5F9E40",
    alignItems: "center",
    flexDirection: "column",
  },
  wrap: {
    width: "70%",
    height: height,
    // backgroundColor: "#5F9E40",
    marginTop: "15.5%",
    alignSelf: "center",
  },
  title: {
    alignSelf: "center",
  },
  text: {
    fontSize: 24,
    color: "#687",
    fontWeight: "bold",
  },
});
