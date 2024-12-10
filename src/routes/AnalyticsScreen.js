import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { BarChart } from 'react-native-chart-kit'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/AnalyticsScreenStyles'

const screenWidth = Dimensions.get('window').width
const imageSource = require('../assets/ground-decoration.png')

const ConsumptionAnalyticsScreen = () => {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setChartData({
        labels: ['28/05', '29/05', '30/05', '31/05', '01/06', '02/06', '03/06'],
        datasets: [
          {
            data: [500, 700, 800, 600, 550, 500, 400],
          },
        ],
      })
    }, 1000)
  }, [])

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  }

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
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
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Analíticas de consumo</Text>
            <Text style={styles.subtitle}>Consumo diario</Text>
            <View style={styles.chartContainer}>
              {chartData ? (
                <BarChart
                  data={chartData}
                  width={screenWidth - 100}
                  height={180}
                  chartConfig={chartConfig}
                  verticalLabelRotation={30}
                  style={styles.chart}
                />
              ) : (
                <Text style={styles.loadingText}>Cargando datos...</Text>
              )}
            </View>
            <Text style={styles.averageText}>Promedio: 638.4 g</Text>
            <Text style={styles.subtitle}>Consumo por zona</Text>
            <View style={styles.zoneConsumption}>
              <View style={styles.zoneItem}>
                <Text>Universidad del Valle</Text>
                <View style={[styles.bar, { width: '50%', backgroundColor: '#FF5722' }]} />
              </View>
              <View style={styles.zoneItem}>
                <Text>Casa (Zona 11)</Text>
                <View style={[styles.bar, { width: '40%', backgroundColor: '#4CAF50' }]} />
              </View>
              <View style={styles.zoneItem}>
                <Text>Oficina (Zona 10)</Text>
                <View style={[styles.bar, { width: '30%', backgroundColor: '#2196F3' }]} />
              </View>
            </View>
            <Text style={styles.averageText}>Promedio: 1114.8 g</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Image source={imageSource} style={styles.image} />
    </View>
  )
}

export default ConsumptionAnalyticsScreen
