import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import '../../../../global.css';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSendResetEmail = async () => {
    setSuccess('');
    setError('');

    if (!email) {
      setError('Please enter your email');
      return;
    }

    try {
      const response = await fetch('https://yourapi.com/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('A password reset link has been sent to your email.');
      } else {
        setError(data.message || 'Failed to send reset email.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 px-5 sm:px-10 md:px-20 lg:px-40">
      <Text className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Forgot Password
      </Text>

      <TextInput
        className="w-full max-w-md bg-white border border-gray-300 rounded-md px-4 py-3 text-base sm:text-lg mb-5 text-gray-900 placeholder-gray-500 focus:border-blue-600"
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        className="w-full max-w-md bg-blue-600 rounded-md py-4 mb-4"
        onPress={handleSendResetEmail}
      >
        <Text className="text-white text-center text-lg font-semibold">Send Reset Link</Text>
      </TouchableOpacity>

      {success ? (
        <Text className="text-green-600 text-center text-base max-w-md">{success}</Text>
      ) : null}

      {error ? (
        <Text className="text-red-600 text-center text-base max-w-md">{error}</Text>
      ) : null}
    </View>
  );
};

export default ForgotPassword;
