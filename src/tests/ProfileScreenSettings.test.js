import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ProfileScreenSettings from '../routes/ProfileScreenSettings'
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
    <ProfileScreenSettings />
  </NavigationContainer>
)

describe('ProfileScreenSettings', () => {
  test('Renderiza los elementos principales de la configuración de perfil', () => {
    const { getByText, getByPlaceholderText } = render(<ComponentWithNavigation />)

    expect(getByText('EcoScan')).toBeTruthy()
    expect(getByText('Configuración de perfil')).toBeTruthy()
    expect(getByPlaceholderText('Nombre')).toBeTruthy()
    expect(getByPlaceholderText('Correo electrónico')).toBeTruthy()
    expect(getByPlaceholderText('Contraseña')).toBeTruthy()
    expect(getByPlaceholderText('Confirmar contraseña')).toBeTruthy()
  })

  test('Actualiza el nombre y el correo electrónico en los campos de entrada', () => {
    const { getByPlaceholderText } = render(<ComponentWithNavigation />)

    const nameInput = getByPlaceholderText('Nombre')
    const emailInput = getByPlaceholderText('Correo electrónico')
    fireEvent.changeText(nameInput, 'Nuevo Nombre')
    fireEvent.changeText(emailInput, 'nuevoemail@example.com')

    expect(nameInput.props.value).toBe('Nuevo Nombre')
    expect(emailInput.props.value).toBe('nuevoemail@example.com')
  })

  test('Actualiza la contraseña y la confirmación de contraseña en los campos de entrada', () => {
    const { getByPlaceholderText } = render(<ComponentWithNavigation />)

    const passwordInput = getByPlaceholderText('Contraseña')
    const confirmPasswordInput = getByPlaceholderText('Confirmar contraseña')
    fireEvent.changeText(passwordInput, 'nuevacontraseña')
    fireEvent.changeText(confirmPasswordInput, 'nuevacontraseña')

    expect(passwordInput.props.value).toBe('nuevacontraseña')
    expect(confirmPasswordInput.props.value).toBe('nuevacontraseña')
  })

  test('Navega de vuelta a ProfileScreen al presionar la imagen de perfil', () => {
    const { getByTestId } = render(<ComponentWithNavigation />)
    const profileImage = getByTestId('profileImage')

    fireEvent.press(profileImage)

    expect(mockedNavigate).toHaveBeenCalledWith('ProfileScreen')
  })

  test('Muestra una alerta de confirmación al presionar el botón Aceptar', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    const acceptButton = getByText('Aceptar')
    fireEvent.press(acceptButton)

    expect(global.alert).toHaveBeenCalledWith('Perfil actualizado')
  })
})
