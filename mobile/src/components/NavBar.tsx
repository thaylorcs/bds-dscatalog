import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text, TouchableNativeFeedback } from 'react-native';
import { nav, text } from '../styles';
import menu from '../assets/menu.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import { doLogout, isAuthenticated } from '../services/auth';

const NavBar: React.FC = () => {
    const [show, setShow] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    function navigate(path: any) {
        if (path) {
            setShow(false);
            navigation.navigate(path);
        }
        setShow(false);
    }

    async function isLogged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    function logout() {
        doLogout();
        navigation.navigate("Login");
    }

    useEffect(() => {
        isLogged();
    }, [isLogged])

    return (
        <>
            {authenticated ? (
                <TouchableOpacity
                    onPress={() => logout()}
                    style={nav.logoutBtn}
                >
                    <Text style={text.logoutText}>Sair</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={nav.drawer}
                    onPress={() => setShow(!show)}
                >
                    <Image source={menu} />
                    {show ?

                        <View style={nav.options}>
                            <TouchableNativeFeedback
                                style={nav.option}
                                onPress={() => navigate("Home")}
                            >
                                <Text
                                    style={[nav.textOption,
                                    route.name === "Home" ? nav.textActive : null,
                                    ]}
                                >
                                    Home
                                </Text>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback
                                style={nav.option}
                                onPress={() => navigate("Catalog")}
                            >
                                <Text
                                    style={[nav.textOption,
                                    route.name === "Catalog" ? nav.textActive : null,
                                    ]}
                                >
                                    Catálogo
                                </Text>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback
                                style={nav.option}
                                onPress={() => navigate("Login")}
                            >
                                <Text
                                    style={[nav.textOption,
                                    route.name === "Login" ? nav.textActive : null,
                                    ]}>ADM</Text>
                            </TouchableNativeFeedback>
                        </View>

                        : null}

                </TouchableOpacity>
            )}
        </>

    );
};

export default NavBar;