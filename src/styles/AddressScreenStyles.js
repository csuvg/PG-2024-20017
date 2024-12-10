import { Platform, StyleSheet, Dimensions, Image } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')
const imageSource = require('../assets/ground-decoration.png')

// Función para obtener las dimensiones de la imagen
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

// Estilos comunes reutilizables
const commonText = {
  fontWeight: 'bold',
}

const commonButton = {
  padding: 15,
  borderRadius: 8,
  textAlign: 'center',
}

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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4D9B2A',
    padding: 10,
  },
  menuIcon: {
    padding: 5,
  },
  menuText: {
    fontSize: 24,
    color: '#fff',
  },
  appName: {
    fontSize: 24,
    color: '#fff',
    ...commonText,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    ...commonText,
    margin: 10,
  },
  addButton: {
    ...commonButton,
    backgroundColor: '#4D9B2A',
    margin: 15,
    marginBottom: 20,
  },
  addText: {
    color: '#fff',
    ...commonText,
    fontSize: 18,
    textAlign: 'center',
  },
  addressItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    margin: 10,
    elevation: 5,
  },
  addressName: {
    fontSize: 16,
    ...commonText,
  },
  addressDetail: {
    color: '#666',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    ...commonText,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  addButtonModal: {
    ...commonButton,
    backgroundColor: '#4CAF50',
    marginTop: 20,
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
