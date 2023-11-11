import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const RoadObstructionScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
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
          <Text style={styles.header}>IN PROGRESS</Text>
        </View>

        {/* First Image Container */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/waste2.jpg")}
          />
          <Text style={styles.pertext}>"GARBAGE IN THE ROAD</Text>
          <Text style={styles.perotext}>In Progress</Text>
          <View style={styles.personIconContainer}>
            <Ionicons
              style={styles.personIcon}
              name="person-circle-outline"
              size={24}
              color="red"
            />
            <Text style={styles.personicaontext}>50 mins ago.</Text>
            <Text style={styles.personicaontext}>2nd St.</Text>
          </View>
        </View>

        {/* Second Image Container */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/deadanimal.jpg")}
          />
          <Text style={styles.pertext}>"DEAD ANIMAL"</Text>
          <Text style={styles.perotext}>In Progress</Text>
          <View style={styles.personIconContainer}>
            <Ionicons
              style={styles.personIcon}
              name="person-circle-outline"
              size={24}

              color="red"
            />
            <Text style={styles.personicaontext}>1 hour ago.</Text>
            <Text style={styles.personicaontext}>3rd St.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EADCC1",
  },
  headerContainer: {
    backgroundColor: "black",
    paddingHorizontal: 150,
    padding: 20,
    fontWeight: "bold",
    marginLeft: -30,
    marginRight: -30,
    
  },
  header: {
    textAlign: "center",
    color: "white",
  },
  imageContainer: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingBottom: 30,
    paddingTop: 40,
    marginTop: 20, // Add spacing between image containers
  },
  image: {
    height: 200,
    width: 350,
  },
  personIconContainer: {
    position: "absolute",
    top: 5,
    left: 15,
  },
  personIcon: {},
  pertext: {
    fontWeight: 'bold',
    marginTop: 10,
    color: 'red',
    fontSize: 12,
  },
  perotext: {
    fontStyle: 'italic',
    color: 'green',
  },
  personicaontext: {
    bottom: 20,
    left: 25,
    fontSize: 10,
  },
  backButtonContainer: {
    width: "100%",
    position: "absolute",
    left: 10,
    top: 5,
  },
  buttonBack: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default RoadObstructionScreen;
