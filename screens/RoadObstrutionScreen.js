import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const RoadObstructionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/Stray2.jpg")}
        />
        <View style={styles.personIconContainer}>
 

          <Ionicons
            style={styles.personIcon}
            name="person-circle-outline"
            size={24}
            color="black" 
          />
          <Text>ROAD OBSTRUCTION</Text>

        </View>
      </View>
      <Text style={styles.header}>ROAD OBSTRUCTION</Text>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <AntDesign
            style={styles.icon}
            name="left"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

export default RoadObstructionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EADCC1",
  },
  header: {
    backgroundColor: "black",
    paddingVertical: 20,
    textAlign: "center",
    color: "white",
    fontSize: 25,
    bottom:470,
    
  },
  imageContainer: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingBottom: 30,
    paddingTop: 40,
    position: "relative", // Ensure child views are positioned relative to this container
    bottom:70,
  },
  image: {
    height: 200,
    width: 350,
  },
  personIconContainer: {
    position: "absolute",
    top: 5, // Adjust as needed
    left: 15, // Adjust as needed
  },
  personIcon: {},
  backButtonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  buttonBack: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    
  },
  backButtonContainer:{
    width: "100%",
    position: "absolute",
    left: 20,
    top: 20,
  },
});
