import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/Colors/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Button from "../assets/Button/button";

const Login = ({ navigation }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const doLogin =async  () => {
    // Kiểm tra tk mk
    if (username.length == 0) {
      alert("Chưa nhập Username");
      return;
    }
    if (password.length == 0) {
      alert("Chưa nhập Password");
      return;
    }
    // Lấy dữ liệu
    try {
      const response = await fetch(`https://65a4e55452f07a8b4a3de282.mockapi.io/api/account?username=${username}&password=${password}`);
      const data = await response.json();

      if (data.length === 1) {
          // Lưu thông tin đăng nhập vào AsyncStorage
          await AsyncStorage.setItem('loginInfo', JSON.stringify(data[0]));
          navigation.navigate('TabNav'); // Chuyển hướng đến màn hình sau khi đăng nhập thành công
      } else {
          Alert.alert('Đăng nhập không thành công', 'Sai tên đăng nhập hoặc mật khẩu');
      }
  } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      Alert.alert('Đã xảy ra lỗi khi đăng nhập');
  }

  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: colors.black,
            }}
          >
            Đăng nhập tài khoản
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Tên tài khoản
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
              placeholder="Vui lòng nhập tên tài khoản "
              onChangeText={(txt) => {
                setusername(txt);
              }}
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
            Mật khẩu
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
              placeholder="Vui lòng nhập mật khẩu"
              onChangeText={(txt) => {
                setpassword(txt);
              }}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <Button
          title="Đăng nhập"
          onPress={doLogin}
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: colors.black }}>
            Bạn không có tài khoản ?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Signin")}>
            <Text
              style={{
                fontSize: 16,
                color: colors.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Đăng kí ngay !
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
