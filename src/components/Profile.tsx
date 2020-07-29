import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { Header } from "react-native-elements";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory-native";

const Profile = () => {
  const user = useSelector((state: any) => state.user);
  const isFocused = useIsFocused();
  const beforeData = [
    { date: "7/22", workload: 0 },
    { date: "7/23", workload: 0 },
    { date: "7/24", workload: 0 },
    { date: "7/25", workload: 0 },
    { date: "7/26", workload: 0 },
    { date: "7/27", workload: 0 },
    { date: "7/28", workload: 0 },
  ];
  const data = [
    { date: "7/22", workload: 130 },
    { date: "7/23", workload: 165 },
    { date: "7/24", workload: 142 },
    { date: "7/25", workload: 190 },
    { date: "7/26", workload: 145 },
    { date: "7/27", workload: 180 },
    { date: "7/28", workload: 165 },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header
        centerComponent={{
          text: user.name + (user.isGuest ? "(Guest)" : ""),
          style: { fontSize: 18, fontWeight: "bold", color: "#333" },
        }}
        backgroundColor="#FFF"
      />
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <View
          style={{
            flexDirection: "row",
            height: 150,
            backgroundColor: "#F3F3F3",
          }}
        >
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{ width: 100, height: 100, backgroundColor: "tomato" }}
            ></View>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
            }}
          >
            <Text style={{ paddingBottom: 10 }}>Level 0</Text>
            <Text style={{ paddingBottom: 10 }}>ランク Beginner</Text>
            <Text style={{ paddingBottom: 10 }}>コイン 0</Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            justifyContent: "center",
            paddingLeft: 30,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
            学習した単語数
          </Text>
        </View>
        {isFocused ? (
          <VictoryChart // adding the material theme provided with Victory
            domainPadding={20}
            height={250}
            width={Dimensions.get("screen").width + 25}
            padding={{ top: 0, left: 50, right: 50, bottom: 50 }}
          >
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4, 5, 6, 7]}
            />
            <VictoryAxis dependentAxis />
            <VictoryBar
              animate={{ easing: "exp" }}
              data={data}
              x="date"
              y="workload"
              barWidth={25}
              style={{ data: { fill: "tomato" } }}
            />
          </VictoryChart>
        ) : (
          <VictoryChart // adding the material theme provided with Victory
            domainPadding={20}
            height={250}
            width={Dimensions.get("screen").width + 25}
            padding={{ top: 20, left: 50, right: 50, bottom: 50 }}
          >
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4, 5, 6, 7]}
            />

            <VictoryAxis dependentAxis tickFormat={(x) => ""} />
            <VictoryBar
              data={beforeData}
              x="date"
              y="workload"
              barWidth={25}
              style={{ data: { fill: "tomato" } }}
            />
          </VictoryChart>
        )}
      </ScrollView>
    </View>
  );
};

export default Profile;
