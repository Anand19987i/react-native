import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Auth/Login/Login';
import Signup from './src/screens/Auth/Signup/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './src/screens/Auth/ForgotPassword/ForgotPassword';
import linking from './linking';
import './global.css';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    // Navigation Container
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        {/** Signup Route */}
        <Stack.Screen name='Signup' component={Signup} />

        {/** Login Route */}
        <Stack.Screen name='Login' component={Login} />

        {/** Forgot Password Route */}
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
