import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Trang chủ</Text>
      <Button
        title="Danh sách sản phẩm"
        onPress={() => navigation.navigate('ProductList')}
      />
      <Button
        title="Giỏ hàng"
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
}

export default HomeScreen;