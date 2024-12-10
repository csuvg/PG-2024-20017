import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/ChatbotChatScreenStyles'

import GptIcon from '../assets/gpt.png'
import RecycleBlue from '../assets/recycle-blue.png'
import RecycleGreen from '../assets/recycle-green.png'
import RecycleYellow from '../assets/recycle-yellow.png'
import RecycleRed from '../assets/recycle-red.png'
import PromptIcon from '../assets/prompt.png'

const ChatbotChatScreen = () => {
  const [inputText, setInputText] = useState('')

  const navigation = useNavigation()

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Icon name="menu" size={30} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.title}>EcoScan</Text>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
              style={styles.profilePic}
            />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.newChatTextContainer}>
              <Text style={styles.subtitle}>Nuevo chat</Text>
              <Text style={styles.date}>Inicio de la consulta: 05 de junio de 2024</Text>
            </View>
            <View>
              <View style={styles.centerContainer}>
                <Image
                  source={GptIcon}
                  style={styles.logo}
                />
                <Text style={styles.questionText}>¿Dudas sobre reciclaje? Siéntete en libertad de preguntar.</Text>
              </View>
              <View style={styles.recycleContainer}>
                <TouchableOpacity style={styles.recycleButton}>
                  <Image
                    source={RecycleBlue}
                    style={styles.recycleIcon}
                  />
                  <Text style={styles.recycleText}>Papel y cartón</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.recycleButton}>
                  <Image
                    source={RecycleGreen}
                    style={styles.recycleIcon}
                  />
                  <Text style={styles.recycleText}>Vidrio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.recycleButton}>
                  <Image
                    source={RecycleYellow}
                    style={styles.recycleIcon}
                  />
                  <Text style={styles.recycleText}>Plástico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.recycleButton}>
                  <Image
                    source={RecycleRed}
                    style={styles.recycleIcon}
                  />
                  <Text style={styles.recycleText}>Metal</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Escribe tu consulta..."
                value={inputText}
                onChangeText={setInputText}
              />
              <TouchableOpacity
                style={styles.promptButton}
                onPress={() => navigation.navigate('ChatbotResponseScreen')}
                testID="chatButton"
              >
                <Image source={PromptIcon} style={styles.promptIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default ChatbotChatScreen
