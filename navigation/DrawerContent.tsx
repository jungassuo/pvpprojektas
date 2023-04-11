import React from 'react'
import {View, StyleSheet} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import DrawerSection from 'react-native-paper/lib/typescript/src/components/Drawer/DrawerSection'

export function DrawerContent(props:any){
    return(
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={[styles.userInfoSection, {flexDirection:'row'}]}>
                    <View style={{marginTop:15}}>
                        <Avatar.Image source={require('./test.jpg')}/>
                    </View>
                    <View style={{marginLeft:9,marginTop:15}}>
                        <Title style={styles.title}>Darbuotojas</Title>
                        <Caption style={styles.caption}>@testDarbuotojas</Caption>
                    </View>
                </View>
                <Drawer.Section style={{flex:1,marginTop:15}}>
                    <DrawerItem label="Pagrindinis" onPress={() => { props.navigation.navigate('Pagrindinis')}}/>
                    <DrawerItem label="Klausimyno puslapis" onPress={() => { props.navigation.navigate('Klausimynas') }} />
                    <DrawerItem label="Kuponu puslapis" onPress={() => { props.navigation.navigate('Kuponai') }} />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple>
                        <View style={styles.preference}>
                            <Text>Dark Mode</Text>
                            <Switch/>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <Drawer.Item label='Atsijungti' onPress={()=>{}}/>
        </Drawer.Section>
    </View>)
}

const styles = StyleSheet.create({
    row:{},
    caption:{},
    userInfoSection:{},
    title:{},
    drawerContent:{},
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },
    drawerSection:{
        marginTop:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:0
    }
})