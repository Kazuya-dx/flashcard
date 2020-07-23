import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import { VictoryChart, VictoryBar } from "victory-native";

const Profile = () => {
  const [checkRender, setCheckRender] = useState(false);
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
  useFocusEffect(() => {
    console.log("after");
    setCheckRender(true);
  });

  return (
    <View style={{ flex: 1 }}>
      <Header
        centerComponent={{
          text: "寺田心",
          style: { fontSize: 18, fontWeight: "bold", color: "#333" },
        }}
        backgroundColor="#fff"
      />
      <ScrollView>
        {!checkRender ? (
          <VictoryChart // adding the material theme provided with Victory
            domainPadding={20}
          >
            <VictoryBar
              data={beforeData}
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
            <VictoryBar
              animate={{ easing: "exp" }}
              data={data}
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
