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
  screenContainer: {
    flex: 1,
    position: 'relative',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#4D9B2A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  categoriesContainer: {
    padding: 15,
  },
  categoriesText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  categoryButton: {
    alignItems: 'center',
  },
  recycleIcon: {
    width: 50,
    height: 50,
  },
  consultasContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  consultasTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  consultaContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  consultaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  consultaDescription: {
    fontSize: 14,
    color: 'gray',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  newChatButton: {
    width: 75,
    height: 75,
    backgroundColor: '#4D9B2A',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatIcon: {
    width: '50%',
    height: '42.5%',
  },
  image: {
    position: 'absolute',
    bottom: (-height / 6) - 50,
    width: screenWidth,
    height: ((screenWidth * height) / width),
    zIndex: 0,
  },
})

export { styles }
