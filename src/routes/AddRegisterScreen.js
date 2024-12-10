import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/AddRegisterScreenStyles'

const imageSource = require('../assets/ground-decoration.png')

const AddRegisterScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Metal')
  const [address, setAddress] = useState('')
  const [weight, setWeight] = useState(0)
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
            <Text style={styles.headerTitle}>EcoScan</Text>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.title}>Nuevo consumo de basura</Text>
          <Text style={styles.label}>Selecciona la categoría de la basura</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(itemValue) => setSelectedCategory(itemValue)}
              style={styles.picker}
              testID="categoryPicker"
            >
              <Picker.Item label="Metal" value="Metal" />
              <Picker.Item label="Plástico" value="Plástico" />
              <Picker.Item label="Papel" value="Papel" />
              <Picker.Item label="Vidrio" value="Vidrio" />
            </Picker>
          </View>
          <Text style={styles.label}>Ingresa el peso de la basura en gramos</Text>
          <TextInput
            style={styles.input}
            placeholder="Peso"
            value={address}
            onChangeText={setAddress}
          />
          <Text style={styles.label}>Elige una dirección a registrar</Text>
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            value={weight}
            onChangeText={setWeight}
          />
          <Text style={styles.label}>Escribe una pequeña descripción</Text>
          <TextInput
            style={styles.input}
            placeholder="Descripción"
            value={weight}
            onChangeText={setWeight}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('MainMenuScreen')}
            >
              <Text style={styles.addButtonText}>Agregar</Text>
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

export default AddRegisterScreen
