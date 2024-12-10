import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/ChatbotResponseScreenStyles'

import GptIcon from '../assets/gpt.png'
import PromptIcon from '../assets/prompt.png'

const ChatbotResponseScreen = () => {
  const [inputText, setInputText] = useState('')

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons name="menu" size={32} color="white" />
            <Text style={styles.title}>EcoScan</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
                style={styles.profileImage}
                testID="profileImage"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleSection}>
            <Text style={styles.promptTitle}>Reciclaje de latas de gaseosa</Text>
            <Text style={styles.promptData}>Inicio de la consulta: 05 de agosto de 2024</Text>
          </View>
          <ScrollView style={styles.chatSection}>
            <View style={styles.userMessage}>
              <View style={styles.chatMessage}>
                <Text style={styles.chatQuestion}>
                  Acabo de tomarme una lata de gaseosa y ahora sólo queda la basura. ¿En qué basurero debería colocarla para que se recicle?
                </Text>
              </View>
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
                style={styles.profileImageChat}
                testID="profileImage"
              />
            </View>
            <View style={styles.botMessage}>
              <Image
                source={GptIcon}
                style={styles.logo}
              />
              <View style={styles.chatResponse}>
                <Text style={styles.chatBotResponse}>
                  Para asegurarte de que la lata de gaseosa se recicle correctamente, debes colocarla en el contenedor destinado a los metales. En muchas áreas, este contenedor es de color amarillo, pero esto puede variar. Aquí tienes los pasos a seguir:
                </Text>
                <Text style={styles.listItem}>1. Asegúrate de que esté vacía</Text>
                <Text style={styles.listItem}>2. Comprueba el contenedor correcto</Text>
                <Text style={styles.chatBotResponse}>
                  Si en tu localidad los materiales reciclables se recogen de manera separada, verifica cuál es el contenedor designado para los metales o las latas de bebidas. Puedes consultar esta información con el servicio de gestión de residuos de tu municipio.
                </Text>
                <Text style={styles.chatBotResponse}>
                  Reciclar adecuadamente ayuda a reducir la cantidad de residuos que van a los vertederos y a conservar los recursos naturales. ¡Gracias por reciclar!
                </Text>
              </View>
            </View>
          </ScrollView>
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
      </SafeAreaView>
    </View>
  )
}

export default ChatbotResponseScreen
