import React from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    // funções
    function redirectPage(event) {
        event.preventDefault();
        const { target } = event;

        if (target.name === 'entrar') {
            return;
        };

        return navigate("/criarconta");
    }

    return (
        <section className="container">
            <nav className="container-login">
                <stronge>Pay</stronge>
                <form className="container-login-form">
                    <h1>Faça seu login</h1>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Senha"
                    />

                    <input
                        type="submit"
                        onClick={redirectPage}
                        name="entrar"
                        value="Entrar"
                    />
                    <span>Ou</span>
                    <input
                        type="submit"
                        onClick={redirectPage}
                        name="criar"
                        value="Criar Conta"
                    />
                </form>
            </nav>
            <section className="container-image"></section>
        </section>
    );
};

export default Login;
