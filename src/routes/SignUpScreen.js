import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements' // Importa íconos para botones sociales
import { Ionicons } from '@expo/vector-icons' // Importa íconos de Ionicons
import { useNavigation } from '@react-navigation/native' // Hook para navegación
import { styles } from '../styles/SignUpScreenStyles' // Importa estilos personalizados

const imageSource = require('../assets/ground-decoration.png') // Imagen decorativa de fondo

const SignUpScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('') // Estado para almacenar el email del usuario
  const [password, setPassword] = useState('') // Estado para almacenar la contraseña
  const [isPasswordVisible, setIsPasswordVisible] = useState(false) // Estado para alternar visibilidad de la contraseña

  const handleEmailChange = (text) => {
    setEmail(text)
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const postData = async (email, password) => {
    try {
      console.log('Empezando el POST')
      const response = await fetch(`http://ecoscangtapi.us-east-1.elasticbeanstalk.com/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      console.log('Se hizo el post y ya hay response', response)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      console.log('Ya se va a calcular la data')
      const data = await response.json()
      console.log('Data fetcheada', data)
      console.log("Respuesta de la API:", data)
      return data
    } catch (error) {
      console.error("Error en el POST:", error)
    }
  }

  const handleSignUp = () => {
    console.log(email, password)
    postData(email, password)
    navigation.navigate('MainMenuScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>EcoScan</Text>
        <View style={styles.contentCard}>
          <Text style={styles.subtitle}>Registrarse</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={handleEmailChange}
            value={email}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={!isPasswordVisible}
              onChangeText={handlePasswordChange}
              value={password}
            />
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={togglePasswordVisibility}
              testID="togglePasswordVisibility"
            >
              <Ionicons
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSignUp}
          >
            <Text style={styles.loginButtonText}>Registrarme</Text>
          </TouchableOpacity>
          <View style={styles.socialButtonsContainer}>
            <Icon
              name='google'
              type='font-awesome'
              color='#DB4437'
              reverse
              onPress={() => console.log('Google Login')}
            />
            <Icon
              name='facebook'
              type='font-awesome'
              color='#3b5998'
              reverse
              onPress={() => console.log('Facebook Login')}
            />
          </View>
          <Text style={styles.registerText}>
            ¿Ya tienes una cuenta?{' '}
            <Text
              style={styles.registerLink}
              onPress={() => navigation.navigate('SignInScreen')}
            >
              Inicia sesión aquí
            </Text>
          </Text>
        </View>
      </View>
      <Image
        source={imageSource}
        style={styles.image}
      />
    </View>
  )
}

export default SignUpScreen
