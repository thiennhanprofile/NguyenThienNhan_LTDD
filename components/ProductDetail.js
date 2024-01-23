import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from "../assets/Button/button";


function ProductDetail({ route }) {
  const navigation = useNavigation();
  const { name, url, price } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const addToCart = () => {
    const validatedQuantity = Math.max(1, parseInt(quantity) || 1);
    navigation.navigate('ShoppingScreen', { name, url, price, quantity: validatedQuantity });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>{price} $</Text>
        <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => decreaseQuantity}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
          {/* <Button title="-" onPress={decreaseQuantity} /> */}
          <TextInput
            style={styles.quantityInput}
            value={quantity.toString()}
            keyboardType="numeric"
            onChangeText={(newQuantity) => setQuantity(newQuantity)}
          />
          <TouchableOpacity onPress={() => increaseQuantity()}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
          {/* <Button title="+" onPress={increaseQuantity} /> */}
        </View>
        
        <Button title="Thanh toán"onPress={addToCart} />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityInput: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    width: 50,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProductDetail;