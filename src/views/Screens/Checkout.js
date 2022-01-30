import React, { useState } from "react";
import { SafeAreaView, View, Text,StyleSheet, TextInput} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../assets/CompoundConst/Colors";
import { PriButton } from "../Component/Buttons";


const styles= StyleSheet.create({
    header:{
        flexDirection:'row',
        paddingVertical:15,
        alignItems:'center',
        marginHorizontal:20,
    },
    inputText:{
        width:350,
        height:50,
        borderRadius:25,
        backgroundColor:COLORS.white,
        marginVertical:15,
        paddingHorizontal:15,
        fontSize:14,

    },
})
const Checkout =({navigation})=>{

    const [UserName, setUserName]=useState('');
    const [UserPhone, setUserPhone]=useState('');
    const [UserEmail, setUserEmail]=useState('');
    const [UserAddress, setUserAddress]=useState('');
    const [UserCity, setUserCity]=useState('');
    const [UserState, setUserState]=useState('');


const FillAllInput=()=>{
    if(!UserName){
        alert('please enter name')
        return;
     
    }
    if(!UserPhone){
        alert('please enter phone number')
        return;
     
    }
    if(!UserEmail){
        alert('please enter Email')
        return;
     
    }
    if(!UserAddress){
        alert('please enter address')
        return;
     
    }
    if(!UserCity){
        alert('please enter city')
        return;
     
    }
    if(!UserState){
        alert('please enter State')
        return;
     
    }
    
    
}


    return(
    <SafeAreaView style={{flex:1,}}>
        <View style={styles.header}>
            <Icon name='arrow-back-ios' size={28} onPress={navigation.goBack} />
               <Text style={{fontSize:20,fontWeight:'bold'}}>Checkout</Text>
           </View>
           <View style={{padding:20,}}>
               <Text style={{fontSize:16, fontWeight:'bold'}}>Personal Details</Text>
               <View>
                   <TextInput placeholder="Name"  style={styles.inputText} onChange={(value)=>setUserName(value)}/>
                   <TextInput placeholder="Phone number"  style={styles.inputText} onChange={(value)=>setUserPhone(value)}/>
                   <TextInput placeholder="Email"  style={styles.inputText} onChange={(value)=>setUserEmail(value)}/>
               </View>
               <Text style={{fontSize:16, fontWeight:'bold'}}>Delivery Details</Text>
               <View style={{marginVertical:20}}>
                   <TextInput placeholder="street address"  style={styles.inputText} onChange={(value)=>setUserAddress(value)}/>
                   <TextInput placeholder="city"  style={styles.inputText} onChange={(value)=>setUserCity(value)}/>
                   <TextInput placeholder="state"  style={styles.inputText} onChange={(value)=>setUserState(value)}/>
               </View>
               <PriButton title="Continue" onPress={FillAllInput}/>
           </View>
    </SafeAreaView>
    )
}
export default Checkout;