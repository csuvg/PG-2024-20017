import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ChatbotMainScreen from '../routes/ChatbotMainScreen'
import { NavigationContainer } from '@react-navigation/native'

const mockedNavigate = jest.fn()

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  }
})

const ComponentWithNavigation = () => (
  <NavigationContainer>
    <ChatbotMainScreen />
  </NavigationContainer>
)

describe('ChatbotMainScreen', () => {
  test('Renderiza los elementos principales', () => {
    const { getByText, getByTestId } = render(<ComponentWithNavigation />)

    expect(getByText('EcoScan')).toBeTruthy()
    expect(getByText('Categorías')).toBeTruthy()
    expect(getByText('Consultas recientes')).toBeTruthy()
  })

  test('Renderiza las categorías de reciclaje', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    expect(getByText('Papel y cartón')).toBeTruthy()
    expect(getByText('Vidrio')).toBeTruthy()
    expect(getByText('Plástico')).toBeTruthy()
    expect(getByText('Metal')).toBeTruthy()
  })

  test('Renderiza las consultas recientes', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    expect(getByText('Reciclaje de latas de gaseosa')).toBeTruthy()
    expect(getByText('Múltiples botellas de plástico')).toBeTruthy()
    expect(getByText('Centros de reciclaje cercanos')).toBeTruthy()
  })

  test('Navega a ChatbotChatScreen al presionar el botón de nuevo chat', () => {
    const { getByTestId } = render(<ComponentWithNavigation />)

    const newChatButton = getByTestId('newChatButton')
    fireEvent.press(newChatButton)

    expect(mockedNavigate).toHaveBeenCalledWith('ChatbotChatScreen')
  })
})
