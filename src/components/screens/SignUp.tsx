import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsersInfo } from "../../store/user";
import { View, Form, Item, Input, Button, Text } from "native-base";
import { useNavigation } from "../../hooks/useNavigation";
import firebase from "firebase";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSignUp = (email: string, password: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        setUsername("");
        setEmail("");
        setPassword("");
        alert("success");
        // 登録後のページへ遷移させる
      })
      .catch((error) => alert(error));
  };
  const handleGuestLogin = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then((user) => {
        alert("ログインしました");
        dispatch(
          setUsersInfo({ uid: user.user?.uid, name: "ゲスト", isGuest: true })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>アカウント登録</Text>
      </View>

      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize={"none"}
            autoCorrect={false}
            onChangeText={(username) => setUsername(username)}
          />
        </Item>
        <Item>
          <Input
            placeholder="Email"
            autoCapitalize={"none"}
            autoCorrect={false}
            onChangeText={(email) => setEmail(email)}
          />
        </Item>
        <Item>
          <Input
            placeholder="Password"
            autoCapitalize={"none"}
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
          />
        </Item>
        <Button
          block
          style={{ marginBottom: 30 }}
          onPress={() => handleSignUp(email, password)}
        >
          <Text>SignUp</Text>
        </Button>
        <Button
          block
          style={{
            backgroundColor: "#FFF",
            marginBottom: 30,
            borderWidth: 1,
            borderColor: "#333",
          }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "#333" }}>ログイン</Text>
        </Button>
        <Button
          block
          style={{ backgroundColor: "#FFF" }}
          onPress={() => handleGuestLogin()}
        >
          <Text style={{ color: "#333" }}>ゲストでログイン</Text>
        </Button>
      </Form>
    </View>
  );
};

export default SignUp;
