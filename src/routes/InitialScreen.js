import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/InitialScreenStyles'

const imageSource = require('../assets/ground-decoration.png')

const InitialScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>EcoScan</Text>
          <Text style={styles.subtitle}>
            Clasificación de residuos y reducción de la huella de carbono al alcance de tus manos
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Text style={styles.buttonText}>Ingresa aquí</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={imageSource}
        style={styles.image}
      />
    </View>
  )
}

export default InitialScreen
