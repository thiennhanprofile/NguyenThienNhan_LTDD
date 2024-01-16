import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ShoppingScreen = ({ route }) => {
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
    {/* Kiểm tra nếu có thuộc tính 'id' mới sử dụng nó */}
    {item.id && <Text>ID: {item.id.toString()}</Text>}
  </View>
);

  return (
    <View>
      <Text>Danh sách sản phẩm trong giỏ hàng</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
      />
    </View>
  );
};

export default ShoppingScreen;
