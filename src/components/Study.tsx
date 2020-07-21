import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import { setTopMode } from "../store/mode";
import { useDispatch } from "react-redux";
import * as Speech from "expo-speech";
import mockwords from "../mock/words.json";

const Study = () => {
  const dispatch = useDispatch();
  const [words, setWords] = useState(mockwords);
  const [no, setNo] = useState(1);
  useEffect(() => {
    Speech.stop();
    Speech.speak(words[no - 1].en, { rate: 0.7 });
  }, [no]);

  return (
    <View
      style={{
        flex: 1,
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
      <Swiper style={styles.wrapper} height={450} loop={false}>
        <View
          style={{
            flex: 1,
            paddingTop: 150,
            alignItems: "center",
            backgroundColor: "#9DD6EB",
          }}
        >
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "#fff",
            }}
            onPress={() => {
              Speech.stop();
              Speech.speak(words[no - 1].en, { rate: 0.7, onDone: () => {} });
            }}
          >
            {words[no - 1].en}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 160,
            alignItems: "center",
            backgroundColor: "#97CAE5",
          }}
        >
          <Text style={{ fontSize: 35, fontWeight: "bold", color: "#fff" }}>
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
                setNo(no + 1);
              } else {
                dispatch(setTopMode({}));
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
                setNo(no + 1);
              } else {
                dispatch(setTopMode({}));
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
                setNo(no + 1);
              } else {
                dispatch(setTopMode({}));
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
            dispatch(setTopMode({}));
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