import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import eyesOpened from '../assets/eyes-opened.png';
import eyesClosed from '../assets/eyes-closed.png';
import arrow from '../assets/arrow.png';
import { text, theme } from '../styles';
import { login } from '../services/auth';
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(true);
    const [userFetchData, setUserFetchData] = useState({});
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });

    async function handleLogin() {
        const data = await login(userInfo);
        setUserFetchData(data);
        navigation.navigate("Dashboard");
    }

    return (
        <View style={theme.container}>
            <View style={theme.loginCard}>
                <Text style={text.loginTitle}>Login</Text>
                <View style={theme.form}>
                    <TextInput
                        autoCapitalize="none"
                        keyboardType="email-address"
                        placeholder="Email"
                        style={theme.textInput}
                        value={userInfo.username}
                        onChangeText={
                            (e) => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.username = e;
                                setUserInfo(newUserInfo);
                            }
                        }
                    />
                    <View style={theme.passwordGroup}>
                        <TextInput
                            autoCapitalize="none"
                            placeholder="Senha"
                            secureTextEntry={hidePassword}
                            style={theme.textInput}
                            value={userInfo.password}
                            onChangeText={
                                (e) => {
                                    const newUserInfo = { ...userInfo };
                                    newUserInfo.password = e;
                                    setUserInfo(newUserInfo);
                                }
                            }

                        />
                        <TouchableOpacity
                            onPress={() => setHidePassword(!hidePassword)}
                            style={theme.toggle}
                        >
                            <Image
                                source={hidePassword ? eyesOpened : eyesClosed}
                                style={theme.eyes}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleLogin()}
                    style={theme.primaryButton}
                >
                    <View style={theme.buttonTextContainer}>
                        <Text style={text.primaryText}>Fazer Login</Text>
                    </View>
                    <View style={theme.arrowContainer}>
                        <Image source={arrow} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Login;