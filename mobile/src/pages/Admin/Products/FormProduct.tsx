import React, { useState } from 'react';
import arrow from '../../../assets/leftArrow.png';

import {
    View,
    Text,
    ActivityIndicator,
    Modal,
    TouchableOpacity,
    Image
} from 'react-native';

import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { colors, text, theme } from '../../../styles';

interface FormProductProps {
    setScreen: Function,
}

const FormProduct: React.FC<FormProductProps> = (props) => {
    const { setScreen } = props;

    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "Eletrônicos"
        },
        {
            id: 2,
            name: "Computadores"
        },
        {
            id: 3,
            name: "Livros"
        },
        {
            id: 4,
            name: "Jardim"
        },
    ]);
    const [showCategories, setShowCategories] = useState(false);
    const [product, setProduct] = useState({
        name: null,
        description: null,
        imgUrl: null,
        price: null,
        categories: null,
    });

    return (
        <View style={theme.formContainer}>
            {loading ?
                (<ActivityIndicator size="large" />)
                : (
                    <View style={theme.formCard}>
                        <ScrollView>


                            <Modal
                                animationType="fade"
                                presentationStyle="overFullScreen"
                                transparent={true}
                                visible={showCategories}
                            >
                                <View style={theme.modalContainer}>
                                    <ScrollView contentContainerStyle={theme.modalContent}>
                                        {categories.map(
                                            cat => (
                                                <TouchableOpacity
                                                    style={theme.modalItem}
                                                    key={cat.id}
                                                    onPress={() => {
                                                        setProduct({ ...product, categories: cat.name });
                                                        setShowCategories(!showCategories);
                                                    }}
                                                >
                                                    <Text>{cat.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        )}
                                    </ScrollView>
                                </View>
                            </Modal>
                            <TouchableOpacity
                                onPress={() => setScreen("products")}
                                style={theme.goBackContainer}
                            >
                                <Image source={arrow} />
                                <Text style={text.goBackText}>Voltar</Text>
                            </TouchableOpacity>
                            <TextInput placeholder="Nome do Produto" style={theme.formInput} />
                            <TouchableOpacity
                                onPress={() => setShowCategories(!showCategories)}
                                style={theme.selectInput}
                            >
                                <Text style={product.categories === null && { color: colors.darkGray }}>
                                    {product.categories === null
                                        ? 'Escolha uma categoria'
                                        : product.categories
                                    }
                                </Text>
                            </TouchableOpacity>
                            <TextInput placeholder="Preço" style={theme.formInput} />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={theme.uploadBtn}
                            >
                                <Text style={text.uploadText}>Carregar Imagem</Text>
                            </TouchableOpacity>
                            <Text style={text.fileSize}>As imagens devem estar no formato JPG ou PNG e não podem ultrapassar 5MB</Text>
                            <TextInput multiline placeholder="Descrição" style={theme.textArea} />
                            <View style={theme.buttonContainer}>
                                <TouchableOpacity style={theme.deleteBtn}>
                                    <Text style={text.deleteTxt} >Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={theme.saveBtn}>
                                    <Text style={text.saveTxt}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                )
            }
        </View>
    );
};

export default FormProduct;