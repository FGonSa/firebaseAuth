import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const navigation = useNavigation()

/*
El código comienza declarando una función de devolución de llamada para manejar los cambios en la autenticación del usuario. 
Cuando un usuario inicia sesión, se ejecuta la función y si existe el usuario, se utiliza la función navigation.replace 
para redirigir al usuario a la página "Home" 
*/
useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">

      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        />
         <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        />
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={handleSignUp}
        style={[styles.button, styles.buttonOutline]}
        >
            <Text style={[styles.buttonOutlineText]}>Register</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      textAlign: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })
