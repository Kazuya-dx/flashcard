import React, { useEffect } from "react";
import Home from "../Home";
import SignUp from "../screens/SignUp";
import { ActivityIndicator, View, Text } from "react-native";
import firebase from "firebase";
import { useNavigation } from "../../hooks/useNavigation";

const Loading = () => {
  const navigation = useNavigation();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? "Home" : "SignUp");
    });
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
};

export default Loading;
