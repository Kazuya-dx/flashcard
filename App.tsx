import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store/index";
import AuthenticationNavigator from "./src/navigations/AuthenticationNavigator";
import firebase from "firebase";
import firebaseConfig from "./config/firebase";

firebase.initializeApp(firebaseConfig);

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthenticationNavigator />
      </Provider>
    );
  }
}
