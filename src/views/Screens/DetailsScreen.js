import React from 'react'
import {Text, View, StyleSheet, ScrollView,Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from '../../assets/CompoundConst/Colors'
import Colors from '../../assets/CompoundConst/Colors'
import { SecButton } from '../Component/Buttons';


const styles= StyleSheet.create({
 header:{
     flexDirection:'row',
     paddingVertical:15,
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
     width:40,
     height:40,
     borderRadius:20,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:COLORS.white,
     
 },
 detailsText:{
     color:"#f5f5f5",
     lineHeight:20,
     marginTop:10,
     fontSize:14,


    },
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
                   <Image source={item.image}style={{height:250,resizeMode:'contain',}}/>
               </View>
               <View style={styles.detailsBox}>
                   <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}><Text style={{fontSize:20, fontWeight:'bold', color:COLORS.white}}>{item.name}</Text>
                   <View style={styles.LoveIcon}>
                       <Icon name='favorite-border' size={25} color={COLORS.primaryColor}/>
                   </View>
                   </View>
                   <Text style={styles.detailsText}>{item.Details}</Text>
                   <View style={{flexDirection:'row', paddingVertical:10,}}><Text style={{color:COLORS.white, fontWeight:'bold'}}>Region:  </Text><Text style={{color:COLORS.white,}}>{item.Region}</Text></View>
                 <View style={{marginTop:20, marginBottom:20,marginHorizontal:30,}}>
                     <SecButton title="Add to cart"/>
                 </View>
               </View>
           </ScrollView>
        </SafeAreaView>
    )
}

export default DetailsScreen;
