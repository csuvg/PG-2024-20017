import { Platform, StyleSheet, Dimensions, Image } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

const imageSource = require('../assets/ground-decoration.png')

const getImageDimensions = (source) => {
  if (Platform.OS === 'web') {
    const { width, height } = Dimensions.get('window')
    return { width, height }
  } else {
    const { width, height } = Image.resolveAssetSource(source)
    return { width, height }
  }
}

const { width, height } = getImageDimensions(imageSource)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#2b6e38',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 28,
    textAlign: 'center',
    color: '#000000',
    marginHorizontal: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2b6e38',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    width: screenWidth,
    height: ((screenWidth * height) / width),
    zIndex: 0,
  },
})

export { styles }
