import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { setModalVisible } from "../store/modal";
import { useDispatch } from "react-redux";

const Result = () => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <Text>結果</Text>
      <View style={{ paddingBottom: 10 }}>
        <Text>余裕: 4、微妙: 3、わからない: 3</Text>
      </View>
      <View style={{ paddingBottom: 10 }}>
        <Text>◯ apple　　　　　　　　　　学習回数 1</Text>
        <Text>次の復習日 1日後 (7/26(日))</Text>
      </View>
      <View style={{ paddingBottom: 10 }}>
        <Text>◯ banana　　　　　　　　　　学習回数 1</Text>
        <Text>次の復習日 1日後 (7/26(日))</Text>
      </View>
      <View style={{ paddingBottom: 10 }}>
        <Text>◯ apple　　　　　　　　　　学習回数 1</Text>
        <Text>次の復習日 1日後 (7/26(日))</Text>
      </View>
      <View style={{ paddingBottom: 10 }}>
        <Text>◯ apple　　　　　　　　　　学習回数 1</Text>
        <Text>次の復習日 1日後 (7/26(日))</Text>
      </View>
      <View style={{ paddingBottom: 10 }}>
        <Text>◯ apple　　　　　　　　　　学習回数 1</Text>
        <Text>次の復習日 1日後 (7/26(日))</Text>
      </View>

      <Button
        title="戻る"
        onPress={() => {
          dispatch(setModalVisible({}));
        }}
      />
    </View>
  );
};

export default Result;
