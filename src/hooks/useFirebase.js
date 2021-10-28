import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }


    return (
        {
            user,
            handleGoogleSignIn,
            logOut

        }
    );
};

export default useFirebase;