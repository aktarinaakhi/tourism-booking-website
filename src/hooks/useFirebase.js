import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }

    return (
        {
            user,
            handleGoogleSignIn,
            logOut,
            isLoading,
            setIsLoading

        }
    );
};

export default useFirebase;