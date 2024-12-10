import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/SignInScreenStyles'

const imageSource = require('../assets/ground-decoration.png')

const SignInScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleEmailChange = (text) => {
    setEmail(text)
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const handleSignIn = () => {
    navigation.navigate('MainMenuScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>EcoScan</Text>
        <View style={styles.contentCard}>
          <Text style={styles.subtitle}>Inicia sesión</Text>
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={handleEmailChange}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'Contraseña'}
              secureTextEntry={!isPasswordVisible}
              onChangeText={handlePasswordChange}
              value={password}
            />
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={togglePasswordVisibility}
              testID="toggle-password-visibility"
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
            onPress={handleSignIn}
          >
            <Text style={styles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <View style={styles.socialButtonsContainer}>
            <View>
              <Icon
                name='google'
                type='font-awesome'
                color='#DB4437'
                reverse
                onPress={() => console.log('Google Login')}
              />
            </View>
            <View>
              <Icon
                name='facebook'
                type='font-awesome'
                color='#3b5998'
                reverse
                onPress={() => console.log('Facebook Login')}
              />
            </View>
          </View>
          <Text style={styles.registerText}>
            ¿Aún no tienes una cuenta?{' '}
          </Text>
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate('SignUpScreen')}
          >
            Regístrate aquí
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

export default SignInScreen
