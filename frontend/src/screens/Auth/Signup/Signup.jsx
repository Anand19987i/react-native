import { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native'
import User from 'react-native-vector-icons/FontAwesome'
import Lock from 'react-native-vector-icons/FontAwesome'
import Mail from 'react-native-vector-icons/Feather'
import Phone from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from './Signup.styles'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [contact, setContact] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState('Admin')
  const [submit, setSubmit] = useState({})
  const [error, setError] = useState('')

  const togglePassword = () => setShowPassword(!showPassword)

  const handleSubmit = async () => {
    if (!username || !email || !password || !contact) {
      setError('All fields are required')
      return
    }

    const payload = {
      username,
      email,
      password,
      contact,
      role,
    }

    setSubmit(payload)
    console.log(payload)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create your account</Text>

        {/* Role Tabs */}
        <View style={styles.roleTabs}>
          {['Admin', 'Sales', 'Office'].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setRole(item)}
              style={[styles.roleTab, role === item && styles.activeTab]}
            >
              <Text
                style={[styles.roleTabText, role === item && styles.activeTabText]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Username */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputBox}>
            <View style={styles.iconLeft}>
              <User name='user' size={20} color="#000" />
            </View>
            <TextInput
              style={styles.input}
              placeholder='Enter username'
              value={username}
              onChangeText={setUsername}
              autoCapitalize='none'
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputBox}>
            <View style={styles.iconLeft}>
              <Mail name='mail' size={17} color="#000" />
            </View>
            <TextInput
              style={styles.input}
              placeholder='Enter email'
              value={email}
              onChangeText={setEmail}
              autoCapitalize='none'
              keyboardType='email-address'
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Contact */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contact</Text>
          <View style={styles.inputBox}>
            <View style={styles.iconLeft}>
              <Phone name='phone' size={17} color="#000" />
            </View>
            <TextInput
              style={styles.input}
              placeholder='Enter contact number'
              value={contact}
              onChangeText={setContact}
              keyboardType='phone-pad'
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputBox}>
            <View style={styles.iconLeft}>
              <Lock name='lock' size={20} color="#000" />
            </View>
            <TextInput
              style={styles.input}
              placeholder='Enter password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholderTextColor="#999"
            />
            <Pressable onPress={togglePassword} style={styles.iconRight}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={20}
                color="#000"
              />
            </Pressable>
          </View>
        </View>

        {/* Submit */}
        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Signup
