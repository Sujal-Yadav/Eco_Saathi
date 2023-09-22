import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button,
} from "react-native";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../firebaseConfig";

const SignUp = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    signinUser = async (email, password) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch (error) {
            alert(error.message)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backButton}>
                <TouchableOpacity >
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Create Account With Email</Text>
            <View style={styles.inputWrapper}>
                <Text style={styles.inpText}>Your Email:</Text>
                <TextInput style={styles.input} 
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                />
                <Text style={styles.inpText}>Choose Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.appButtonContainer1} onPress={SignUp}>
                    <Text> </Text>
                </TouchableOpacity>
                <Text style={styles.logInText}>Already Have an account? Log in</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backButton: {
        justifyContent: 'flex-start',
        alignContent: "flex-start",
    },
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
        backgroundColor: "#07411B"
    },
    logInText: {
        alignSelf: "center",
        marginTop: 25,
        fontSize: 15,
        marginBottom: 25,
    },
});

export default SignUp;