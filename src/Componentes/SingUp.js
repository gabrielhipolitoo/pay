import React from 'react';
import {Link} from 'react-router-dom'

const SingUp = () => {
    return (
        <section className="container-sign-up">
            <h1>Crie sua conta</h1>
            <form className="container-sign-up-form">
                <input
                    type="text"
                    name="nome"
                    id="email"
                    placeholder="Nome completo"
                />
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
                    type="password"
                    name="pasword-confirm"
                    id="pasword-confirm"
                    placeholder="Confirme sua senha"
                />

                <input
                    type="submit"
                    // onClick={redirectPage}
                    name="criar"
                    value="Criar Conta"
                />
            </form>
            <Link>Ja tem uma conta?</Link>
        </section>
    );
};

export default SingUp;
