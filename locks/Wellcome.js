import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import colors from "../assets/Colors/colors";
import Button from "../assets/Button/button";
const Wellcome = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[colors.black , colors.white]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../assets/images/logo.png")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
            }}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: colors.white,
            }}
          >
            Chào mừng bạn đến với app của Nhân{" "}
          </Text>

          <Button
            title="Đăng kí ngay"
            onPress={() => navigation.navigate("Signin")}
            style={{
              marginTop: 122,
              width: "100%",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: colors.primary,
              }}
            >
              Bạn đã có tài khoản ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.black,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Đăng nhập tại đây !
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Wellcome;
