import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigate } from "react-router-native";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logoImage} />
      <Image source={logoNfc} style={styles.logoNfc} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigate("/")}>
          Return
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const logoImage = {
  uri: "https://www.liger-belair.fr/wp-content/uploads/2018/11/ligerbelair_logo.png",
};
const logoNfc = {
  uri: "https://key0.cc/images/small/22788_1f327f34cc0c183da5d5f87741afa2b9.png",
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECECEC",
    alignItems: "center",
    height: "100%",
  },
  logoImage: {
    resizeMode: "stretch",
    top: 20,
    height: "13%",
    width: "90%",
  },
  logoNfc: {
    height: 300,
    width: "80%",
    top: 100,
  },
  text: {
    color: "black",
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    top: 200,
    backgroundColor: "#333333",
    padding: 15,
    width: 100,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default HomePage;
