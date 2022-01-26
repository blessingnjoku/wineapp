import React from "react";
import { Platform,TouchableOpacity, View, StyleSheet,Text } from "react-native";
import COLORS from "../../assets/CompoundConst/Colors";


const styles=StyleSheet.create({
    btn:{
    width:250,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
   left:30,
    backgroundColor:COLORS.primaryColor,
    },
    btnText:{
        color:COLORS.white,
        fontSize:18,
        fontWeight:'bold',
    }
});



const PriButton=({title, onPress =()=>{}})=>{
    return<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.btn}>
            <Text style={styles.btnText}>{title}</Text>
        </View>
    </TouchableOpacity>

}
export {PriButton};