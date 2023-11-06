import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import welcome from '../assets/images/WelcomeLogo.png'

const WelcomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
             
        <TouchableOpacity onPress={() => navigation.navigate("login")} >
            <Text>button</Text>
            </TouchableOpacity>
        </View>

    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EADCC1',

    },
    imageContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 400,
        width: 300,
    },
    formContainer: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: 'white',
        width: '50%',
        paddingHorizontal: 50,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 40,
        elevation: 500,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',


    },



});
