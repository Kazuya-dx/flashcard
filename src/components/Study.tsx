import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import Swiper from "react-native-swiper";
import { setModalVisible } from "../store/modal";
import { useDispatch } from "react-redux";
import * as Speech from "expo-speech";
import mockwords from "../mock/words.json";
import Result from "./Result";

const Study = () => {
  const dispatch = useDispatch();
  const [randomkey, setRandomkey] = useState(0);
  const [isResult, setIsResult] = useState(false);
  const [words, setWords] = useState(mockwords);
  const [no, setNo] = useState(1);

  useEffect(() => {
    Speech.stop();
    Speech.speak(words[no - 1].en, { rate: 0.7 });
  }, [no]);

  if (isResult) {
    return <Result />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f3f3f3",
      }}
    >
      <View
        style={{
          flex: 0.2,
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontSize: 20 }}>
          {no} / {words.length}
        </Text>
      </View>
      <Swiper key={randomkey} style={styles.wrapper} height={450} loop={false}>
        <View
          style={{
            flex: 1,
            paddingTop: 150,
            alignItems: "center",
            backgroundColor: "#FFF",
          }}
        >
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {words[no - 1].en}
          </Text>
          <View style={{ alignItems: "center", paddingTop: 60 }}>
            <Text style={{ color: "#333" }}>音声</Text>
            <Ionicons
              name="ios-play-circle"
              size={20}
              color="#333"
              onPress={() => {
                Speech.stop();
                Speech.speak(words[no - 1].en, { rate: 0.7, onDone: () => {} });
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 160,
            alignItems: "center",
            backgroundColor: "#FFF",
          }}
        >
          <Text style={{ fontSize: 35, fontWeight: "bold", color: "#333" }}>
            {words[no - 1].jp}
          </Text>
        </View>
      </Swiper>
      <View style={{ height: 400 }}>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              height: 50,
              width: "25%",
              backgroundColor: "#614BF2",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              Speech.stop();
              if (no < words.length) {
                LayoutAnimation.easeInEaseOut();
                setRandomkey(Math.random);
                setNo(no + 1);
              } else {
                setIsResult(true);
              }
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
              余裕
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              height: 50,
              width: "25%",
              backgroundColor: "#F2B705",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              Speech.stop();
              if (no < words.length) {
                LayoutAnimation.easeInEaseOut();
                setRandomkey(Math.random);
                setNo(no + 1);
              } else {
                setIsResult(true);
              }
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
              微妙
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              height: 50,
              width: "25%",
              backgroundColor: "#BF0404",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              Speech.stop();
              if (no < words.length) {
                LayoutAnimation.easeInEaseOut();
                setRandomkey(Math.random);
                setNo(no + 1);
              } else {
                setIsResult(true);
              }
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>
              わからない
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          title="戻る"
          onPress={() => {
            dispatch(setModalVisible({}));
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
};

export default Study;
