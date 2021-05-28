import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    category: string;
}

const Form = () => {

    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: ''
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        console.log({name, value})
        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvigiadepreco.com.br%2Fp%2F6250005981369&psig=AOvVaw2jFfch0CMDLy-AUzWaZjYN&ust=1612970244339000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiPgMqM3e4CFQAAAAAdAAAAABAD',
            categories: [{id: formData.category}]
        }

        makeRequest({ url: '/products', method: 'POST', data: payload})
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="Cadastrar um Produto">
            
            <div className="row">
                <div className="col-6">
                    <input
                        value={formData.name}
                        name="name"
                        type="text" 
                        className="form-control mb-5" 
                        onChange={handleOnChange}
                    />
                    <select
                        value={formData.category}
                        className="form-control mb-5" 
                        onChange={handleOnChange}
                        name="category"
                    >
                            <option value="1">Livros</option>
                            <option value="2">Eletrônicos</option>
                            <option value="3">Computadores</option>
                    </select>
                    <input
                        value={formData.price}
                        name="price"
                        type="text"
                        className="form-control mb-5" 
                        onChange={handleOnChange}
                        placeholder="Preço"
                    />
                </div>
            </div>
            </BaseForm>
        </form>
    )
}

export default Form;