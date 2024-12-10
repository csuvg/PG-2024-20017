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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4D9B2A',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    fontSize: 16,
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
  },
  photoIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  photoText: {
    fontSize: 16,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addButton: {
    width: '30%',
    backgroundColor: '#4D9B2A',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
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
