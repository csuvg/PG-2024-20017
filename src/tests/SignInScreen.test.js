import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import SignInScreen from '../routes/SignInScreen'
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
    <SignInScreen />
  </NavigationContainer>
)

describe('SignInScreen', () => {
  test('Renderiza correctamente los elementos principales', () => {
    const { getByText, getByPlaceholderText } = render(<ComponentWithNavigation />)

    expect(getByText('EcoScan')).toBeTruthy()
    expect(getByText('Inicia sesión')).toBeTruthy()
    expect(getByPlaceholderText('Email')).toBeTruthy()
    expect(getByPlaceholderText('Contraseña')).toBeTruthy()
    expect(getByText('Iniciar sesión')).toBeTruthy()
    expect(getByText('¿Aún no tienes una cuenta? Regístrate aquí')).toBeTruthy()
  })

  test('Permite ingresar texto en los campos de email y contraseña', () => {
    const { getByPlaceholderText } = render(<ComponentWithNavigation />)

    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Contraseña')

    fireEvent.changeText(emailInput, 'user@example.com')
    fireEvent.changeText(passwordInput, 'password123')

    expect(emailInput.props.value).toBe('user@example.com')
    expect(passwordInput.props.value).toBe('password123')
  })

  test('Alterna la visibilidad de la contraseña al presionar el ícono de visibilidad', () => {
    const { getByPlaceholderText, getByTestId } = render(<ComponentWithNavigation />)

    const passwordInput = getByPlaceholderText('Contraseña')
    const toggleVisibilityButton = getByTestId('toggle-password-visibility')

    expect(passwordInput.props.secureTextEntry).toBe(true)

    fireEvent.press(toggleVisibilityButton)
    expect(passwordInput.props.secureTextEntry).toBe(false)

    fireEvent.press(toggleVisibilityButton)
    expect(passwordInput.props.secureTextEntry).toBe(true)
  })

  test('Navega a la pantalla de registro al presionar el texto de registro', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    const registerLink = getByText('Regístrate aquí')
    fireEvent.press(registerLink)

    expect(mockedNavigate).toHaveBeenCalledWith('SignUpScreen')
  })
})
