import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

const Form = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('computadores');

    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleOnChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    }

    const handleOnChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setName(event.target.value);
    }

    return (
        <BaseForm title="Cadastrar um Produto">
            <h1>Name: {name}</h1>
            <h1>Price: {price}</h1>
            <div className="row">
                <div className="col-6">
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={handleOnChangeName}
                    />
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={handleOnChangePrice}
                    />
                    <select value={category} className="form-control mb-5" onChange={handleOnChangeCategory}>
                        <option value="livros">Livros</option>
                        <option value="computadores">Computadores</option>
                        <option value="eletronicos">Eletrônicos</option>
                    </select>
                </div>
            </div>
        </BaseForm>
    )
}

export default Form;