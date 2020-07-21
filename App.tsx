import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store/index";
import Index from "./src/components/Index";

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
