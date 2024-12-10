import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import InitialScreen from '../routes/InitialScreen'
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
    <InitialScreen />
  </NavigationContainer>
)

describe('InitialScreen', () => {
  test('Renderiza el título, subtítulo y botón principal', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    expect(getByText('EcoScan')).toBeTruthy()
    expect(
      getByText('La mejor solución móvil para clasificación de desechos y reducción de huella de carbono')
    ).toBeTruthy()

    expect(getByText('Ingresa aquí')).toBeTruthy()
  })

  test('Navega a SignInScreen al presionar el botón de inicio de sesión', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    const button = getByText('Ingresa aquí')
    fireEvent.press(button)

    expect(mockedNavigate).toHaveBeenCalledWith('SignInScreen')
  })
})
