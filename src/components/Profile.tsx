import React, { useEffect, useState } from "react";
import { Dimensions, Text, ScrollView, LayoutAnimation } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Profile = () => {
  const screenWidth = Dimensions.get("window").width;
  const [chartdata, setChartData] = useState([0, 20, 30, 50, 20, 35]);

  let data = {
    labels: ["7/20", "7/21", "7/22", "7/23", "7/24", "7/25"],
    datasets: [
      {
        data: chartdata,
        color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["学習した単語数"], // optional
  };

  const chartConfig = {
    backgroundColor: "#f2f2f2",
    backgroundGradientFrom: "#f2f2f2",
    backgroundGradientTo: "#f2f2f2",
    decimalPlaces: 0,
    strokeWidth: 0.5,
    fillShadowGradient: "#f2f2f2",
    color: () => `rgba(89, 87, 87, 1)`,
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ paddingBottom: 20 }}>プロフィール</Text>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        withInnerLines={false}
      />
    </ScrollView>
  );
};

export default Profile;
