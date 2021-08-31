import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { nav } from '../styles';
import menu from '../assets/menu.png';
import { useNavigation, useRoute } from '@react-navigation/native';

const NavBar: React.FC = () => {
    const [show, setShow] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    function navigate(path: any) {
        if (path) {
            setShow(false);
            navigation.navigate(path);
        }
        setShow(false);
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={nav.drawer}
            onPress={() => setShow(!show)}
        >
            <Image source={menu} />
            {show ?
                (
                    <View style={nav.options}>
                        <TouchableOpacity
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
                        </TouchableOpacity>
                        <TouchableOpacity
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
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={nav.option}
                            onPress={() => navigate("")}
                        >
                            <Text
                                style={[nav.textOption,
                                route.name === "" ? nav.textActive : null,
                                ]}>ADM</Text>
                        </TouchableOpacity>
                    </View>
                )
                : null}
        </TouchableOpacity>
    );
};

export default NavBar;