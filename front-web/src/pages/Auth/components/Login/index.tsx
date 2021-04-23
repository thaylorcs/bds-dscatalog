import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../Card';
import './styles.scss';

const Login = () => {
    return (
        <AuthCard title="Login">
            <form className="login-form">
                <input 
                    type="email"
                    placeholder="Email"
                    className="form-control input-base margin-bottom-30"
                />
                <input 
                    type="password"
                    placeholder="Senha"
                    className="form-control input-base"
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