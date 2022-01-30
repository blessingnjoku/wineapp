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
import Checkout from './src/views/Screens/Checkout';
import CheckoutScreen2 from './src/views/Screens/CheckoutScreen2';


const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown:false}} initialRouteName="Home"  >
        <Stack.Screen name="onboarding" component={SwipperScreen} />
        <Stack.Screen name="Home" component={BottomNav}   />
        <Stack.Screen name="ProductDetails" component={DetailsScreen}  />
        <Stack.Screen name="CheckoutScreen" component={Checkout}  />
        {/* <Stack.Screen name="Checkout2" component={CheckoutScreen2} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;


