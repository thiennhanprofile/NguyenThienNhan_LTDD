import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ShoppingCart = ({ route }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu giỏ hàng từ AsyncStorage khi màn hình được tạo
    getCartData();
  }, []);

  useEffect(() => {
    // Update giỏ hàng khi có sản phẩm mới được thêm từ ProductDetail
    if (route.params?.addedProduct) {
      setCart([...cart, route.params.addedProduct]);
    }
  }, [route.params?.addedProduct]);

  const getCartData = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu giỏ hàng:', error);
    }
  };

  const renderCartItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>Giá: {item.price} $</Text>
      {/* Các thông tin khác của sản phẩm */}
    </View>
  );

  <FlatList
  data={cart}
  keyExtractor={(item) => (item && item.id ? item.id.toString() : Math.random().toString())}
  renderItem={({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>Giá: {item.price} $</Text>
        {/* Các thông tin khác của sản phẩm */}
      </View>
    );
  }}
/>
};

export default ShoppingCart;
