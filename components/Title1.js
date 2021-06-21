import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title1 = ({ textTitle }) => {
  return (
    <View style={StyleTitle1.container}>
      <Text style={StyleTitle1.text}>{textTitle}</Text>
    </View>
  );
};

export default Title1;

const StyleTitle1 = StyleSheet.create({
  container: {},
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
