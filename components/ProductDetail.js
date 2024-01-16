import React from "react";
import { View, Text, Image, StyleSheet, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ShoppingScreen from "../screens/ShoppingScreen";

const ProductDetail = ({ route, navigation }) => {
  const { product } = route.params;

  const addToCart = async (product) => {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      const cart = existingCart ? JSON.parse(existingCart) : [];
      cart.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      alert('Đã thêm vào giỏ hàng');

      // Truyền sản phẩm vào ShoppingScreen
      navigation.navigate('ShoppingScreen', { addedProduct: product });
    } catch (error) {
      console.error('Lỗi khi thêm vào giỏ hàng:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} resizeMode="contain" />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.id}>{product.id}</Text>

      <Text style={styles.price}>Giá: {product.price} $</Text>
      <Button title="Thêm vào giỏ hàng" onPress={() => addToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: "green",
  },
});

export default ProductDetail;
