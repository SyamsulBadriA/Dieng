import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Linking,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("10km");

  const handleLogin = () => {
    if (username === "" && password === "") {
      if (category === "20km") {
        navigation.navigate("20km");
      } else if (category === "10km") {
        navigation.navigate("10km");
      }
    }
  };

  const handleRegister = () => {
    Linking.openURL("https://diengcalderarace.com/register");
  };

  const handleForgotPassword = () => {
    Linking.openURL("https://diengcalderarace.com/forget_password");
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
    >
      {/* <View style={styles.container}> */}
      <Image
        source={require("../assets/logo-white.png")}
        style={{ width: 300, height: 100 }}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        editable={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={true}
      />
      <TouchableOpacity
        style={styles.forgotPassword}
        activeOpacity={0.8}
        onPress={handleForgotPassword}
      >
        <Text style={{ color: "white" }}>Forgot password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.optionalAuth}>Doesn't have an account ?</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.buttonRegister}
        onPress={handleRegister}
      >
        <Text style={styles.buttonTextRegister}>Register</Text>
      </TouchableOpacity>
      {/* </View> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    paddingTop: 20,
    color: "#fff",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#1f91c3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonRegister: {
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  optionalAuth: {
    color: "white",
    marginVertical: 20,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  buttonTextRegister: {
    color: "black",
    fontSize: 18,
  },
});

export default LoginScreen;
