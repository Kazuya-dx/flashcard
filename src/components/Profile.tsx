import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, ScrollView, Button } from "react-native";
import { Header } from "react-native-elements";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory-native";

const Profile = () => {
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
          text: "アカウント名",
          style: { fontSize: 18, fontWeight: "bold", color: "#333" },
        }}
        backgroundColor="#fff"
      />
      <ScrollView>
        {isFocused ? (
          <VictoryChart // adding the material theme provided with Victory
            domainPadding={20}
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
