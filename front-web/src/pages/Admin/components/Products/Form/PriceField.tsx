import React from 'react';
import { Control, Controller } from 'react-hook-form';
import CurrencyInput from 'react-currency-input-field';
import { FormState } from './';

type Props = {
    control: Control<FormState>
}

const PriceField = ({ control }: Props) => {
    return (
        <Controller
            control={control}
            name="price"
            defaultValue=""
            rules={{ required: "Campo Obrigatório" }}
            render={({ value, onChange }) => (
                <CurrencyInput
                    placeholder="Preço"
                    className="form-control input-base"
                    value={value}
                    intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                    onValueChange={onChange}
                />
            )}
        />
    );
}

export default PriceField;