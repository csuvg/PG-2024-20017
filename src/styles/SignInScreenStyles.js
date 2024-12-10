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

const commonShadow = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 5,
  elevation: 5,
}

const commonText = {
  fontWeight: 'bold',
  color: '#000',
}

const commonContainer = {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 15,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 0.7,
    ...commonContainer,
    padding: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 60,
    ...commonText,
    color: '#2E7D32',
    marginBottom: 20,
  },
  contentCard: {
    ...commonContainer,
    paddingVertical: 20,
    paddingHorizontal: 20,
    ...commonShadow,
    gap: 5,
  },
  subtitle: {
    fontSize: 24,
    ...commonText,
    marginBottom: 10,
  },
  inputContainer: {
    width: screenWidth * 0.75,
    height: 40,
  },
  input: {
    ...commonContainer,
    width: screenWidth * 0.75,
    height: 40,
    borderColor: '#2E7D32',
    borderBottomWidth: 2,
    paddingLeft: 10,
    marginBottom: 15,
  },
  iconContainer: {
    padding: 10,
    position: 'absolute',
    left: screenWidth * 0.6,
  },
  loginButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    ...commonShadow,
  },
  loginButtonText: {
    fontSize: 18,
    ...commonText,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  registerText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  registerLink: {
    color: '#2E7D32',
    textDecorationLine: 'underline',
  },
  image: {
    position: 'absolute',
    bottom: -height / 6 - 50,
    width: screenWidth,
    height: (screenWidth * height) / width,
    zIndex: 0,
  },
})

export { styles }
