import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigate } from "react-router-native";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/actions/user.action";

const LoginPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const urlApi = "https://api.staging.genexir.selinko.com";

  const [emails, setEmail] = useState("");
  const [passwords, setPassword] = useState("");

  const handleClick = () => {
    fetch(`${urlApi}/api/v2/sessions`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        accept: "application/json",
        "X-Selinko-App": "<api key>",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: passwords,
        email: emails,
      }),
    })
      .then(async (response) => {
        if (response.status === 201) {
          let responseJson = await response.json();
          dispatch(getUser(responseJson.data.jwt));
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ImageBackground source={image} style={styles.imageBackground}>
      <Image source={logoImage} style={styles.logoImage} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login to Selinko App</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="E-mail"
          value={emails}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
          value={passwords}
          onChangeText={(text) => setPassword(text)}
        />
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleClick}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const image = {
  uri: "https://www.liger-belair.fr/wp-content/uploads/2018/11/img_home-1.jpg",
};

const logoImage = {
  uri: "https://www.liger-belair.fr/wp-content/uploads/2018/11/ligerbelair_logo.png",
};
const styles = StyleSheet.create({
  imageBackground: {
    resizeMode: "cover",
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  logoImage: {
    resizeMode: "stretch",
    top: 20,
    height: "13%",
    width: "90%",
  },
  formContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#333333",
    bottom: 100,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#333333",
    padding: 15,
    width: 100,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default LoginPage;
