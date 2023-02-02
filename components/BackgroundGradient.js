import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const BackgroundGradient = ({ children }) => {
  return (
    <LinearGradient
      colors={["skyblue", "transparent"]}
      style={styles.background}
    >
      {children}
    </LinearGradient>
  );
};

export default BackgroundGradient;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 1000,
    alignItems: "center",
  },
});
