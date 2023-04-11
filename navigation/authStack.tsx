import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/ClientsScreen';
import SignInScreen from '../screens/DatabaseScreen';
import SignOutScreen from '../screens/FileSystemScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Sign In" component={SignInScreen} />
                <Stack.Screen name="Sign Up" component={SignOutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}