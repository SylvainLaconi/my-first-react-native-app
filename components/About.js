import React from "react";
import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={StyleAbout.container}>
      <Text style={StyleAbout.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
        exercitationem quia quae suscipit eaque, autem ipsum sint rerum
        laudantium veritatis dolore earum distinctio quisquam rem itaque maxime
        quam, excepturi alias in deserunt ex omnis est velit! Nemo rem suscipit
        hic porro repellat eaque corrupti dolore aliquam alias, commodi,
        laudantium sit.
      </Text>
    </View>
  );
};

const StyleAbout = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 15,
    color: "black",
    textAlign: "justify",
  },
});

export default About;
