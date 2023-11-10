import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import welcome from '../assets/images/WelcomeLogo.png'
import { AntDesign } from '@expo/vector-icons';

const RegisterScreen = () => {
  const navigation = useNavigation()
  return (

    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate("welcome")}>
          <AntDesign style={styles.icon} name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}><Image style={styles.image} source={welcome} /></View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Registration</Text>
        
        <TextInput style={styles.input}
          placeholder="Name"
          placeholderTextColor="rgba(0, 0, 0, 0.5)" 
          autoCapitalize="none"
          autoCorrect={false}
        />
         <TextInput style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(0, 0, 0, 0.5)" 
          autoCapitalize="none"
          autoCorrect={false}
        />
    
        <TextInput style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(0, 0, 0, 0.5)" 
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}

        />
        <TouchableOpacity style={styles.buttonContainer} >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

    

      </View>
    </View>

  );
};

export default RegisterScreen;

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
    gap: 10,
  },
  buttonContainer: {
    backgroundColor: 'white',
    width: '50%',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 40,
    elevation: 500,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',


  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 40,
    elevation: 500,
    textAlign: 'center',

  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 20,

  },
  buttonBack: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
  },

  backButtonContainer: {
    width: '100%',
    position: 'absolute',
    left: 20,
    top: 20,



  },


});



