import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import InitialScreen from './routes/InitialScreen'
import SignInScreen from './routes/SignInScreen'
import SignUpScreen from './routes/SignUpScreen'
import MainMenuScreen from './routes/MainMenuScreen'
import ProfileScreen from './routes/ProfileScreen'
import ProfileScreenSettings from './routes/ProfileScreenSettings'
import AddressScreen from './routes/AddressScreen'
import AddRegisterScreen from './routes/AddRegisterScreen'
import AnalyticsScreen from './routes/AnalyticsScreen'
import ChatbotMainScreen from './routes/ChatbotMainScreen'
import ChatbotChatScreen from './routes/ChatbotChatScreen'
import ChatbotResponseScreen from './routes/ChatbotResponseScreen'
import LoadingScreen from './routes/LoadingScreen'

const Stack = createStackNavigator()

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{ headerShown: false }}
      >
        {loading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : (
          <>
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="ProfileScreenSettings" component={ProfileScreenSettings} />
            <Stack.Screen name="AddressScreen" component={AddressScreen} />
            <Stack.Screen name="AddRegisterScreen" component={AddRegisterScreen} />
            <Stack.Screen name="ChatbotMainScreen" component={ChatbotMainScreen} />
            <Stack.Screen name="ChatbotChatScreen" component={ChatbotChatScreen} />
            <Stack.Screen name="ChatbotResponseScreen" component={ChatbotResponseScreen} />
            <Stack.Screen name="AnalyticsScreen" component={AnalyticsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
