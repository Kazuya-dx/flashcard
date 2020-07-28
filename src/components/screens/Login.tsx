import React, { useState } from "react";
import { View, Form, Item, Input, Button, Text } from "native-base";
import firebase from "firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (email: string, password: string) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
        alert("success");
        // 登録後のページへ遷移させる
      })
      .catch((error) => alert(error));
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>ログイン</Text>
      </View>

      <Form>
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
          onPress={() => handleLogin(email, password)}
        >
          <Text>ログイン</Text>
        </Button>
      </Form>
    </View>
  );
};

export default Login;
