import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../firebaseConfig";

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        }
        catch (error) {
            alert(error.message)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Welcome Back Saathi!</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.input}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput style={styles.input}
                    placeholder="Password"
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.appButtonContainer1}
                    onPress={() => loginUser(email. password)}
                >
                    <Text style={styles.appButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.appButtonContainer1}
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.logInText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    heading: {
        fontSize: 40,
        color: "#07411B",
        alignSelf: "center",
    },
    inputWrapper: {
        alignItems: "center",
        marginLeft: 50,
        marginTop: 40,
    },
    inpText: {
        color: "#34572F",
        fontSize: 15,
        alignSelf: "flex-start",
        marginTop: 14,
    },
    input: {
        backgroundColor: "#066B53",
        width: 250,
        alignSelf: "flex-start",
        height: 35,
        borderRadius: 10,
        marginTop: 8,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    buttonWrapper: {
        alignItems: "center",
        marginTop: 40,
    },
    appButtonContainer1: {
        backgroundColor: "#07411B",
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 10,
        width: 250,
    },
    appButtonText: {
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
    },
    logInText: {
        alignSelf: "center",
        marginTop: 25,
        fontSize: 15,
        marginBottom: 25,
    },
});

export default Login;
