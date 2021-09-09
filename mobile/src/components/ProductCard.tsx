import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { text, theme } from '../styles';
import { TextInputMask } from 'react-native-masked-text';

interface ProductProps {
    id: number;
    name: string;
    imgUrl: string;
    price: string;
    role?: string;
    handleDelete: Function;
    handleEdit: Function;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, imgUrl, price, role, handleDelete, handleEdit }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={theme.productCard}
            onPress={() => role ? "" : navigation.navigate("ProductDetails", { id })}
        >
            <Image source={{ uri: imgUrl }} style={theme.productImg} />
            <View style={theme.productDescription}>
                <Text style={text.productName}>{name}</Text>
                <View style={theme.priceContainer}>
                    <Text style={text.currency}>R$</Text>
                    <TextInputMask
                        type={"money"}
                        options={{
                            precision: 2,
                            separator: ",",
                            delimiter: ".",
                            unit: '',
                            suffixUnit: "",
                        }}
                        value={price}
                        editable={false}
                        style={text.productPrice}
                    />
                </View>
                {
                    role === 'admin' && (
                        <View style={theme.buttonContainer}>
                            <TouchableOpacity
                                style={theme.deleteBtn}
                                onPress={() => handleDelete(id)}
                            >
                                <Text style={text.deleteTxt}>
                                    Excluir
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={theme.editBtn}
                            onPress={() => {
                                handleEdit(id)
                            }}
                            >
                                <Text style={text.editText}>
                                    Editar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;