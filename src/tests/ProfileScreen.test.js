import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ProfileScreen from '../routes/ProfileScreen'
import { NavigationContainer } from '@react-navigation/native'

global.alert = jest.fn()

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
    <ProfileScreen />
  </NavigationContainer>
)

beforeAll(() => {
  global.alert = jest.fn()
})

describe('ProfileScreen', () => {
  test('Renderiza los elementos principales del perfil', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    expect(getByText('EcoScan')).toBeTruthy()
    expect(getByText('Santiago Taracena')).toBeTruthy()
    expect(getByText('staracenapuga@gmail.com')).toBeTruthy()
  })

  test('Navega a la pantalla de configuración de perfil al presionar la opción correspondiente', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    const profileSettingsOption = getByText('Configuración de perfil')
    fireEvent.press(profileSettingsOption)

    expect(mockedNavigate).toHaveBeenCalledWith('ProfileScreenSettings')
  })

  test('Navega a la pantalla de configuración de direcciones al presionar la opción correspondiente', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    const addressSettingsOption = getByText('Configuración de direcciones')
    fireEvent.press(addressSettingsOption)

    expect(mockedNavigate).toHaveBeenCalledWith('AddressScreen')
  })

  test('Navega a la pantalla de inicio de sesión al presionar la opción de cerrar sesión', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    const logoutOption = getByText('Cerrar sesión')
    fireEvent.press(logoutOption)

    expect(mockedNavigate).toHaveBeenCalledWith('SignInScreen')
  })
})
