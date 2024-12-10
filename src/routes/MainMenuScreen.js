import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/MainMenuScreenStyles'

import PlusIcon from '../assets/plus.png'
import ChatIcon from '../assets/chat.png'

const imageSource = require('../assets/ground-decoration.png')

const lastSevenDaysData = [
  { height: 80, date: '13/10' },
  { height: 120, date: '14/10' },
  { height: 90, date: '15/10' },
  { height: 110, date: '16/10' },
  { height: 70, date: '17/10' },
  { height: 60, date: '18/10' },
  { height: 40, date: '19/10' },
]

const MainMenuScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
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
          <View style={styles.gramsContainer}>
            <Text style={styles.gramsTitle}>Gramos de basura</Text>
            <Text style={styles.gramsValue}>388 g 📉</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressIndicator}>
              <View style={[styles.progressRelative, { width: '42.3%' }]} />
            </View>
            <Text style={styles.indicatorText}>42.3%</Text>
            <Text style={styles.progressText}>Del consumo usual de tu día</Text>
          </View>
          <View style={styles.categoriesContainer}>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryPercentage}>74%</Text>
              <Text style={styles.categoryLabel}>Papel y cartón</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryPercentage}>32%</Text>
              <Text style={styles.categoryLabel}>Vidrio</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryPercentage}>57%</Text>
              <Text style={styles.categoryLabel}>Plástico</Text>
            </View>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryPercentage}>41%</Text>
              <Text style={styles.categoryLabel}>Metal</Text>
            </View>
          </View>
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Últimos 7 días</Text>
            <View style={styles.chartBarContainer}>
              {lastSevenDaysData.map((date, index) => (
                <View key={index} style={styles.barContainer}>
                  <View style={[
                    styles.chartBar,
                    {
                      height: date.height,
                      backgroundColor:
                        (index !== lastSevenDaysData.length - 1)
                          ? (date.height < 100) ? '#4CAF50' : '#F44336'
                          : '#2196F3'
                    }
                  ]} />
                  <Text style={styles.dateText}>{date.date}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.goalContainer}>
            <View style={styles.goalTextContainer}>
              <Text style={styles.goalText}>🏁 Meta del día: Consume menos de 800 gramos de basura</Text>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.circleButton} onPress={() => navigation.navigate('AnalyticsScreen')}>
              <Ionicons name="stats-chart" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => navigation.navigate('AddRegisterScreen')}
              testID="addButton"
            >
              <Image source={PlusIcon} style={styles.plusIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => navigation.navigate('ChatbotMainScreen')}
              testID="chatButton"
            >
              <Image source={ChatIcon} style={styles.chatIcon} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Image source={imageSource} style={styles.image} />
    </View>
  )
}

export default MainMenuScreen
