import React, { useCallback, useEffect, useState } from 'react';

import { LoginPageContainer, LoginForm, FormLabel, FormInput, SubmitButton, FormError } from './Login.style';
import { useAuth } from '../../hooks/useAuth';
import useValidateUser from '../../hooks/useValidateUser';

const Login = () => {
    const { logUserIn, error } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = useCallback(event => {
        setEmail(event.target.value);
    }, []);

    const handlePasswordChange = useCallback(event => {
        setPassword(event.target.value);
    }, []);

    const handleLogin = async () => {
        logUserIn(email, password);
    };

    return (
        <LoginPageContainer>
            <LoginForm>
                <FormLabel>Username:</FormLabel>
                <FormInput type="text" id="username" onChange={handleEmailChange} />

                <FormLabel>Password:</FormLabel>
                <FormInput type="password" id="password" onChange={handlePasswordChange} />
                <FormError>{error}</FormError>
                <SubmitButton type="button" onClick={handleLogin}>
                    Login
                </SubmitButton>
            </LoginForm>
        </LoginPageContainer>
    );
};

export default Login;
