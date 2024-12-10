import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/ChatbotMainScreenStyles'

import RecycleBlue from '../assets/recycle-blue.png'
import RecycleGreen from '../assets/recycle-green.png'
import RecycleYellow from '../assets/recycle-yellow.png'
import RecycleRed from '../assets/recycle-red.png'
import ChatIcon from '../assets/chat.png'

const queries = [
  { id: '1', title: 'Reciclaje de latas de gaseosa', description: 'Tú: Pero en ese caso, ¿dónde debo colocar...' },
  { id: '2', title: 'Múltiples botellas de plástico', description: 'Lo ideal en el caso que presentas consiste...' },
  { id: '3', title: 'Centros de reciclaje cercanos', description: 'Tomando en cuenta la zona en la que te en...' }
]

const imageSource = require('../assets/ground-decoration.png')

const ChatbotMainScreen = () => {

  const navigation = useNavigation()

  const renderQuery = ({ item }) => (
    <TouchableOpacity style={styles.consultaContainer}>
      <Text style={styles.consultaTitle}>{item.title}</Text>
      <Text style={styles.consultaDescription}>{item.description}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons name="menu" size={30} color="white" />
            <Text style={styles.headerTitle}>EcoScan</Text>
            <Image
              style={styles.profileImage} 
              source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
            />
          </View>
          <View style={styles.categoriesContainer}>
            <Text style={styles.categoriesText}>Categorías</Text>
            <View style={styles.categories}>
              <TouchableOpacity style={styles.categoryButton}>
                <Image
                  source={RecycleBlue}
                  style={styles.recycleIcon}
                />
                <Text>Papel y cartón</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Image
                  source={RecycleGreen}
                  style={styles.recycleIcon}
                />
                <Text>Vidrio</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Image
                  source={RecycleYellow}
                  style={styles.recycleIcon}
                />
                <Text>Plástico</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Image
                  source={RecycleRed}
                  style={styles.recycleIcon}
                />
                <Text>Metal</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.consultasContainer}>
            <Text style={styles.consultasTitle}>Consultas recientes</Text>
            <FlatList
              data={queries}
              renderItem={renderQuery}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.newChatButton}
              onPress={() => navigation.navigate('ChatbotChatScreen')}
              testID="chatButton"
            >
              <Image source={ChatIcon} style={styles.chatIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <Image
        source={imageSource}
        style={styles.image}
      />
    </View>
  )
}

export default ChatbotMainScreen
