import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/Colors/colors";

import Button from "../assets/Button/button";

const Register = ({ navigation }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const doRegister = async () => {
    // Kiểm tra tk mk
    if (username.length === 0) {
      Alert.alert("Chưa nhập Username");
      return;
    }
    if (password.length === 0) {
      Alert.alert("Chưa nhập Password");
      return;
    }
    // Kiểm tra xem username đã tồn tại chưa
    try {
      const response = await fetch(`https://65a4e55452f07a8b4a3de282.mockapi.io/api/account?username=${username}`);
      const data = await response.json();

      if (data.length > 0) {
        Alert.alert('Đăng ký không thành công', 'Username đã tồn tại. Vui lòng chọn username khác.');
        return;
      }

      // Nếu username chưa tồn tại, thì tiến hành đăng ký
      const registerResponse = await fetch('https://65a4e55452f07a8b4a3de282.mockapi.io/api/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (registerResponse.ok) {
        Alert.alert('Đăng ký thành công, đăng nhập ngay');
        navigation.navigate('Login'); // Chuyển hướng đến màn hình đăng nhập sau khi đăng ký thành công
      } else {
        Alert.alert('Đã xảy ra lỗi khi đăng ký');
      }
    } catch (error) {
      console.error('Lỗi khi đăng ký:', error);
      Alert.alert('Đã xảy ra lỗi khi đăng ký');
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
            Đăng ký tài khoản
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
          title="Đăng ký"
          onPress={doRegister}
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
            Bạn đã có tài khoản ?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                color: colors.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Đăng nhập tại đây !
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
