import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground,Image} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const CustomButton = (props:any) => {

    const [isPressed, setPressed] = React.useState(false);

    const content = (
        <ImageBackground>
            <View >
                {isPressed ? <FontAwesome5
                    name={"clock"}
                    size={140}
                    color={"white"}
                    style={styles.button}
                    
                /> : 
                    <AntDesign
                    name={"pluscircle"}
                    size={140}
                    color={"white"}
                    style={styles.button}
                />}
            </View>
        </ImageBackground>
    )
    if(isPressed){
        return <ImageBackground>{content}</ImageBackground>
    }else{
    return <TouchableOpacity onPress={() => {if(!isPressed){setPressed(!isPressed); props.onPress()}}}>{content}</TouchableOpacity>
}
}

const styles = StyleSheet.create({
    button:{
        padding:16,
        width:180,
        height:180,
        borderRadius:15,
        position: 'relative',
        margin: 0,
        left: 110,
    },
    text:{
        color: 'white',
    }
})

export default CustomButton