import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import welcome from '../assets/images/WelcomeLogo.png'
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = () => {
  const navigation = useNavigation()
  return (

    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate("welcome")}>
          <AntDesign style={styles.icon} name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}> <Image style={styles.image} source={welcome} /></View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>LOGIN YOUR ACCOUNT</Text>
        <Text style={styles.subheading} >Email</Text>
        <TextInput style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.subheading} >Password</Text>
        <TextInput style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}

        />
        <TouchableOpacity style={styles.buttonContainer} >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("signin")} >
          <Text style={styles.Googlebutton}>LOGIN USING YOUR GOOGLE ACCOUNT</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default LoginScreen;

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
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: 'Poppin',
  },
  subheading: {
    fontSize: 20,
    fontFamily: 'Poppin',

  },
  buttonBack: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  backButtonContainer: {
    width: '100%',
    position: 'absolute',
    left: 20,
    top: 20,



  },
  Googlebutton: {
    backgroundColor: 'white',
    textAlign: 'center',
    fontWeight: "bold",
    top: 50,
    borderRadius: 10,
    paddingHorizontal:10,
    paddingBottom:10,
    paddingTop:10,

  },

});


