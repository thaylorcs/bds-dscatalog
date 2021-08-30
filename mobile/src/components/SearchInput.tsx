import React from 'react';
import { View, TextInput } from 'react-native';
import { theme } from '../styles';

interface SearchProps {
    placeholder: string;
    search: string;
    setSearch: Function;
}

const SearchInput: React.FC<SearchProps> = ({ search, setSearch, placeholder }) => {
    return (
        <View style={theme.inputContainer}>
            <TextInput
                onChangeText={text => setSearch(text)}
                placeholder={placeholder}
                style={theme.searchInput}
            />
        </View>
    )
};

export default SearchInput;