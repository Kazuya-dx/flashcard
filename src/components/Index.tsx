import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector, useDispatch } from "react-redux";
import { changeIsBeginner } from "../store/user";
import { setModalVisible } from "../store/modal";
import Guide from "./Guide";
import Learning from "./Learning";
import Profile from "./Profile";

const Page2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>コミュニティ</Text>
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
          dispatch(setModalVisible({}));
        }}
      />
    </View>
  );
};

const Index = () => {
  const Tab = createBottomTabNavigator();
  const isBeginner = useSelector((state: any) => state.user.isBeginner);

  if (isBeginner) {
    return <Guide />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = "";

              if (route.name === "コミュニティ") {
                iconName = focused ? "ios-people" : "ios-people";
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
          <Tab.Screen name="学習" component={Learning} />
          <Tab.Screen name="コミュニティ" component={Page2} />
          <Tab.Screen name="デバッグ" component={Debug} />
          <Tab.Screen name="プロフィール" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

export default Index;
