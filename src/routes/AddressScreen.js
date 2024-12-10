import React, { useState, useEffect } from 'react'
import * as Crypto from 'expo-crypto'
import { View, Text, TouchableOpacity, FlatList, Modal, TextInput, Image, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/AddressScreenStyles'

const imageSource = require('../assets/ground-decoration.png')

// // Genera un número aleatorio como cadena de texto
// const getRandomIntString = (min, max) => {
//   const array = new Uint32Array(1)
//   crypto.getRandomValues(array)
//   const randomInt = min + (array[0] % (max - min + 1))
//   return randomInt.toString()
// }

const getRandomIntString = async (min, max) => {
  const randomBytes = await Crypto.getRandomBytesAsync(4)
  const randomInt = min + (randomBytes[0] % (max - min + 1))
  return randomInt.toString()
}

const AddressScreen = () => {
  const [addresses, setAddresses] = useState([
    { id: '1', name: 'Universidad del Valle de Guatemala', address: '18 Avenida 11-95, Zona 15, Guatemala, Guatemala' },
    { id: '2', name: 'Casa', address: '10 Avenida 35-56, Zona 11, Guatemala, Guatemala' },
    { id: '3', name: 'Casa Abuelo', address: '13 Calle 12-65, Zona 3, Guatemala, Guatemala' },
  ])

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [newAddressName, setNewAddressName] = useState('')
  const [newAddressLocation, setNewAddressLocation] = useState('')
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

  const addAddress = async () => {
    if (newAddressName && newAddressLocation) {
      setAddresses([
        ...addresses,
        {
          id: await getRandomIntString(),
          name: newAddressName,
          address: newAddressLocation,
        },
      ])
      setNewAddressName('')
      setNewAddressLocation('')
      setModalVisible(false)
    }
  }

  const selectAddress = (address) => {
    setSelectedAddress(address)
  }

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
          <Text style={styles.title}>Direcciones</Text>
          <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.addText}>+ Nueva dirección</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Tus direcciones</Text>
          <FlatList
            data={addresses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.addressItem} onPress={() => selectAddress(item)}>
                <Text style={styles.addressName}>{item.name}</Text>
                <Text style={styles.addressDetail}>{item.address}</Text>
              </TouchableOpacity>
            )}
          />
          <Modal transparent={true} visible={modalVisible} animationType="slide">
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Nueva dirección</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Nombre"
                  value={newAddressName}
                  onChangeText={(text) => setNewAddressName(text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Dirección"
                  value={newAddressLocation}
                  onChangeText={(text) => setNewAddressLocation(text)}
                />
                <TouchableOpacity style={styles.addButtonModal} onPress={addAddress}>
                  <Text style={styles.addText}>Agregar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {selectedAddress && (
            <Modal transparent={true} visible={true} animationType="slide">
              <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                  <Text style={styles.modalTitle}>Dirección seleccionada</Text>
                  <Text style={styles.addressName}>{selectedAddress.name}</Text>
                  <Text style={styles.addressDetail}>{selectedAddress.address}</Text>
                  <TouchableOpacity onPress={() => setSelectedAddress(null)} style={styles.addButtonModal}>
                    <Text style={styles.addText}>Aceptar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
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

export default AddressScreen
