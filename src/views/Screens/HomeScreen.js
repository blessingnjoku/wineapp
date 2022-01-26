import React from 'react'
import {StyleSheet, Text, View,TextInput, ScrollView,Image, FlatList, Dimensions } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView} from 'react-native-safe-area-context'
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from '../../assets/CompoundConst/Colors'
import Colors from '../../assets/CompoundConst/Colors'
import DrinksCartArray from '../../assets/CompoundConst/DrinksCartArray'
import Wine from '../../assets/CompoundConst/Wine'




// screen width

const {width}=Dimensions.get('screen')
const cardWidth= width/2 -20;


const styles=StyleSheet.create({
    searchInput:{
        backgroundColor:COLORS.white,
       flex:1,
       fontSize:18,
    
    },
    inputContainer:{
     flex:1,
     width:100,
     height:50,
     borderRadius:20,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:COLORS.white,
     paddingHorizontal:20,
     
     
    },
    filterbtn:{
        width:40,
        height:40,
        borderRadius:5,
        marginLeft:10,
        backgroundColor:COLORS.primaryColor,
        justifyContent:'center',
        alignItems:'center',

    },
    contentContainerStyle:{
        paddingVertical:30,
        alignItems:'center',
        paddingHorizontal:20,

    },
    CartCircleContainer:{
        marginRight:20,
        marginTop:10, 
        flexDirection:'column', 
        alignItems:'center',
        
    },
    cartegoryCircle:{
        width:70,
        height:70,
        borderRadius:70/2,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        
    },
    cartImg:{
        width:70,
        height:70,
        borderRadius:70/2,
        resizeMode:'cover',
    },
    TextLbel:{
        marginTop:10,

    },
    card:{
        height:226,
        width:cardWidth,
        marginHorizontal:10,
        marginBottom:10,
        marginTop:20,
        borderRadius:15,
        elevation:13,
        backgroundColor:COLORS.white,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    cardImage:{
       width:'100%',
       height:130,
       alignItems:'center',
       borderTopEndRadius:15,
       borderTopLeftRadius:15,
       backgroundColor:'#E5E5E5',
       justifyContent:'center',
    
    },


    productImg:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',


    },

    cartCircle:{
        width:30,
        height:30,
        borderRadius:30/2,
        backgroundColor:COLORS.primaryColor,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:-110,
        right:10,
   
     
    }

})


const HomeScreen =({navigation})=> {
    const [selectedCartIndex, setSelectedCartIndex]=React.useState(0)
    const ListOfCartegories=()=>{
        return(
            <ScrollView horizontal showsHorizontalScrollIndicator={false}  contentContainerStyle={styles}>
                {DrinksCartArray.map((category, index)=>(
                   <TouchableOpacity key={index} activeOpacity={0.8} onPress={()=> setSelectedCartIndex(index)}>
                       <View style={styles.CartCircleContainer}>
                           
                           <View style={styles.cartegoryCircle}>
                               <Image source={category.image} style={styles.cartImg}/>
                           </View>
                           <Text style={{color:selectedCartIndex==index ? COLORS.primaryColor : COLORS.gray, ...styles.TextLbel}} >{category.name}</Text>
                       </View>
                   </TouchableOpacity>
                ))}
            </ScrollView>
        );
    };

    const Card = ({Wine}) =>{
        return (
            <TouchableHighlight underlayColor={COLORS.white} activeOpacity={0.9} onPress={()=>navigation.navigate('ProductDetails', Wine)}>
        <View style={styles.card}>
          
        <View style={styles.cardImage}>
        <Image source={Wine.image} style={styles.productImg} />
       </View>
       <View style={{padding:10,}}>
           <Text style={{color:'#908A8A', paddingBottom:3,}}>{Wine.Caterory}</Text>
           <Text style={{fontSize:18,paddingBottom:10,}}>{Wine.name}</Text>
           <View style={{flexDirection:'row',}}><Text style={{marginRight:10,textDecorationLine:'line-through',color:'#515251'}}>{'\u20A6'}{Wine.DiscountPrice} </Text>
           <Text style={{fontSize:16, color:'#515251'}}>{'\u20A6'}{Wine.mainPrice}</Text>
           </View>
           


           </View>
           <TouchableOpacity activeOpacity={0.8}><View style={styles.cartCircle}>
    
             <Text style={{fontSize:25, color:COLORS.white, alignItems:'center'}}>+</Text></View></TouchableOpacity>
         
 
       </View>
       </TouchableHighlight>
        
        )
    };

    return (
      <SafeAreaView >
          <View style={{marginTop:40, flexDirection:'row', paddingHorizontal:20}}>
          <View style={styles.inputContainer}>
              <Icon name='search' size={28} color={'#cccc'}/>
              <TextInput style={styles.searchInput} placeholder='search' placeholderTextColor={'gray'}/>

              </View>
              <TouchableOpacity><View style={styles.filterbtn}><Icon name='tune' size={28} color={COLORS.white}/></View></TouchableOpacity>
              
    
              </View>
              <View style={{marginTop:15,}}><ListOfCartegories/></View>
              <FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
              numColumns={2}
              data={Wine}
              renderItem={({item})=><Card Wine={item}/>}
              />
             
          </SafeAreaView>
          
    )
}

export default HomeScreen;
