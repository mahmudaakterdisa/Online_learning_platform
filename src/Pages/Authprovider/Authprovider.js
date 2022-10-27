import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const Authcontext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {

            setUser(currentuser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        console.log(email, password);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = { user, loading, providerLogin, logout, createUser, signIn };
    return (
        <div>
            <Authcontext.Provider value={authInfo}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default Authprovider;