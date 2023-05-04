import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomButton from '../components/CustomButton'
import * as React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";

import * as MediaLibrary from 'expo-media-library';
import CheckboxTreeScreen from './test'

import { StyleSheet, Text, View, ImageBackground,Button, Pressable, TouchableOpacity,Image } from 'react-native';

import DatabaseScreen from '../screens/DatabaseScreen';
import FileSystemScreen from '../screens/FileSystemScreen';
import ClientsScreen from '../screens/ClientsScreen';
import { DrawerParamList, DatabaseParamList, FileSystemParamList, ClientsParamList } from '../types';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import * as ImagePicker from 'expo-image-picker'
import {DrawerContent} from './DrawerContent';
import { Avatar, Caption, Title } from 'react-native-paper';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props:any)=><DrawerContent {...props}/>}
      screenOptions={({ navigation }:any) => ({
        headerShown: true,
        headerTransparent:true,
        headerStyle:{
          elevation:0,
          shadowOpacity:0,
        },
        headerTitle:'',
        headerLeft: () => {
          return (
            <>
              <Pressable onPress={() => navigation.openDrawer()}>
                <Ionicons
                  name={"md-menu"}
                  size={45}
                  color={"white"}
                  style={{ marginLeft: 10 }}
                />
              </Pressable>
            </>
          );
        },
        headerRight: () => {
          return (
            <>
              <Pressable onPress={() => navigation.navigate('Profilis')}>
                <FontAwesome
                  name={"user-o"}
                  size={30}
                  color={"white"}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            </>
          );
        },

      })}
    >
      <Drawer.Screen
        name="Pagrindinis"
        component={DatabaseNavigator}
        />
      <Drawer.Screen
        name="Profilis"
        component={Profilis}
      />
      <Drawer.Screen
        name="Klausimynas"
        component={FileSystemNavigator}
      />
      <Drawer.Screen
        name="Kuponai"
        component={ClientsNavigator}
      />
    </Drawer.Navigator>
  );
}

const DatabaseStack = createStackNavigator();

const styles = StyleSheet.create({
  points:{
    paddingBottom:20,
  },
  button:{
    marginBottom:30,
    marginTop:30,
    borderColor: 'white',
    borderWidth: 3,
    width:200,
    marginLeft:110
  },
  buttonText:{
    marginTop:5,
    marginBottom:5,
    fontSize:25,
    color:'white',
    fontFamily:'Roboto',
    textAlign:'center'
  },
  KuponoTekstas:{
    marginTop: 50,
    marginBottom: 150,
    fontSize: 35,
    color: 'white',
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  scoreText:{
    fontSize:25,
    textAlign:'center',
    color:'white',
    paddingTop:80,
    paddingBottom:20
  },
  container: {
    flex: 1,
    textAlign:'center'
  },
  caption: {
    color: 'white'
  },
  userInfoSection: {
    color:'white'
  },
  title: {
    color:'white'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  KuponoImage:{
    height:80,
    width:80,
    borderRadius: 20
  },
  KuponoKaina:{
    position:'absolute',
    width:80,
    bottom:0,
    height:'25%',
    textAlign:'center',
    fontWeight:'bold',
    backgroundColor:'white',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  image1: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  KuponuPuslapioView:{
    alignItems: "center",
    width:380,
    height:500,
    margin:15,
  },
  Kuponas: {
    height: 80,
    width: 80,
    borderRadius: 20,
    margin: 15,
    position:'relative',
  },
  
  KuponuViewas:{
    display:'flex',
    flexDirection:'row'
  }
});

const SaveToPhone = async(item:any) =>{
  const permission = await MediaLibrary.requestPermissionsAsync();
  if(permission.granted){
    try{
      const asset = await MediaLibrary.createAssetAsync(item);
      MediaLibrary.createAlbumAsync('Images',asset,false).then(()=>{
        console.log('File Saved');
      }).catch(()=>{
        console.log('Error while saving the file')
      })
    }catch(error){
      console.log(error)
    }
  }
}

const takeImage = async () => {
  let res = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [1,1],
    quality: 1,
  })
  if(!res.canceled){
    let newFile ={
      uri:res.assets[0].uri,
      type:res.assets[0].type,
      name: `test.${res.assets[0].uri.split("%")[1]}`,
    }
       SaveToPhone(newFile.uri)
  }
}

const pickImage = async () => {
  let res = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  })
}


function DatabaseNavigator({navigation}:any) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/backgroundNuotrauka.png')} resizeMode="cover" style={styles.image} >
        <CustomButton onPress={() => {
          takeImage()
        }}/>

      </ImageBackground>
    </View>
  )
}

function Profilis({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/backgroundNuotrauka.png')} resizeMode="cover" style={styles.image} >
        <View style={{flexDirection:'row',marginLeft:80,paddingBottom:0}}>
          <View style={{ marginTop: 15 }}>
            <Avatar.Image source={require('./test.jpg')} />
          </View>
          <View style={{ marginLeft: 15, marginTop: 15 }}>
            <Title style={styles.title}>Tadas Ivanauskas</Title>
            <Caption style={styles.caption}>DARBUOTOJAS</Caption>
          </View>
        </View>
        <View style={styles.points}>
          <Text style={styles.scoreText}>Mano Taškai: 16</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>NUSTATYMAI</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>INSTRUKCIJOS</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>D.U.K</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

function FileSystemNavigator() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/backgroundNuotrauka.png')} resizeMode="cover" style={styles.image} >
      </ImageBackground>
    </View>
  )
}

function ClientsNavigator() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/backgroundNuotrauka.png')} resizeMode="cover" style={styles.image} >
        <View style={styles.KuponuPuslapioView}>
          <Text style={styles.KuponoTekstas}>
            Turimi taškai: 16
          </Text>
          <View style={styles.KuponuViewas}>
            <TouchableOpacity style={styles.Kuponas}>
            <Image style={styles.KuponoImage} source={require('../assets/unnamed.png')} />
            <Text style={styles.KuponoKaina}>20 💰</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Kuponas}>
              <Image style={styles.KuponoImage} source={require('../assets/unnamed1.png')} />
              <Text style={styles.KuponoKaina}>25 💰</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Kuponas}>
              <Image style={styles.KuponoImage} source={require('../assets/unnamed2.png')} />
              <Text style={styles.KuponoKaina}>50 💰</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.KuponuViewas}> 
            <TouchableOpacity style={styles.Kuponas}>
              <Image style={styles.KuponoImage} source={require('../assets/unnamed3.jpg')} />
              <Text style={styles.KuponoKaina}>5 💰</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Kuponas}>
              <Image style={styles.KuponoImage} source={require('../assets/unnamed4.jpg')} />
              <Text style={styles.KuponoKaina}>10 💰</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Kuponas}>
              <Image style={styles.KuponoImage} source={require('../assets/unnamedPro.png')} />
              <Text style={styles.KuponoKaina}>100 💰</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
