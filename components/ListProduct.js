  import React, { useState, useEffect } from "react";
  import {
    View,
    Text,
    Image,
    FlatList,
    ActivityIndicator,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    Alert,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import ProductDetail from "./ProductDetail";
  import AddProduct from "../screens/AddProduct";

  const windowWidth = Dimensions.get("window").width;
  

  const ListProduct = () => {
    const [isLoading, setisLoading] = useState(true);
    const [dssp, setdssp] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
      getListPro();
    }, []);

    const getListPro = async () => {
      let url_api = "https://65a4e55452f07a8b4a3de282.mockapi.io/api/products";

      try {
        const response = await fetch(url_api);
        const json = await response.json();
        setdssp(json);
      } catch (error) {
        console.error(error);
      } finally {
        setisLoading(false);
      }
    };

    const goToProductDetail = (product) => {
      navigation.navigate("ProductDetail", { product });
    };

    const renderProduct = ({ item }) => {
      return (
        <TouchableOpacity style={styles.item} onPress={() => goToProductDetail(item)}>
          <View style="marginBottom: 10,"><Image
            style={{ width: "100%", height: 150 }}
            source={{ uri: item.image }}
            resizeMode="contain"
          />
          <Text>{item.name}</Text>
          <Text>Giá:{item.price} $</Text>
          <Text style={{ color: "blue" }}>Thêm vào giỏ hàng</Text></View>
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <Text>Danh sách sản phẩm</Text>

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={dssp}
            keyExtractor={(item_sp) => item_sp.id.toString()}
            renderItem={renderProduct}
            numColumns={2}
          />
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    item: {
      width: windowWidth * 0.45,
      marginHorizontal: 5,
      marginBottom: 10,
    },
  });

  export default ListProduct;
