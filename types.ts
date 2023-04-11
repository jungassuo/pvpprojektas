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