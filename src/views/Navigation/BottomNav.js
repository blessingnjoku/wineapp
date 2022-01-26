import React from "react";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../../assets/CompoundConst/Colors";
import { View, StyleSheet } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import CartScreen from "../Screens/CartScreen";

import COLORS from "../../assets/CompoundConst/Colors";

const Tab = createBottomTabNavigator();

const BottomNav = () => {

  return (
  
  <Tab.Navigator
  screenOptions={{ headerShown: false }}
   tabBarOptions={{
     style:{height:96, borderTopWidth:0, elevation:0,},
     showLabel:false,
     activeTintColor:COLORS.primaryColor,
     }}>
       
  
    <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon: ({color})=> <Icon name="home-filled" color={color} size={28}/>}}/>
    <Tab.Screen name="LocalMall" component={HomeScreen} options={{tabBarIcon: ({color})=> <Icon name="local-mall" color={color} size={28}/>}}/>
    <Tab.Screen name="Search" component={HomeScreen} 
    options={{
      tabBarIcon: ({color})=>(
      <View style={{height:60, width:60,alignItems:'center', justifyContent:'center',
       backgroundColor:COLORS.white, borderColor:COLORS.primaryColor, borderWidth:2,borderRadius:30,
      top:-20,
      elevation:5,
      }}> 
        <Icon name="search" color={COLORS.primaryColor} size={28}/>
      
      </View>
  )}}/>

    <Tab.Screen name="Favorite" component={HomeScreen} options={{tabBarIcon: ({color})=> <Icon name="home-filled" color={color} size={28}/>}}/>
    <Tab.Screen name="Cart" component={CartScreen} options={{tabBarIcon: ({color})=> <Icon name="shopping-cart" color={color} size={28}/>}}/>
   
  </Tab.Navigator>
  );
};
export default BottomNav;
