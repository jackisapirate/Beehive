import React, { Component } from "react";
import {View, Text, LogBox } from 'react-native';
import Nav from './nav/Nav';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Nav></Nav>
      </View>
    );
  }
}
export default App;