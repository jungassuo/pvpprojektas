
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import firebase from 'firebase/app'

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore,collection,getDocs} from 'firebase/firestore'

import DatabaseScreen from './DatabaseScreen';

const firebaseConfig = {
    apiKey: "AIzaSyAdaI9e629Jl6eyQC4zbofYjpvVkBXF_oo",
    authDomain: "cleanngo-app.firebaseapp.com",
    projectId: "cleanngo-app",
    storageBucket: "cleanngo-app.appspot.com",
    messagingSenderId: "675105109279",
    appId: "1:675105109279:web:50672e93ce4a6f07fcec2a",
    measurementId: "G-3B6XWL546G"
};

const LoginScreen = () =>{

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState<any[]>([])

    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    const coll = collection(db,"users")
    getDocs(coll).then((data)=>{
        let users:any[] = []
        data.docs.forEach((doc)=>{
            users.push({...doc.data(),id:doc.id})
        })
        setUsers(users)
    }).catch(err=>{
        console.log(err)
    })

    const navigation = useNavigation()
    useEffect(() => {
        // const unsubscribe = auth.onAuthStateChanged(user => {
        //     if (user) {
        //         navigation.navigate("Root")
        //     }
        // })

        // return unsubscribe
    }, [])

    const handleSignUp = () => {
        
        const auth = getAuth(app)
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const handleLogin = () => {
        const auth = getAuth(app)
        signInWithEmailAndPassword(auth, email, password).then((auth)=>{
            if(auth.user!==null){
                console.log("pavyko")
                navigation.navigate('Root')
            }
        }).catch((error) =>{
            const errorCode = error.code;
        const errorMessage = error.message;
    })
    }



    return(
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}


export default LoginScreen

const styles = StyleSheet.create({
                container: {
                flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
  },
            inputContainer: {
                width: '80%'
  },
            input: {
                backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 5,
  },
            buttonContainer: {
                width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
  },
            button: {
                backgroundColor: '#0782F9',
            width: '100%',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
  },
            buttonOutline: {
                backgroundColor: 'white',
            marginTop: 5,
            borderColor: '#0782F9',
            borderWidth: 2,
  },
            buttonText: {
                color: 'white',
            fontWeight: '700',
            fontSize: 16,
  },
            buttonOutlineText: {
                color: '#0782F9',
            fontWeight: '700',
            fontSize: 16,
  },
})