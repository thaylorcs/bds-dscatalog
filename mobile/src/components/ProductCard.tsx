import React from 'react';
import { View, Text, ImageSourcePropType, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { text, theme } from '../styles';

interface ProductProps {
    id: number;
    name: string;
    imgUrl: ImageSourcePropType;
    price: number;
}

const ProductCard: React.FC = ({ id, name, imgUrl, price }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={theme.productCard} onPress={() => navigation.navigate("ProductDetails", { id })}>
            <Image source={{ uri: imgUrl }} style={theme.productImg} />
            <View style={theme.productDescription}>
                <Text style={text.productName}>{name}</Text>
            </View>
            <View style={theme.priceContainer}>
                <Text style={text.currency}> R$</Text>
                <Text style={text.productPrice}>{price}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;