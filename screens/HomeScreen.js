import React from "react";
import { ScrollView, TextInput, Image } from "react-native";
import { View, Text, Button, StyleSheet } from "react-native";
import CasualHome from "../components/CasualHome";
import ListProduct from "../components/ListProduct";



const HomeScreen = ({ navigation }) => {
 
  return (
    <ScrollView>
      <View>
         <CasualHome />
         <ListProduct/>
      </View>

    </ScrollView>
  );
};

export default HomeScreen;

