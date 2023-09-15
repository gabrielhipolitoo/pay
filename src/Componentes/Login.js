import React from 'react';

const Login = () => {
    return (
        <section className="container-login">
            <nav className="secao-login">
                <stronge id="brand">Pay</stronge>
                <form className="formulario-login">
                <h1 id='titulo-pagina'>Faça seu login</h1>
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
                    <input type="submit" name="entrar" value="Entrar" />
                    <span>Ou</span>
                    <input type="submit" name="criar" value="Criar Conta" />
                </form>
            </nav>
            <section className="secao-fundo">s</section>
        </section>
    );
};

export default Login;
