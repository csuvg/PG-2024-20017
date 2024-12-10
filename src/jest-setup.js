import "@testing-library/jest-native/extend-expect"
import { Image } from 'react-native'

global.alert = jest.fn()

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')

jest.mock('expo-modules-core', () => ({
  NativeModulesProxy: {},
  NativeEventEmitter: jest.fn(),
}))

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: View,
  }
});

Image.resolveAssetSource = jest.fn().mockImplementation(() => ({
  width: 100,
  height: 100,
}))
