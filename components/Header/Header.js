import React from "react";
import { View, HStack } from "native-base";
import { SafeAreaView } from "react-native";
import Search from "./Search";
import Notification from "./Notification";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#17191D",
        padding: 15,
        paddingTop: 60,
      }}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <Search />
        <Notification />
      </HStack>
    </View>
  );
};

export default Header;
