import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signin, Wellcome, TabNav } from "./locks";
import ShoppingScreen from "./screens/ShoppingScreen";
import ListProduct from "./components/ListProduct";

import ProductDetail from "./components/ProductDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wellcome">
        <Stack.Screen
          name="Wellcome"
          component={Wellcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ShoppingScreen" component={ShoppingScreen} />
        <Stack.Screen
          name="ListProduct"
          component={ListProduct}
          options={{ key: "ListProductScreen" }}
        />

        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
