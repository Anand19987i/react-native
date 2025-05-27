import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },

  title: {
    fontSize: Platform.select({ web: 30, default: 24 }),
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    width: isWeb ? 400 : width * 0.9,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: '#000',
    outlineWidth: isWeb ? 1 : 0,
    outlineColor: '#007bff',
  },

  button: {
    width: isWeb ? 400 : width * 0.9,
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  success: {
    color: 'green',
    marginTop: 15,
    fontSize: 14,
    textAlign: 'center',
  },

  error: {
    color: 'red',
    marginTop: 15,
    fontSize: 14,
    textAlign: 'center',
  },
});
