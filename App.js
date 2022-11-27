import { StatusBar } from "expo-status-bar";
import HomeScreen from "./Screens/HomeScreen";
import { NativeBaseProvider, Text, Box } from "native-base";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import NotVerifyScreen from "./Screens/NotVerifyScreen";
import SingleProductScreen from "./Screens/SingleProductScreen";
export default function App() {
  return (
    <NativeBaseProvider>
     <SingleProductScreen/>
    </NativeBaseProvider>
  );
}


