import React from 'react'
import {Text, View, StyleSheet, ScrollView,Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from '../../assets/CompoundConst/Colors'
import Colors from '../../assets/CompoundConst/Colors'


const styles= StyleSheet.create({
 header:{
     flexDirection:'row',
     paddingVertical:20,
     alignItems:'center',
     marginHorizontal:20,
 },
 detailsImage:{
 justifyContent:'center',
 alignItems:'center',
 height:280,

 },
 detailsBox:{
paddingHorizontal:20,
paddingBottom:60,
paddingTop:40,
backgroundColor:COLORS.primaryColor,
borderTopLeftRadius:40,
borderTopRightRadius:40,
 },
 LoveIcon:{
     width:30,
     height:30,
     borderRadius:15,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:COLORS.white,
     
 }
})


const DetailsScreen =({navigation,route})=> {
    const item =route.params;
  
    return (
       <SafeAreaView >
        <View style={styles.header}>
            <Icon name='arrow-back-ios' size={28} onPress={navigation.goBack} />
               <Text style={{fontSize:20,fontWeight:'bold'}}>Details</Text>
           </View>
           <ScrollView showsVerticalScrollIndicator={false}>
               <View style={styles.detailsImage}>
                   <Image source={item.image}style={{height:220,resizeMode:'contain',}}/>
               </View>
               <View style={styles.detailsBox}>
                   <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20, fontWeight:'bold', color:COLORS.white}}>{item.name}</Text>
                   <View style={styles.LoveIcon}>
                       <Icon name='favorite-border' size={28}/>
                   </View>
                   </View>
                   
               </View>
           </ScrollView>
        </SafeAreaView>
    )
}

export default DetailsScreen;
