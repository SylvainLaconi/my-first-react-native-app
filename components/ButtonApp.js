import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const ButtonApp = ({ textButton, onClick }) => {
  return (
    <View style={StyledButton.buttonContainer}>
      <TouchableOpacity style={StyledButton.button} onPress={onClick}>
        <Text style={StyledButton.text}>{textButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

const StyledButton = StyleSheet.create({
  button: {
    backgroundColor: "green",
    padding: 5,
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ButtonApp;
