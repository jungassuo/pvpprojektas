import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function AuthScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    function handleLogin() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('Pagrindinis'))
            .catch(error => console.log(error));
    }

    function handleRegister() {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('Pagrindinis'))
            .catch(error => console.log(error));
    }

    return (
        <View style={styles.container}>
            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button mode="contained" onPress={handleLogin}>Login</Button>
            <Button mode="outlined" onPress={handleRegister}>Register</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        marginBottom: 10,
    },
});
