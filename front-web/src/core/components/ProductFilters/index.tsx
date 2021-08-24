import React, { useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from 'core/assets/images/search-icon.svg';
import './styles.scss';
import Select from 'react-select';
import { makeRequest } from 'core/utils/request';
import { Category } from 'core/types/Product';

type Props = {
    name?: string;
    category?: Category;
    handleChangeCategory: (category: Category) => void;
    handleChangeName: (name: string) => void;
    clearFilters: () => void;
}

const ProductFilters = (
    {
        name,
        clearFilters,
        handleChangeCategory,
        handleChangeName,
        category
    }: Props) => {
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        setIsLoadingCategories(true);
        makeRequest({ url: '/categories' })
            .then(response => setCategories(response.data.content))
            .finally(() => setIsLoadingCategories(false));
    }, [])


    return (
        <div className="card-base product-filters-container">
            <div className="input-search">
                <input
                    type="text"
                    value={name}
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Pesquisar Produto"
                    onChange={event => handleChangeName(event.target.value)}
                />
                <SearchIcon />
            </div>
            <Select
                className="filter-select-container"
                classNamePrefix="product-categories-select"
                getOptionLabel={(option: Category) => option.name}
                getOptionValue={(option: Category) => String(option.id)}
                inputId="categories"
                isClearable
                isLoading={isLoadingCategories}
                key={`select-${category?.id}`}
                name="categories"
                onChange={value => handleChangeCategory(value as Category)}
                options={categories}
                placeholder="Categoria(s)"
                value={category}
            />
            <button
                className="btn btn-outline-secondary border-radius-10"
                onClick={clearFilters}
            >
                LIMPAR FILTRO
            </button>
        </div>
    )
}

export default ProductFilters