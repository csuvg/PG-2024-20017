import React from 'react'
import { Platform, View, Text, Image, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('window') // Obtiene el ancho de la pantalla para ajustar la imagen

const imageSource = require('../assets/ground-decoration.png')

// Función para obtener las dimensiones de la imagen
const getImageDimensions = (source) => {
  if (Platform.OS === 'web') { // Si está en la plataforma web
    const { width, height } = Dimensions.get('window')
    return { width, height }
  } else { // Si está en una plataforma nativa
    const { width, height } = Image.resolveAssetSource(source)
    return { width, height }
  }
}

const { width, height } = getImageDimensions(imageSource) // Dimensiones de la imagen

const LoadingScreen = () => (
  <View style={styles.container}>
    <View style={styles.contentContainer}>
      <ActivityIndicator
        size="large"
        color="#0000ff"
        testID="loadingIndicator" // Prop para pruebas automatizadas
      />
    </View>
    <Image
      source={imageSource}
      style={styles.image}
      testID="backgroundImage" // Prop para pruebas automatizadas
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fondo blanco para toda la pantalla
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around', // Distribuye el contenido de manera uniforme
    alignItems: 'center', // Centra el contenido horizontalmente
    zIndex: 1, // Asegura que el contenido esté por encima de la imagen de fondo
  },
  image: {
    position: 'absolute', // La imagen está posicionada de manera absoluta
    bottom: 0, // Anclada al fondo de la pantalla
    width: screenWidth, // Ajusta el ancho de la imagen al ancho de la pantalla
    height: ((screenWidth * height) / width), // Calcula la altura manteniendo la proporción
    zIndex: 0, // La imagen está detrás del contenido
  },
})

export default LoadingScreen
