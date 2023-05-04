import { GestureResponderEvent } from "react-native";

export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
    Login:undefined
};

export type BottomTabParamList = {
    TabOne: undefined;
    TabTwo: undefined;
};

export type TabOneParamList = {
    TabOneScreen: undefined;
};

export type DrawerParamList = {
    Database: undefined;
    FileSystem: undefined;
    Clients: undefined;

    Pagrindinis: undefined;
    Klausimynas:undefined;
    Kuponai: undefined;
};

export type DatabaseParamList = {
    DatabaseScreen: undefined;
};

export type FileSystemParamList = {
    FileSystemScreen: undefined;
};

export type ClientsParamList = {
    ClientsScreen: undefined;
};

export type onPressFunc = (event: GestureResponderEvent) => void;

export type CardItemT = {
    description?: string;
    hasActions?: boolean;
    hasVariant?: boolean;
    image: any;
    isOnline?: boolean;
    matches?: string;
    name: string;
};

export type IconT = {
    name: any;
    size: number;
    color: string;
    style?: any;
};

export type MessageT = {
    image: any;
    lastMessage: string;
    name: string;
};

export type ProfileItemT = {
    age?: string;
    info1?: string;
    info2?: string;
    info3?: string;
    info4?: string;
    location?: string;
    matches: string;
    name: string;
};

export type TabBarIconT = {
    focused: boolean;
    iconName: any;
    text: string;
};

export type DataT = {
    id: number;
    name: string;
    isOnline: boolean;
    match: string;
    description: string;
    message: string;
    image?: any;
    age?: string;
    info1?: string;
    info2?: string;
    info3?: string;
    info4?: string;
    location?: string;
};