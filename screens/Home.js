import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary}></FocusedStatusBar>

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item}></NFTCard>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader></HomeHeader>}
          />

          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <View
              style={{ height: 300, backgroundColor: COLORS.primary }}
            ></View>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
