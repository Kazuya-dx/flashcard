import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector, useDispatch } from "react-redux";
import { changeIsBeginner } from "../store/user";
import { setStudyMode } from "../store/mode";
import Guide from "./Guide";
import Study from "./Study";

const Page1 = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ホーム</Text>
    </View>
  );
};

const Page2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>学習</Text>
    </View>
  );
};

const Page3 = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>プロフィール</Text>
    </View>
  );
};

const Debug = () => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ paddingBottom: 20 }}>デバッグルーム</Text>
      <Button
        title="ビギナーズガイド"
        onPress={() => {
          dispatch(changeIsBeginner({}));
        }}
      />
      <Button
        title="学習を始める"
        onPress={() => {
          dispatch(setStudyMode({}));
        }}
      />
    </View>
  );
};

const Index = () => {
  const Tab = createBottomTabNavigator();
  const isBeginner = useSelector((state: any) => state.user.isBeginner);
  const mode = useSelector((state: any) => state.mode.mode);

  if (isBeginner) {
    return <Guide />;
  } else {
    if (mode === "study") {
      return <Study />;
    } else {
      return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = "";

                if (route.name === "ホーム") {
                  iconName = focused ? "ios-home" : "ios-home";
                } else if (route.name === "プロフィール") {
                  iconName = focused ? "ios-person" : "ios-person";
                } else if (route.name === "デバッグ") {
                  iconName = focused ? "ios-list-box" : "ios-list";
                } else if (route.name === "学習") {
                  iconName = focused ? "ios-school" : "ios-school";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="ホーム" component={Page1} />
            <Tab.Screen name="学習" component={Page2} />
            <Tab.Screen name="デバッグ" component={Debug} />
            <Tab.Screen name="プロフィール" component={Page3} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
  }
};

export default Index;
