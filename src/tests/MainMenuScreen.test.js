import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import MainMenuScreen from '../routes/MainMenuScreen'
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
    <MainMenuScreen />
  </NavigationContainer>
)

describe('MainMenuScreen', () => {
  test('Renderiza los elementos principales', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    expect(getByText('EcoScan')).toBeTruthy()
    expect(getByText('Gramos de basura')).toBeTruthy()
    expect(getByText('388 g 📉')).toBeTruthy()
    expect(getByText('Del consumo usual de tu día')).toBeTruthy()
    expect(getByText('Últimos 7 días')).toBeTruthy()
    expect(getByText('🏁 Meta del día: Consume menos de 800 gramos de basura')).toBeTruthy()
  })

  test('Muestra las categorías de residuos correctamente', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    expect(getByText('74%')).toBeTruthy()
    expect(getByText('Papel y cartón')).toBeTruthy()
    expect(getByText('32%')).toBeTruthy()
    expect(getByText('Vidrio')).toBeTruthy()
    expect(getByText('57%')).toBeTruthy()
    expect(getByText('Plástico')).toBeTruthy()
    expect(getByText('41%')).toBeTruthy()
    expect(getByText('Metal')).toBeTruthy()
  })

  test('Navega a la pantalla de perfil al presionar la imagen de perfil', () => {
    const { getByTestId } = render(<ComponentWithNavigation />)
    const profileImage = getByTestId('profileImage')

    fireEvent.press(profileImage)
    expect(mockedNavigate).toHaveBeenCalledWith('ProfileScreen')
  })

  test('Navega a AddRegisterScreen al presionar el botón de añadir', () => {
    const { getByTestId } = render(<ComponentWithNavigation />)
    const addButton = getByTestId('addButton')

    fireEvent.press(addButton)
    expect(mockedNavigate).toHaveBeenCalledWith('AddRegisterScreen')
  })

  test('Navega a ChatbotMainScreen al presionar el botón de chatbot', () => {
    const { getByTestId } = render(<ComponentWithNavigation />)
    const chatButton = getByTestId('chatButton')

    fireEvent.press(chatButton)
    expect(mockedNavigate).toHaveBeenCalledWith('ChatbotMainScreen')
  })

  test('Muestra el progreso y los datos de la gráfica correctamente', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    expect(getByText('42.3%')).toBeTruthy()

    const dates = ['13/10', '14/10', '15/10', '16/10', '17/10', '18/10', '19/10']
    dates.forEach(date => expect(getByText(date)).toBeTruthy())
  })
})
