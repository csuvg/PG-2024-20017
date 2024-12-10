import React from 'react'
import { render } from '@testing-library/react-native'
import LoadingScreen from '../routes/LoadingScreen'

describe('LoadingScreen', () => {
  test('Renderiza correctamente el indicador de carga', () => {
    const { getByTestId } = render(<LoadingScreen />)
    expect(getByTestId('loadingIndicator')).toBeTruthy()
  })

  test('Renderiza correctamente la imagen de fondo', () => {
    const { getByTestId } = render(<LoadingScreen />)
    expect(getByTestId('backgroundImage')).toBeTruthy()
  })
})
