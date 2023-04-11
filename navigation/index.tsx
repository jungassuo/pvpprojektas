import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import DrawerNavigator from './DrawerNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import LoginScreen from '../screens/LoginScreen'

import AuthScreen from './AuthScreen';

import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
//import firebase from 'firebase/app';
import 'firebase/auth';

import { useAuthentication } from '../hooks/useauthentification';

const firebaseConfig = {
  apiKey: "AIzaSyAdaI9e629Jl6eyQC4zbofYjpvVkBXF_oo",
  authDomain: "cleanngo-app.firebaseapp.com",
  projectId: "cleanngo-app",
  storageBucket: "cleanngo-app.appspot.com",
  messagingSenderId: "675105109279",
  appId: "1:675105109279:web:50672e93ce4a6f07fcec2a",
  measurementId: "G-3B6XWL546G"
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="Root" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





// function RootNavigator() {

//   //const { user } = useAuthentication();

//   // const {user} = auth
//   // console.log(user)
//   // const user = firebase.auth().currentUser;

//   // function handleLogin() {
//   //   firebase.auth().signInWithEmailAndPassword(email, password)
//   //     .then(() => navigation.navigate('Home'))
//   //     .catch(error => console.log(error));
//   // }

//   // function handleRegister() {
//   //   firebase.auth().createUserWithEmailAndPassword(email, password)
//   //     .then(() => navigation.navigate('Home'))
//   //     .catch(error => console.log(error));
//   //}
    
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Login" component={LoginScreen} /> 
//       <Stack.Screen name="Root" component={DrawerNavigator} /> 
//     </Stack.Navigator>
//     // <Stack.Navigator screenOptions={{headerShown: false}}>

//     //   {/* {user ? (
//     //     <Stack.Screen name="Root" component={DrawerNavigator} />
//     //   ): (
//     //       <Stack.Screen name="Auth" component={AuthScreen} />
//     //     )} */}
      
//     //   {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> */}
//     //   {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
//     // </Stack.Navigator>
//   );
// }
