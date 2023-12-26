import React from "react";
import { ScrollView, TextInput, Image } from "react-native";
import { View, Text, Button, StyleSheet } from "react-native";

import { Octicons, Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Product = () => {
  const recommendedRedWine = [
    {
      id: 0,
      name: "Vang Đỏ Cosecha",
      image:
        "https://pixnio.com/free-images/2021/03/27/2021-03-27-10-59-55-1152x768.jpg",
      money: "91 $",
      location: "Việt Nam",
    },
    {
      id: 1,
      name: "Vang Đỏ Hopito",
      image:
        "https://pixnio.com/free-images/2021/03/27/2021-03-27-10-59-55-1152x768.jpg",
      money: "53 $",
      location: "Việt Nam",
    },
    {
      id: 2,
      name: "Vang Đỏ",
      image:
        "https://pixnio.com/free-images/2021/03/27/2021-03-27-10-59-55-1152x768.jpg",
      money: "35 $",
      location: "Việt Nam",
    },
  ];
  const recommendedWineWhite = [
    {
      id: 4,
      name: "Vang Đỏ Cosecha",
      image:
        "https://pixnio.com/free-images/2021/03/27/2021-03-27-10-59-55-1152x768.jpg",
      money: "91 $",
      location: "Việt Nam",
    },
    {
      id: 5,
      name: "Vang Đỏ Hopito",
      image:
        "https://pixnio.com/free-images/2021/03/27/2021-03-27-10-59-55-1152x768.jpg",
      money: "53 $",
      location: "Việt Nam",
    },
    {
      id: 6,
      name: "Vang Đỏ",
      image:
        "https://pixnio.com/free-images/2021/03/27/2021-03-27-10-59-55-1152x768.jpg",
      money: "35 $",
      location: "Việt Nam",
    },
  ];
  return (
    <ScrollView>
      <Text style={styles.largeText}>RƯỢU VANG ĐỎ</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {recommendedRedWine?.map((item) => (
          <View
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 18,
              marginTop: 10,
            }}
          >
            <View>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "center",
                  borderRadius: 18,
                  marginHorizontal: 15,
                }}
                source={{ uri: item?.image }}
              />
            </View>
            <View style={{ padding: 10, flexDirection: "column" }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                {item?.name}
              </Text>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <FontAwesome name="money" size={18} color="red" />

                <Text>{item?.money}</Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Ionicons name="location" size={18} color="green" />

                <Text>{item?.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.largeText}>RƯỢU VANG TRẮNG</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {recommendedWineWhite?.map((item) => (
          <View
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 18,
              marginTop: 10,
            }}
          >
            <View>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "center",
                  borderRadius: 18,
                  marginHorizontal: 15,
                }}
                source={{ uri: item?.image }}
              />
            </View>
            <View style={{ padding: 10, flexDirection: "column" }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                {item?.name}
              </Text>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <FontAwesome name="money" size={18} color="red" />

                <Text>{item?.money}</Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Ionicons name="location" size={18} color="green" />

                <Text>{item?.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  largeText: {
    fontSize: 14, // Kích thước chữ là 24
    marginTop: 5, // Khoảng cách từ trên xuống là 10
    fontWeight: "bold", // Chữ đậm
    marginLeft: 15,
  },
});

export default Product;
