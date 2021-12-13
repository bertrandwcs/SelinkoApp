import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigate } from "react-router-native";
import { useSelector } from "react-redux";
import InfoProduct from "./components/InfoProduct";
import { isEmpty } from "../utils/isEmpty";

const HomePage = () => {
  const [infoProduct, setInfoProduct] = useState({});

  const urlApi = "https://api.staging.genexir.selinko.com";
  const jwt = useSelector((state) => state.userReducer);
  let navigate = useNavigate();

  const handleNfcButton = () => {
    fetch(`${urlApi}/api/v2/authentication`, {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify({
        short_url: "https://api.staging.genexir.selinko.com/_g6XQ0fN07tD-95y",
        location: { lng: 2.3847, lat: 1.34848 },
      }),
      headers: {
        Accept: "application/json",
        Authorization: jwt,
        "Content-Type": "application/json",
        "X-Selinko-App": "<api key>",
      },
    })
      .then(async (response) => {
        if (response.status === 200) {
          let responseJson = await response.json();
          setInfoProduct(responseJson);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logoImage} />

      {isEmpty(infoProduct) ? (
        <Pressable onPress={handleNfcButton} style={styles.imagePressable}>
          <Image
            source={logoNfc}
            onPress={handleNfcButton}
            style={styles.logoNfc}
          />
        </Pressable>
      ) : (
        <InfoProduct data={infoProduct} />
      )}

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
  imagePressable: {
    height: 300,
    width: "80%",
    alignItems: "center",
  },
  logoNfc: {
    height: 300,
    width: "100%",
    top: 100,
    left: 7,
  },
  text: {
    color: "black",
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    top: 130,
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
