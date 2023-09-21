import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAauthetication } from "../CustomHooks/useAuthentication";
const SingUp = () => {
  const [valueInputsObj, setValueInputsObj] = useState({});

  const { createUser, error, setError } = useAauthetication();

  const isNameError = error && error.includes("Nome");
  const isEmailError = error && error.includes("Email");
  const isPasswordError = error && error.includes("Senhas");

  function sendInforNewUser(e) {

    setError();
    e.preventDefault();

    const name = valueInputsObj?.name?.length <= 7;
    const email = valueInputsObj?.email?.length <= 7;
    const password = valueInputsObj?.password != valueInputsObj?.passwordConfirm;

    if (name) {
      setError("Insira seu nome completo");
    } else if (email) {
      setError("Email invalido");
    } else if (password) {
      setError("Senhas não estão iguais");
    } else {
      createUser(valueInputsObj);
    }
  }
  return (
    <section className="container-sign-up">
      <h1>Crie sua conta</h1>
      <form className="container-sign-up-form">
        <input
          className={isNameError? "inputError":""}
          type="text"
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
          className={isEmailError? "inputError":""}

          type="text"
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
          className={isPasswordError? "inputError":""}

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
          className={isPasswordError? "inputError":""}
          type="password"
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
