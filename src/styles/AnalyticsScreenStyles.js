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
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4D9B2A',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  chartContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    marginVertical: 10,
  },
  loadingText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 20,
  },
  averageText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  zoneConsumption: {
    marginTop: 10,
  },
  zoneItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bar: {
    height: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
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
