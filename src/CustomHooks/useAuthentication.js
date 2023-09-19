import { db } from '../firebase/config';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAauthetication = () => {
    const [error, setError] = useState();
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
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
            console.log(error.message);
            if (error.message.includes('Password')) {
                setError('A senha precisa no minimo 6 caracteres');
                console.log('opa');
            } else if (error.message.includes('/email-already-in-use')) {
                setError('Email em uso');
            } else if (error.meFFfssage.includes('missing-password')) {
                setError('Digite as senhas');
            }
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
