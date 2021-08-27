import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Home: React.FC = ({ navigation }) => {
    return (
        <View>
            <Text>
                Bem vindo ao app
            </Text>
            <TouchableOpacity
                style={{
                    backgroundColor: '#069',
                    padding: 10,
                    borderRadius: 4,
                    width: 150,
                }}

                onPress={() => navigation.navigate('Catalog')}
            >
                <Text >
                    Clique aqui
                </Text>
            </TouchableOpacity>
        </View>
    )
};

export default Home;