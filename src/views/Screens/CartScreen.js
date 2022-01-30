import React from 'react'
import {Text, View,StyleSheet, FlatList,Dimensions, Image,TextInput,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../assets/CompoundConst/Colors'
import Icon from "react-native-vector-icons/MaterialIcons";
import Wine from '../../assets/CompoundConst/Wine';
import COLORS from '../../assets/CompoundConst/Colors';
import { Button } from 'react-native-web';
import { ApplyButton, PriButton } from '../Component/Buttons';

const {height}=Dimensions.get('screen')
const cardHeight= height -20;


const styles= StyleSheet.create({
    header:{
        flexDirection:'row',
        paddingVertical:15,
        alignItems:'center',
        marginHorizontal:20,
    },

    cartCard:{
        flexDirection:'row',
        paddingHorizontal:15,
        alignItems:'center',
        paddingVertical:15,
        marginHorizontal:15,
        marginVertical:15,
        width:350,
        height:130,
         backgroundColor:COLORS.white,
         elevation:15,
         

    
    },
    circleImage:{
        width:70,
        height:70,
        borderRadius:70/2,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
       
    },


})

const CartScreen =({navigation})=> {

    const CartCard =({item})=>{
        return(
        
            <View style={styles.cartCard}>
                <View style={styles.circleImage}>
                    <Image source={item.image} style={{resizeMode:'cover',width:70, height:70,borderRadius:70/2,}}/>
                </View>
                <View style={{marginLeft:15,flex:1, paddingVertical:20,height:100}}>
                    
                    <Text style={{fontWeight:'bold', fontSize:16}}>{item.name}</Text>
                    <Text style={{fontWeight:'bold', fontSize:13, color:COLORS.gray}}>{item.Caterory}</Text>
                    <Text style={{fontWeight:'bold', fontSize:17, marginVertical:10}}>{'\u20A6'}{item. mainPrice}</Text>
                  
                </View>
                <View style={{marginRight:1, alignItems:'center',}}>
                        <Text style={{color:'red', marginTop:10}}>Remove</Text>
                        <View style={{flexDirection:'row', marginTop:28}}><Icon name='remove' size={20} color='grey'/><Text style={{fontSize:18, fontWeight:'bold', paddingHorizontal:10}}>3</Text><Icon name='add' size={20} color='grey'/></View>

                    </View>
            </View>
        
        )
    }
    return (
      <SafeAreaView style={{flex:1,}}>
        
            <View style={styles.header}>
            <Icon name='arrow-back-ios' size={28} onPress={navigation.goBack} />
               <Text style={{fontSize:20,fontWeight:'bold'}}>Cart</Text>
           </View>
           <FlatList showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:80,}}
            data={Wine}
            renderItem={({item})=><CartCard item={item}/>}
            ListFooterComponent={{paddingHorizontal:20, marginTop:20,}}
            ListFooterComponent={()=>(
                <View style={{padding:20}}>
                    <View >
                        <Text style={{fontSize:16}}>Coupon Code</Text>
                        <View style={{flex:1,flexDirection:'row',width:250, height:35, borderRadius:10, backgroundColor:'#FDEFEF',paddingHorizontal:15, justifyContent:'space-between', marginVertical:10}}>
                            <TextInput placeholder='Enter code' style={{}}/>
                            <ApplyButton title="Apply" />
                        </View>
                       
                    </View>

                        <View style={{flexDirection:'row', marginVertical:20, justifyContent:'space-between', paddingHorizontal:15,}}>
                            <Text style={{fontWeight:'bold', fontSize:18, color:'red'}}>Total</Text>
                            <Text style={{fontSize:18, }}>{'\u20A6'}24,4455</Text>
                        </View>
                   <PriButton title="Pay" onPress={()=>navigation.navigate('CheckoutScreen')}/>
                       
                    
                </View>
            )}
           />
    
        
      </SafeAreaView>
    )
}

export default CartScreen;
