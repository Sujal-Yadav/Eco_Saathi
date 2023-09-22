import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import MainApp from './App';

const firebaseConfig = {
    apiKey: "AIzaSyD49I60_bEvpt1p4INCnu1GNujdS4ytMxY",
    authDomain: "eco-saathi.firebaseapp.com",
    projectId: "eco-saathi",
    storageBucket: "eco-saathi.appspot.com",
    messagingSenderId: "660356380091",
    appId: "1:660356380091:web:ec15b3be49c33e91b1809e"
};
AppRegistry.registerComponent(appName, () => MainApp);

export default firebaseConfig;


