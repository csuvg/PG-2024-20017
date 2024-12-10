import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons' // Librería de iconos
import { SafeAreaView } from 'react-native-safe-area-context' // Evita solapamientos con el área segura en dispositivos iOS
import { useNavigation } from '@react-navigation/native' // Hook para manejar la navegación
import { styles } from '../styles/ProfileScreenStyles' // Importa los estilos

const imageSource = require('../assets/ground-decoration.png') // Imagen de fondo decorativa

const ProfileScreen = () => {
  const navigation = useNavigation() // Hook de navegación

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Ionicons name="menu" size={32} color="white" />
            <Text style={styles.title}>EcoScan</Text>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} // Imagen de perfil del usuario
              style={styles.profileImageHeader}
            />
          </View>

          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} // Imagen de perfil grande
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Santiago Taracena</Text>
            <Text style={styles.profileEmail}>staracenapuga@gmail.com</Text>
          </View>

          <View style={styles.optionList}>
            <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('ProfileScreenSettings')}>
              <View styles={styles.optionListIconContainer}>
                <Ionicons name="person" size={30} color="#4D9B2A" />
              </View>
              <View styles={styles.optionListTextContainer}>
                <Text style={styles.optionText}>Configuración de perfil</Text>
                <Text style={styles.optionSubtitle}>Configura tu nombre, contraseña, etc.</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('AddressScreen')}>
              <View styles={styles.optionListIconContainer}>
                <Ionicons name="home" size={30} color="#4D9B2A" />
              </View>
              <View styles={styles.optionListTextContainer}>
                <Text style={styles.optionText}>Configuración de direcciones</Text>
                <Text style={styles.optionSubtitle}>Configura tus direcciones</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('SignInScreen')}>
              <View styles={styles.optionListIconContainer}>
                <Ionicons name="log-out" size={30} color="#FF0F0F" />
              </View>
              <View styles={styles.optionListTextContainer}>
                <Text style={styles.optionText}>Cerrar sesión</Text>
                <Text style={styles.optionSubtitle}>Cierra sesión en este dispositivo</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

      <Image
        source={imageSource}
        style={styles.image}
      />
    </View>
  )
}

export default ProfileScreen
