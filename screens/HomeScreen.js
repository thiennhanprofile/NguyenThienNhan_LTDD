import React from "react";
import { ScrollView, TextInput, Image } from "react-native";
import { View, Text, Button, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from "deprecated-react-native-prop-types";
import ProductHome from "../components/ProductHome";
import CasualHome from "../components/CasualHome";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import Product from "../components/Product";

const HomeScreen = ({ navigation }) => {
 
  return (
    <ScrollView>

      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 10,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "#C0C0C0",
          paddingVertical: 8,
          paddingHorizontal: 10,
          borderRadius: 11,
        }}
      >
        <TextInput placeholder="Tìm kiếm tại đây" style={{ flex: 1 }} />
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <View>
        <CasualHome />
        <Product/>
      </View>

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
