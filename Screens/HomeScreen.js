import { Text,View,Box } from "native-base";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HomeProducts from "../Components/HomeProducts";
import HomeSeach from "../Components/HomeSearch";

function HomeScreen(){
    return (
        <Box flex={1} bg={Colors.subGreen}>
            <HomeSeach/>
            <HomeProducts/>
        </Box>
    )
}

export default HomeScreen