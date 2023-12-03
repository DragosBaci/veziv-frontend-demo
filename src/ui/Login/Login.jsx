import React from 'react';

import { LoginPageContainer, LoginForm, FormLabel, FormInput, SubmitButton } from './Login.style';

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleEmailChange = useCallback(event => {
    //     setEmail(event.target.value);
    // }, []);
    //
    // const handlePasswordChange = useCallback(event => {
    //     setPassword(event.target.value);
    // }, []);

    return (
        <LoginPageContainer>
            <LoginForm>
                <FormLabel>Username:</FormLabel>
                <FormInput type="text" id="username" />

                <FormLabel>Password:</FormLabel>
                <FormInput type="password" id="password" />

                <SubmitButton type="button">Login</SubmitButton>
            </LoginForm>
        </LoginPageContainer>
    );
};

export default Login;
