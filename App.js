import React from "react";
import { Alert, StyleSheet, View, ScrollView } from "react-native";
import Title1 from "./components/Title1";
import About from "./components/About";
import ButtonApp from "./components/ButtonApp";
import Picture from "./components/Picture";

export default function App() {
  const StartButton = () => {
    Alert.alert("Congrats ! You are starting ...");
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Title1 textTitle="Header of my App" />
      </View>
      <View style={styles.body}>
        <ScrollView>
          <Picture />
          <About />
          <About />
          <About />
          <About />
          <About />
          <About />
          <About />
          <About />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <ButtonApp textButton="Start" onClick={StartButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 2,
    paddingTop: 35,
    justifyContent: "center",
    backgroundColor: "green",
  },
  body: {
    flex: 12,
    justifyContent: "space-evenly",
  },
  footer: {
    flex: 2,
    paddingBottom: 10,
    justifyContent: "center",
    backgroundColor: "black",
  },
});
