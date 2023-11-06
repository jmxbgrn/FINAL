import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <View style={styles.formContainer}>
                <Text style={styles.text}>DASHBOARD</Text>

                <Text style={styles.text2}>Search by Category</Text>

                <TouchableOpacity style={styles.buttonContainer}onPress={() => navigation.navigate("road")} >
                    <Text style={styles.buttonText } >ROAD OBSTRUCTION</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>STRAY ANIMAL</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>WASTE MANAGEMENT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>OTHERS</Text>
                </TouchableOpacity>


            </View>
        </View>

    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: StatusBar.currentHeight

        
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
       
    },
    buttonContainer: {
        bottom:470,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        borderWidth: 0,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        width: 370,
        height: 50,


    },
    buttonText: {
     
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        margin: 10,
        marginLeft: 10,
        justifyContent: 'center',
        padding: 10,
        width: 370,
        height: 50,



    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop:50,
    },
    text2: {
        paddingLeft:10,
        fontSize: 25,
marginBottom:500,

    },
 

});
