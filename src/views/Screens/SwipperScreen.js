import React from "react";
import { Text,Platform, View, SafeAreaView, StyleSheet, Image} from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import COLORS from "../../assets/CompoundConst/Colors";
import Colors from "../../assets/CompoundConst/Colors";
import { PriButton } from "../Component/Buttons";
import firstimage from "../../assets/images/firstimage.png"
import Secondimage from "../../assets/images/Secondimage.png"
import Thirdimage from "../../assets/images/Thirdimage.png"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.white, 
    
  },

  wrap:{
    height:320,
    right:0,
  },
  ImageCircle:{
    width:200,
   height:200,
   borderRadius: 100,
   backgroundColor:COLORS.gray,
     top:50,
     left:100,
  

  },
  onboardImage:{
    width:'100%',
    height:'100%',
    resizeMode:'contain', 
  
  },
  HeaderText:{
    fontSize:32,
    fontWeight:'bold', 
    textAlign:'center' ,
    marginVertical:5,
  },
  ParagraphsText:{
    fontSize:18,
    textAlign:'center',
    marginVertical:10,

  },
 
  TextContainer:{
      flex:1,
      justifyContent:'space-between',
      paddingBottom:30,
      paddingHorizontal:50,
      top:-50,

  },
  indicatorContainer:{
      height:50,
      flex:1,
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center',


  },
  Activeindicator:{
      width:30,
      height:10,
      backgroundColor:COLORS.primaryColor,
      borderRadius:10,
      marginHorizontal:5,
  },
  indicator:{
  width:12,
  height:12,
  borderRadius:6,
  backgroundColor:COLORS.gray,
  marginHorizontal:5,

  }


});


const SwipperScreen = ({navigation}) => {
  return(
 
    <SafeAreaView style={styles.container}>

 <View style={styles.wrap}>
    <View style={styles.ImageCircle}>
     <Image style={styles.onboardImage} source={require('../../assets/images/firstimage.png')}/>
     </View>
      </View>
      <View style={styles.TextContainer}>
       <View><Text style={styles.HeaderText}>Sweet wine</Text>
       <Text style={styles.ParagraphsText}>It provides antioxidants, may promote longevit.</Text></View>
        <View style={styles.indicatorContainer}>
            <View style={styles.Activeindicator}></View>
            <View style={styles.indicator}></View>
            <View style={styles.indicator}></View>

        </View>
        <PriButton  onPress={()=> navigation.navigate('Home')} title="Continue"/>
      </View>
      
    </SafeAreaView>
  );
};

export default SwipperScreen;


