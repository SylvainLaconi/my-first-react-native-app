import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Picture = () => {
  return (
    <View style={pictures.imgContainer}>
      <Image style={pictures.picture} source={require("./images/9606NB.jpg")} />
    </View>
  );
};

const pictures = StyleSheet.create({
  imgContainer: {
    padding: 10,
    alignItems: "center",
  },
  picture: {
    width: 200,
    height: 200,
  },
});

export default Picture;
