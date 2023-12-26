import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ShoppingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CÀI ĐẶT</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default ShoppingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
  },
});
