import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth'

const Login = () => {

    const { handleGoogleSignIn, setIsLoading, isLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                setIsLoading(true);
                history.push(redirect_url);
            })
            .finally(() => {
                setIsLoading(false);
            })


    };
    return (
        <div className="text-center my-5 py-5">
            <button onClick={googleSignIn} className="bg-secondary mx-auto text-white py-2 px-4"><i className="bi bi-google me-4"></i>Continue with Google</button>

        </div>
    );
};

export default Login;