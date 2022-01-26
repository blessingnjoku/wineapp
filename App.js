import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View, Dimensions} from "react-native";
import  COLORS from "./src/assets/CompoundConst/Colors";
import 'react-native-gesture-handler'

// Screens
import SwipperScreen from "./src/views/Screens/SwipperScreen";
import BottomNav from './src/views/Navigation/BottomNav';
import DetailsScreen from "./src/views/Screens/DetailsScreen";

const Stack = createStackNavigator();


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown:false,  }} initialRouteName="Home"  >
        <Stack.Screen name="Welcome" component={SwipperScreen} />
        <Stack.Screen name="Home" component={BottomNav} />
        <Stack.Screen name="ProductDetails" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;


