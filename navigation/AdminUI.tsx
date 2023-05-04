import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomButton from '../components/CustomButton'
import * as React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";

import * as MediaLibrary from 'expo-media-library';
import CheckboxTreeScreen from './test'

import { ImageBackground, Button, Pressable, Image, ActivityIndicator } from 'react-native';

import DatabaseScreen from '../screens/DatabaseScreen';
import FileSystemScreen from '../screens/FileSystemScreen';
import ClientsScreen from '../screens/ClientsScreen';
import { DrawerParamList, DatabaseParamList, FileSystemParamList, ClientsParamList } from '../types';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import * as ImagePicker from 'expo-image-picker'
import { DrawerContent } from './DrawerContent';
import { Avatar, Caption, Title } from 'react-native-paper';

import AppLoading from 'expo-app-loading';

// import { Image } from 'expo-image';
import { createRef, useMemo, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TinderCard from 'react-tinder-card';
import Text from '../components/Text';
import { PROFILE_MOCKS } from '../constants/Constants';
import { height } from 'react-native-size-scaling';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props: any) => <DrawerContent {...props} />}
            screenOptions={({ navigation }: any) => ({
                headerShown: true,
                headerTransparent: true,
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: '',
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
    container: {
        flex: 1,
        textAlign: 'center',
    },
    title: {
        fontSize: 34,
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 16,
        color: '#4d4d4d',
        marginBottom: 15,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: -15,
    },
    actionButton: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#e8e6eb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        padding:10,
        // marginTop:20,
        marginBottom:30,
        position:'relative'
    },
    cardTextContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    cardText: {
        color: '#fff',
        fontSize: 26,
    },
    cardTextDesc: {
        color: '#fff',
        fontSize: 16,
    },
    card: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 20,
    },
    cardTitle: {
        position: 'absolute',
        bottom: 0,
        margin: 10,
        color: '#fff',
    },
    image: {
        flex: 1,
        width: '100%',
        borderRadius: 20,
        justifyContent: 'center',
    },
    buttons: {
        marginTop: 10,
        padding:15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
    },
    heartIcon: {
        backgroundColor: '#e94057',
        borderRadius: 50,
        padding: 10,
    },
    secondIcon: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 10,
    },
    points: {
        paddingBottom: 20,
    },
    button: {
        marginBottom: 30,
        marginTop: 30,
        borderColor: 'white',
        borderWidth: 3,
        width: 200,
        marginLeft: 110
    },
    buttonText: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 25,
        color: 'white',
        fontFamily: 'Roboto',
        textAlign: 'center'
    },
    scoreText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        paddingTop: 80,
        paddingBottom: 20
    },
    caption: {
        color: 'white'
    },
    userInfoSection: {
        color: 'white'
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
    SpinnerView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonsComponent:{
        position:'absolute',
        bottom:0,
        width: '100 %',
        height: 100,
    }
});


function DatabaseNavigator({ navigation }: any) {

    const [profile, setProfile] = React.useState(PROFILE_MOCKS);
    const [removed, setRemoved] = React.useState<number[]>([]);

    const refs = React.useMemo(
        () =>
            Array(profile.length)
                .fill(0)
                .map((_) => React.createRef<number>()),
        [profile],
    );

    const swiped = (id: number) => {
        setRemoved([...removed, id]);
    };

    const outOfFrame = (id: number) => {
        setProfile((profile) =>
            profile
                .filter((person) => person.id !== id)
                .filter((person) => !removed.includes(person.id)),
        );
    };

    const swipe = (dir: 'right' | 'left' | 'up' | 'down') => {
        const cardsLeft = profile.filter((person) => !removed.includes(person.id));
        if (cardsLeft.length) {
            const toSwipe = profile[profile.length - 1].id;
            const index = profile.map((profile) => profile.id).indexOf(toSwipe);
            if (!refs[index].current) return;
            // @ts-ignore
            refs[index].current.swipe(dir);
            setRemoved([...removed, toSwipe]);
        }
    };

    const reset = () => {
        setProfile(PROFILE_MOCKS);
        setRemoved([]);
    };

    const responsiveHeight = Dimensions.get('window').height;


    let n = 0;

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/backgroundNuotrauka.png')} resizeMode="cover" style={styles.image} >
            <View style={[styles.cardContainer,{height: responsiveHeight - 180,},]}>
                {profile.length !=0 ? profile.map((profile, index) => (
                    <TinderCard
                        ref={refs[index] as any}
                        key={profile.id}
                        onSwipe={() => swiped(profile.id)}
                        onCardLeftScreen={() => outOfFrame(profile.id)}
              
                    >
                        <View
                            style={[
                                styles.card,
                                {
                                    height: responsiveHeight - 100,
                                },
                            ]}
                        >
                            <Image style={styles.image} source={require(`../assets/vienas.jpg`)} />
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardText} variant="bold">
                                    {profile.name}, {profile.age}
                                </Text>
                                <Text style={styles.cardTextDesc}>{profile.description}</Text>
                            </View>
                        </View>
                    </TinderCard>
                )) : <View style={styles.SpinnerView}>
                            <ActivityIndicator size="large" color="white" />
                            <Text style={styles.buttonText}>Laukiama atnaujinimu</Text>
                            <View>
                                <TouchableOpacity onPress={() => reset()}>
                                    <Icon
                                        style={styles.secondIcon}
                                        name="restart"
                                        size={40}
                                        color={'#e94057'}
                                    />
                                </TouchableOpacity>
                            </View>
                </View>
                }
            </View>
            </ImageBackground>
        </View>
    )
}

function Profilis({ navigation }: any) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/backgroundNuotrauka.png')} resizeMode="cover" style={styles.image} >
                <View style={{ flexDirection: 'row', marginLeft: 80, paddingBottom: 0 }}>
                    <View style={{ marginTop: 15 }}>
                        <Avatar.Image source={require('./test.jpg')} />
                    </View>
                    <View style={{ marginLeft: 15, marginTop: 15 }}>
                        <Title style={styles.title}>Tadas Ivanauskas</Title>
                        <Caption style={styles.caption}>ADMINISTRATORIUS</Caption>
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
                <View>

                </View>
            </ImageBackground>
        </View>
    )
}
