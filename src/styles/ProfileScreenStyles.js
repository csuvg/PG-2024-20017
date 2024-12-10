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
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4D9B2A',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%'
  },
  menuIcon: {
    padding: 10,
  },
  menuText: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileImageHeader: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  optionList: {
    width: '90%',
    marginTop: 20,
  },
  optionItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  optionListIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 0,
    backgroundColor: '#4D9B2A',
  },
  optionListTextContainer: {
    backgroundColor: 'blue'
  },
  optionText: {
    fontSize: 18,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerImage: {
    width: 200,
    height: 80,
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
