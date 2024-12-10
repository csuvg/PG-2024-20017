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
  titleSection: {
    padding: 10,
  },
  promptTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  promptData: {
    fontSize: 16,
  },
  chatSection: {
    flex: 1,
    padding: 15,
  },
  userMessage: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  chatMessage: {
    marginBottom: 20,
    width: '80%',
  },
  chatQuestion: {
    fontSize: 18,
    backgroundColor: '#4D9B2A',
    padding: 10,
    borderRadius: 15,
    color: 'white',
  },
  profileImageChat: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  botMessage: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  chatResponse: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '80%',
  },
  chatBotResponse: {
    fontSize: 16,
    color: '#4E4E4E',
    marginBottom: 5,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 5,
    color: '#4E4E4E',
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
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
