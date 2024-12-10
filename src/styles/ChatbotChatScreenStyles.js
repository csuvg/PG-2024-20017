import { StyleSheet } from 'react-native'

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
    backgroundColor: '#F5F5F5',
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
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contentContainer: {
    width: '100%',
    height: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newChatTextContainer: {
    width: '100%',
    padding: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    color: '#888',
  },
  centerContainer: {
    alignItems: 'center',
    margin: 30,
  },
  logo: {
    width: 100,
    height: 100,
  },
  questionText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    color: '#333',
  },
  recycleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  recycleButton: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  recycleIcon: {
    width: 50,
    height: 50,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 50,
  },
  recycleText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  promptButton: {
    width: 50,
    height: 50,
    backgroundColor: '#4D9B2A',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  promptIcon: {
    width: '60%',
    height: '60%',
  },
})

export { styles }
