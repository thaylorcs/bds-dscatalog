import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { colors, text, theme } from '../styles';

import arrow from '../assets/arrow.png';
import draw from '../assets/draw.png';

const Home: React.FC = ({ }) => {
    return (
        <View style={theme.container}>
            <View style={theme.card}>
                <Image source={draw} style={theme.draw} />
                <View style={theme.textContainer}>
                    <Text style={text.bold}>
                        Conheça o melhor catálogo de produtos
                    </Text>
                    <Text style={text.regular}>
                        Ajudaremos você a encontrar os melhores produtos disponíveis no mercado
                    </Text>
                </View>
                <TouchableOpacity style={theme.primaryButton}>
                    <Text>INICIE AGORA A SUA BUSCA</Text>
                    <View>
                        <Image source={arrow} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Home;