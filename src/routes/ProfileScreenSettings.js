import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/ProfileScreenSettingsStyles'

const imageSource = require('../assets/ground-decoration.png')

const ProfileScreenSettings = () => {
  const [name, setName] = useState('Santiago Taracena')
  const [email, setEmail] = useState('staracenapuga@gmail.com')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsKeyboardVisible(true)
    )

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardVisible(false)
    )

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  const navigation = useNavigation()

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons name="menu" size={32} color="white" />
            <Text style={styles.appName}>EcoScan</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
                style={styles.profileImage}
                testID="profileImage"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.profileSection}>
            <Image
              style={styles.userImage}
              source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
            />
            <Text style={styles.sectionTitle}>Configuración de perfil</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Nombre"
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Correo electrónico"
            />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirmar contraseña"
              secureTextEntry
            />
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => {
                alert('Perfil actualizado')
                navigation.navigate('ProfileScreen')
              }}
            >
              <Text style={styles.buttonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      {(isKeyboardVisible) ? (
        null
      ) : <Image
        source={imageSource}
        style={styles.image}
      />}
    </View>
  )
}

export default ProfileScreenSettings
