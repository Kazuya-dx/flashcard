import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import firebase from "firebase";
import useSetUser from "../../hooks/useSetUser";
import { useNavigation } from "../../hooks/useNavigation";

const Loading = () => {
  const setUser = useSetUser();
  const navigation = useNavigation();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user?.uid);
      }
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
