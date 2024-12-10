import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import AddRegisterScreen from '../routes/AddRegisterScreen'
import { NavigationContainer } from '@react-navigation/native'

const ComponentWithNavigation = () => (
  <NavigationContainer>
    <AddRegisterScreen />
  </NavigationContainer>
)

describe('AddRegisterScreen', () => {
  test('Renderiza el título y los elementos principales', () => {
    const { getByText, getByPlaceholderText } = render(<ComponentWithNavigation />)

    expect(getByText('EcoScan')).toBeTruthy()
    expect(getByText('Nuevo consumo de basura')).toBeTruthy()
    expect(getByText('Selecciona la categoría de la basura')).toBeTruthy()
    expect(getByText('Ingresa el peso de la basura en gramos')).toBeTruthy()
    expect(getByText('Elige una dirección a registrar')).toBeTruthy()
    expect(getByText('Si lo prefieres, agrega una fotografía')).toBeTruthy()

    expect(getByPlaceholderText('Peso')).toBeTruthy()
    expect(getByPlaceholderText('Dirección')).toBeTruthy()
  })

  test('Actualiza el peso y la dirección en los campos de entrada', () => {
    const { getByPlaceholderText } = render(<ComponentWithNavigation />)

    const weightInput = getByPlaceholderText('Peso')
    const addressInput = getByPlaceholderText('Dirección')
    fireEvent.changeText(weightInput, '300')
    fireEvent.changeText(addressInput, 'Zona 1, Guatemala')

    expect(weightInput.props.value).toBe('300')
    expect(addressInput.props.value).toBe('Zona 1, Guatemala')
  })

  test('Presiona el botón de foto para agregar una fotografía', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    const photoButton = getByText('Fotografía')
    fireEvent.press(photoButton)
  })

  test('Presiona el botón Agregar', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    const addButton = getByText('Agregar')
    fireEvent.press(addButton)
  })
})
