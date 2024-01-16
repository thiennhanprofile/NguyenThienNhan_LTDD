import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/Colors/colors";

import Button from "../assets/Button/button";



const AddProduct = ({ navigation, updateProductList }) => {
  const [tenSP, setTenSP] = useState("");
  const [gia, setGia] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  

  const SaveProduct = async () => {
    if (tenSP.length == 0) {
        alert("Chưa nhập tên sản phẩm");
        return;
      }
      if (gia.length == 0) {
        alert("Chưa nhập giá sản phẩm");
        return;
      }
    if (!imageUrl) {
      alert("Vui lòng nhập URL hình ảnh");
      return;
    }
    try {
      // Gửi request lên API để thêm sản phẩm
      const response = await fetch(
        "https://65a4e55452f07a8b4a3de282.mockapi.io/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: tenSP,
            price: gia,
            image: imageUrl,
          }),
        }
      );

      if (response.ok) {
        alert("Thêm sản phẩm thành công");
      } else {
        alert("Đã xảy ra lỗi khi thêm sản phẩm");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  return (
    // <View>
    //     <Text>Thêm Sản Phẩm</Text>
    //     <TextInput placeholder="Tên Sản Phẩm" onChangeText={(text) => setTenSP(text)} />
    //     <TextInput placeholder="Giá Tiền" onChangeText={(text) => setGia(text)} />
    //     <Image source={{ uri: imageUrl }} style={{ width: '100%', height: 150 }} />
    //     <TextInput
    //         placeholder="URL Hình Ảnh"
    //         onChangeText={(url) => setImageUrl(url)}
    //         value={imageUrl}
    //     />
    //     <Button title="Lưu" onPress={SaveProduct} />
    // </View>
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            Tên sản phẩm
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Tên Sản Phẩm"
              onChangeText={(text) => setTenSP(text)}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Gía sản phẩm
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Giá Tiền"
              onChangeText={(text) => setGia(text)}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Hình ảnh
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="URL Hình Ảnh"
              onChangeText={(url) => setImageUrl(url)}
              value={imageUrl}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <Button
          title="Thêm sản phẩm"
          onPress={SaveProduct}
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddProduct;
