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
        <View style={styles.imageContainer}>
        
          <Image
            style={styles.image}
            source={require("../assets/images/roadobstruction2.jpg")}
            
          />
        
             <Text>"RoadObstruction"</Text>

          <View style={styles.personIconContainer}>
            <Ionicons
              style={styles.personIcon}
              name="person-circle-outline"
              size={24}
              color="black"
            />
            <Text style={styles.personicaontext}>50 mins ago.</Text>
            <Text style={styles.personicaontext}>2nd St.</Text>
          </View>
        </View>
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
          <Text style={styles.header}>ROAD OBSTRUCTION</Text>
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
  imageContainer: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingBottom: 30,
    paddingTop: 40,
    position: "relative",
    bottom: 100,
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
  backButtonContainer: {
    width: "100%",
    position: "absolute",
    left: 10,
    top: 5,
  },
  personicaontext: {
    bottom: 20,
    left: 25,
    fontSize: 10,
    fontWeight: "bold",
  },
  headerContainer: {
    backgroundColor: "black",
    bottom: 470,
    paddingHorizontal: 120,
    padding: 20,
    fontWeight: "bold",
  },
  header: {
    textAlign: "center",
    color: "white",
  },
});

export default RoadObstructionScreen;
