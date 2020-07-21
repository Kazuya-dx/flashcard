import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { changeIsBeginner } from "../store/user";
import Swiper from "react-native-swiper";

const Guide = () => {
  const dispatch = useDispatch();
  return (
    <Swiper
      loop={false}
      showsButtons={false}
      dotColor="#FFFFFF55"
      activeDotColor="#FFFFFFFF"
    >
      <View style={styles.container1}>
        <Text style={{ color: "#fff", fontSize: 25 }}>
          (アプリ名)へようこそ
        </Text>
      </View>
      <View style={styles.container2}>
        <Text style={{ color: "#fff", fontSize: 25 }}>
          英単語を覚えましょう
        </Text>
      </View>
      <View style={styles.container3}>
        <Text style={{ color: "#fff", fontSize: 25 }}>
          学習するほどコインが貯まります
        </Text>
      </View>
      <View style={styles.container4}>
        <Text style={{ color: "#fff", fontSize: 25 }}>さっそくはじめよう</Text>
        <Button
          title={"はじめる"}
          onPress={() => {
            dispatch(changeIsBeginner(""));
          }}
        />
      </View>
    </Swiper>
  );
};

export default Guide;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#324851",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#86ac41",
    alignItems: "center",
    justifyContent: "center",
  },
  container3: {
    flex: 1,
    backgroundColor: "#34675c",
    alignItems: "center",
    justifyContent: "center",
  },
  container4: {
    flex: 1,
    backgroundColor: "#7da3a1",
    alignItems: "center",
    justifyContent: "center",
  },
});
