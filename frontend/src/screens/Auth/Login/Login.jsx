import { useState } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Pressable,
} from 'react-native'
import { styles } from './Login.styles'
import User from 'react-native-vector-icons/FontAwesome'
import Lock from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Login = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => setShowPassword(!showPassword)

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.login}>Login</Text>
                <Text style={styles.loginText}>
                    Welcome back! Please enter your credentials
                </Text>


                {/* Username */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Username</Text>
                    <View style={styles.inputBox}>
                        <View style={styles.iconLeft}>
                            <User name='user' size={20} />
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

                {/* Password */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputBox}>
                        <Lock name='lock' size={20} style={styles.iconLeft} />
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
                                color="#555"
                            />
                        </Pressable>
                    </View>
                </View>

                {/* Forgot Password */}
                <TouchableOpacity
                    style={styles.forgot}
                    onPress={() => navigation.navigate('ForgotPassword')}
                >
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>

                {/* Sign Up prompt */}
                <View style={styles.signupPrompt}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signupLink}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login