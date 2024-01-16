
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

const FindScreen = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [dssp, setdssp] = useState([]);
  const [searchText, setSearchText] = useState('');
  const refreshSearchResult = () => {
    setSearchResult([]);
    setHasSearchResult(true);
  };
  const [searchResult, setSearchResult] = useState([]);
  const [hasSearchResult, setHasSearchResult] = useState(true);
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

  const renderProduct = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          style={{ width: "100%", height: 150 }}
          source={{ uri: item.image }}
          resizeMode="contain"
        />
        <Text>
          Tên SP: {item.name} -- Giá {item.price}
        </Text>
      </View>
    );
  };

  const searchProducts = () => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const filteredProducts = dssp.filter(
      (item) => item.name.toLowerCase().includes(lowerCaseSearchText)
    );
    setSearchResult(filteredProducts);
    setHasSearchResult(filteredProducts.length > 0);
  };

  return (
    <View>
       <View style={{
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
        }}>
      <TextInput placeholder="Tìm kiếm tại đây" style={{ flex: 1 }} onChangeText={(text) => setSearchText(text)}
        onFocus={() => setSearchText('')}
          value={searchText}  /> 
        <AntDesign name="search1" size={24} color="black" />
        
        <Button title="Tìm Kiếm" onPress={searchProducts} />
        <Button title="Làm mới" onPress={refreshSearchResult} />
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : hasSearchResult ? (
        <FlatList
          data={searchResult.length > 0 ? searchResult : dssp}
          keyExtractor={(item_sp) => item_sp.id.toString()}
          renderItem={renderProduct}
          numColumns={2}
        />
      ) : (
        <Text>Không có sản phẩm nào được tìm thấy.</Text>
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

export default FindScreen;
