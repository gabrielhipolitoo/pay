import { auth } from "../firebase/config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAauthetication = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  function handleErrorMessege(error) {
    const typeError = {
      "auth/admin-restricted-operation": "Preencha os campos",
      "auth/missing-password": "Digite as senhas",
      "auth/email-already-in-use": "Email em uo",
    };
    setError(typeError[error])
  }

  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.name,
      });
    } catch (error) {
      const ErrorMessege = error?.code;
      console.log(ErrorMessege)
      handleErrorMessege(ErrorMessege);
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    setError,
    loading,
  };
};
