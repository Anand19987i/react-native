import { Dimensions, Platform, StyleSheet } from "react-native";

const { width } = Dimensions.get('window')
const isWeb = Platform.OS === 'web'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: isWeb ? 400 : width * 0.9,
    padding: isWeb ? 30 : 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: Platform.select({ web: 30, default: 24 }),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#222',
  },
  subtitle: {
    textAlign: 'center',
    color: '#777',
    fontSize: 14,
    marginBottom: 25,
  },
  roleTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 4,
    borderRadius: 5,
    marginBottom: 20,
  },
  roleTab: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#e6e6e6',
    marginHorizontal: 4,
    borderRadius: 5,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  roleTabText: {
    color: '#555',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 8,
    color: '#333',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  iconLeft: {
        paddingRight: 10,
        paddingTop: 10,
        marginLeft: 10,
        borderRightWidth: 1,
        borderColor: '#ccc',
        height: '100%'
    },

    iconRight: {
        paddingLeft: 10,
        paddingTop: 10,
        marginRight: 10,
        borderLeftWidth: 1,
        borderColor: '#ccc',
        height: '100%'
    },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 15,
    color: '#000',
    outlineWidth: isWeb ? 1 : 0,
    outlineColor: '#007bff',
  },
  loginBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 15,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    padding: 5,
  }
})
