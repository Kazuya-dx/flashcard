import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setModalVisible } from "../store/modal";
import Modal from "react-native-modal";
import Study from "./Study";

const Learning = () => {
  const [selected, setSelected] = useState("");
  const isModalVisible = useSelector(
    (state: any) => state.modal.isModalVisible
  );
  const dispatch = useDispatch();
  const books = [
    "受験英語 初級",
    "受験英語 中級",
    "受験英語 上級",
    "TOEIC 400",
    "TOEIC 600",
    "TOEIC 800",
    "TOEIC 990",
  ];
  const levels = [
    "【Level1】 No1〜No10",
    "【Level2】 No11〜No20",
    "【Level3】 No21〜No30",
    "【Level4】 No31〜No40",
    "【Level5】 No41〜No50",
    "【Level6】 No51〜No60",
    "【Level7】 No61〜No70",
    "【Level8】 No71〜No80",
    "【Level9】 No81〜No90",
    "【Level10】 No91〜No100",
    "【Level11】 No101〜No110",
    "【Level12】 No111〜No120",
    "【Level13】 No121〜No130",
    "【Level14】 No131〜No140",
    "【Level15】 No141〜No150",
    "【Level16】 No151〜No160",
    "【Level17】 No161〜No170",
    "【Level18】 No171〜No180",
    "【Level19】 No181〜No190",
    "【Level20】 No191〜No200",
  ];
  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 60,
          paddingLeft: 30,
          alignItems: "flex-start",
        }}
      >
        <Text style={{ paddingBottom: 10, fontSize: 20, color: "#333" }}>
          英単語学習リスト
        </Text>
      </View>
      <ScrollView
        style={{ flex: 5, backgroundColor: "#ddd" }}
        horizontal={true}
      >
        {books.map((element, index) => {
          if (selected === element) {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  margin: 15,
                  paddingTop: 10,
                  paddingLeft: 5,
                  height: 150,
                  width: 100,
                  backgroundColor: "tomato",
                }}
              >
                <Text>{element}</Text>
              </TouchableOpacity>
            );
          } else {
            return (
              <Text
                key={index}
                style={{
                  margin: 15,
                  paddingTop: 10,
                  paddingLeft: 5,
                  height: 150,
                  width: 100,
                  backgroundColor: "#fff",
                }}
                onPress={() => {
                  setSelected(element);
                }}
              >
                {element}
              </Text>
            );
          }
        })}
      </ScrollView>
      <View style={{ alignItems: "center" }}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ paddingBottom: 10, fontSize: 18, color: "#333" }}>
            {selected}
          </Text>
        </View>
        {levels.map((element, index) => {
          if (selected !== "") {
            return (
              <View
                key={index}
                style={{
                  margin: 5,
                  paddingTop: 15,
                  paddingBottom: 15,
                  width: "90%",
                  borderWidth: 1,
                  borderColor: "#ededed",
                  borderRadius: 10,
                  backgroundColor: "#fff",
                }}
              >
                <Text style={{ fontSize: 15, color: "gray" }}>{element}</Text>
              </View>
            );
          }
        })}
      </View>
      <Button
        title="テストプレイ"
        onPress={() => {
          dispatch(setModalVisible({}));
        }}
      />
      <Modal isVisible={isModalVisible} style={{ margin: 0 }}>
        <Study />
      </Modal>
    </ScrollView>
  );
};

export default Learning;
