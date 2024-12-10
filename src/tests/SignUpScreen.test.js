import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import SignUpScreen from '../routes/SignUpScreen'
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
    <SignUpScreen />
  </NavigationContainer>
)

describe('SignUpScreen', () => {
  test('Permite ingresar texto en los campos de email y contraseña', () => {
    const { getByPlaceholderText } = render(<ComponentWithNavigation />)
    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Contraseña')

    fireEvent.changeText(emailInput, 'test@example.com')
    fireEvent.changeText(passwordInput, 'password123')

    expect(emailInput.props.value).toBe('test@example.com')
    expect(passwordInput.props.value).toBe('password123')
  })

  test('Alterna la visibilidad de la contraseña al presionar el ícono de visibilidad', () => {
    const { getByPlaceholderText, getByTestId } = render(<ComponentWithNavigation />)
    const passwordInput = getByPlaceholderText('Contraseña')
    const toggleVisibilityButton = getByTestId('togglePasswordVisibility')

    expect(passwordInput.props.secureTextEntry).toBe(true)

    fireEvent.press(toggleVisibilityButton)
    expect(passwordInput.props.secureTextEntry).toBe(false)

    fireEvent.press(toggleVisibilityButton)
    expect(passwordInput.props.secureTextEntry).toBe(true)
  })
})
