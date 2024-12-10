import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import AddressScreen from '../routes/AddressScreen'
import { NavigationContainer } from '@react-navigation/native'

const ComponentWithNavigation = () => (
  <NavigationContainer>
    <AddressScreen />
  </NavigationContainer>
)

describe('AddressScreen', () => {
  test('Renderiza el título y las direcciones principales', () => {
    const { getByText } = render(<ComponentWithNavigation />)

    expect(getByText('Direcciones')).toBeTruthy()

    expect(getByText('Universidad del Valle de Guatemala')).toBeTruthy()
    expect(getByText('18 Avenida 11-95, Zona 15, Guatemala, Guatemala')).toBeTruthy()
    expect(getByText('Casa')).toBeTruthy()
    expect(getByText('10 Avenida 35-56, Zona 11, Guatemala, Guatemala')).toBeTruthy()
  })

  test('Abre el modal de nueva dirección al presionar el botón + Nueva dirección', () => {
    const { getByText, queryByText } = render(<ComponentWithNavigation />)

    expect(queryByText('Nueva dirección')).toBeNull()

    const addButton = getByText('+ Nueva dirección')
    fireEvent.press(addButton)

    expect(getByText('Nueva dirección')).toBeTruthy()
  })

  test('Agrega una nueva dirección y la muestra en la lista', () => {
    const { getByText, getByPlaceholderText, queryByText } = render(<ComponentWithNavigation />)

    const addButton = getByText('+ Nueva dirección')
    fireEvent.press(addButton)

    const nameInput = getByPlaceholderText('Nombre')
    const addressInput = getByPlaceholderText('Dirección')
    fireEvent.changeText(nameInput, 'Oficina')
    fireEvent.changeText(addressInput, '12 Avenida 34-56, Zona 9, Guatemala, Guatemala')
    
    const addAddressButton = getByText('Agregar')
    fireEvent.press(addAddressButton)

    expect(queryByText('Nueva dirección')).toBeNull()
    expect(getByText('Oficina')).toBeTruthy()
    expect(getByText('12 Avenida 34-56, Zona 9, Guatemala, Guatemala')).toBeTruthy()
  })

  test('Selecciona una dirección y abre el modal de detalles', () => {
    const { getByText, queryByText, queryAllByText } = render(<ComponentWithNavigation />)

    const casaAddress = getByText('Casa')
    fireEvent.press(casaAddress)

    expect(getByText('Dirección seleccionada')).toBeTruthy()

    expect(queryAllByText('Casa')[1]).toBeTruthy()
    expect(queryAllByText('10 Avenida 35-56, Zona 11, Guatemala, Guatemala')[1]).toBeTruthy()

    const acceptButton = getByText('Aceptar')
    fireEvent.press(acceptButton)

    expect(queryByText('Dirección seleccionada')).toBeNull()
  })
})
