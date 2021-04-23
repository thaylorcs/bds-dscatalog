import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import AuthCard from '../Card';
import './styles.scss';

type FormData = {
    email: string;
    password: string;
}

const Login = () => {

    const {register, handleSubmit} = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <AuthCard title="Login">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="email"
                    placeholder="Email"
                    className="form-control input-base margin-bottom-30"
                    {...register('email')}
                />
                <input 
                    type="password"
                    placeholder="Senha"
                    className="form-control input-base"
                    {...register('password')}
                />
                <Link to="/admin/auth/recover" className="login-link-recover">
                    Esqueceu a senha?
                </Link>
                <div className="login-submit">
                    <ButtonIcon text="Logar" />
                </div>
                <div className="text-center">
                    <span className="not-registered">Não tem Cadastro?</span>
                    <Link to="/admin/auth/register" className="login-link-register">Cadastrar</Link>
                </div>
            </form>
        </AuthCard>
    )
}

export default Login;