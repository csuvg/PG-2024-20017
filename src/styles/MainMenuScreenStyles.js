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
    display: 'flex',
    justifyContent: 'flex-start',
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
  gramsContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  gramsTitle: {
    fontSize: 18,
    color: '#757575',
  },
  gramsValue: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  progressContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressIndicator: {
    width: '50%',
    height: 20,
    backgroundColor: '#CCC',
  },
  progressRelative: {
    height: '100%',
    backgroundColor: '#4D9B2A',
  },
  indicatorText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressText: {
    textAlign: 'center',
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryLabel: {
    fontSize: 16,
    color: '#757575',
  },
  chartContainer: {
    paddingHorizontal: 20,
  },
  chartTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  chartBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  barContainer: {
    alignItems: 'center',
  },
  chartBar: {
    width: 30,
  },
  dateText: {
    fontSize: 12,
  },
  goalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  goalTextContainer: {
    width: '60%',
    height: '100%',
  },
  goalText: {
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25
  },
  circleButton: {
    backgroundColor: '#4D9B2A',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: '50%',
    height: '50%',
  },
  chatIcon: {
    width: '50%',
    height: '42.5%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
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
