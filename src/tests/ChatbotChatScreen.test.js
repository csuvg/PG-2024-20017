import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ChatbotChatScreen from '../routes/ChatbotChatScreen'
import { NavigationContainer } from '@react-navigation/native'

const ComponentWithNavigation = () => (
  <NavigationContainer>
    <ChatbotChatScreen />
  </NavigationContainer>
)

describe('ChatbotChatScreen', () => {
  test('Renderiza correctamente los elementos principales', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<ComponentWithNavigation />)

    expect(getByText('EcoScan')).toBeTruthy()
    expect(getByText('Nuevo chat')).toBeTruthy()
    expect(getByText('Inicio de la consulta: 05 de junio de 2024')).toBeTruthy()
    expect(getByText('¿Dudas sobre reciclaje? Siéntete en libertad de preguntar.')).toBeTruthy()
    expect(getByPlaceholderText('Escribe tu consulta...')).toBeTruthy()
  })

  test('Renderiza los botones de reciclaje y permite presionarlos', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    const paperButton = getByText('Papel y cartón')
    const glassButton = getByText('Vidrio')
    const plasticButton = getByText('Plástico')
    const metalButton = getByText('Metal')

    fireEvent.press(paperButton)
    fireEvent.press(glassButton)
    fireEvent.press(plasticButton)
    fireEvent.press(metalButton)

    expect(paperButton).toBeTruthy()
    expect(glassButton).toBeTruthy()
    expect(plasticButton).toBeTruthy()
    expect(metalButton).toBeTruthy()
  })

  test('Permite escribir en la caja de texto', () => {
    const { getByPlaceholderText } = render(<ComponentWithNavigation />)
    const textInput = getByPlaceholderText('Escribe tu consulta...')

    fireEvent.changeText(textInput, '¿Cómo reciclar botellas de plástico?')
    expect(textInput.props.value).toBe('¿Cómo reciclar botellas de plástico?')
  })
})
