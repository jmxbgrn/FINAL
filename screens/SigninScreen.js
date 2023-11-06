import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import welcome from '../assets/images/WelcomeLogo.png'
import { AntDesign } from '@expo/vector-icons';

const SigninScreen = () => {
  const navigation = useNavigation()
  return (

    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate("login")}>
          <AntDesign style={styles.icon} name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}> <Image style={styles.image} source={welcome} /></View>
      <View style={styles.formContainer}>


        <Text style={styles.heading}>LOGIN USING GOOGLE ACCOUNT</Text>
        <Text style={styles.subheading}>-----Or continue with user/email-----</Text>
        <Text style={styles.subheading2}>Usename or Email address</Text>

        <TextInput style={styles.inputheader}
          placeholder="UserName"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          autoCapitalize="none"
          autoCorrect={false}


        />
        <Text style={styles.subheading3}>Password</Text>

        <TextInput style={styles.inputheader}
          placeholder="Password"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}


        />
      

<TouchableOpacity style={styles.buttonContainer} >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>

      </View>
    </View>

  );
};
export default SigninScreen;

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
    height: 200,
    width: 200,
    bottom: 60,

  },
  formContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    gap: 10,
    borderColor: 'black',


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
  inputheader: {
    backgroundColor: 'white',
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 40,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
    fontWeight: "bold",




  },
  heading: {
    bottom: 200,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,

  },
  subheading: {
    fontWeight: "bold",
    bottom: 210,
    


  },
  subheading2: {
    fontWeight: "bold",
  

  },
  subheading3: {
    fontWeight: "bold",
 
  },


});