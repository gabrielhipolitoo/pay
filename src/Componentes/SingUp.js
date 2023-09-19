import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAauthetication } from '../CustomHooks/useAuthentication';
const SingUp = () => {
    const [valueInputsObj, setValueInputsObj] = useState({});

    const { createUser, error, setError } = useAauthetication();

   
    function sendInforNewUser(e) {
        e.preventDefault();
        if (valueInputsObj?.name?.length <= 7) {
            setError('Insira seu nome completo');
        } else if (valueInputsObj?.email?.length <= 7) {
            setError('Email invalido');
        } else if (
            valueInputsObj?.password != valueInputsObj?.passwordConfirm
        ) {
            setError('Senhas não estão iguais');
        }
        else{
            createUser(valueInputsObj);
        }
        setError();

    }
    return (
        <section className="container-sign-up">
            <h1>Crie sua conta</h1>
            <form className="container-sign-up-form">
                <input
                    style={
                        JSON.stringify(error)?.includes('nome')
                            ? { border: '1px solid #ff000094' }
                            : {}
                    }
                    type="text"
                    onBlur={handleValidationInput}
                    onChange={(e) =>
                        setValueInputsObj({
                            ...valueInputsObj,
                            [e.target.name]: e.target.value,
                        })
                    }
                    name="name"
                    id="name"
                    placeholder="Nome completo"
                />
                <input
                    style={
                        JSON.stringify(error)?.includes('Email')
                            ? { border: '1px solid #ff000094' }
                            : {}
                    }
                    type="text"
                    onBlur={handleValidationInput}
                    onChange={(e) =>
                        setValueInputsObj({
                            ...valueInputsObj,
                            [e.target.name]: e.target.value,
                        })
                    }
                    name="email"
                    id="email"
                    placeholder="Email"
                />
                <input
                    style={
                        JSON.stringify(error)?.includes('Senhas')
                            ? { border: '1px solid #ff000094' }
                            : {}
                    }
                    type="password"
                    // onBlur={handleValidationInput}
                    onChange={(e) =>
                        setValueInputsObj({
                            ...valueInputsObj,
                            [e.target.name]: e.target.value,
                        })
                    }
                    name="password"
                    id="password"
                    placeholder="Senha"
                />
                <input
                    style={
                        JSON.stringify(error)?.includes('Senhas')
                            ? { border: '1px solid #ff000094' }
                            : {}
                    }
                    type="password"
                    onBlur={handleValidationInput}
                    onChange={(e) =>
                        setValueInputsObj({
                            ...valueInputsObj,
                            [e.target.name]: e.target.value,
                        })
                    }
                    name="passwordConfirm"
                    id="passwordConfirm"
                    placeholder="Confirme sua senha"
                />
                <span className="error-message">{error}</span>
                <input
                    type="submit"
                    onClick={sendInforNewUser}
                    name="criar"
                    value="Criar Conta"
                />
            </form>
            <Link to="/">Ja tem uma conta?</Link>
        </section>
    );
};

export default SingUp;
