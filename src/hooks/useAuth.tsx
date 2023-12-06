import { createContext, FC, useContext, useEffect, useState } from 'react';
import usePersistentState, { removeStorage } from './usePersistentState';
import usePostCustomFetch from './usePostCustomFetch';
import requestUrls from '../backend/requestUrls';
import { AuthResponseType, CredentialsType } from '../utils/Types';
import { useNavigate } from 'react-router-dom';

const useAuthService = () => {
    const navigate = useNavigate();
    const { set: setToken } = usePersistentState('token');
    const { response: loginResponse, error: loginError, loading: loginLoading, fetcher: sendLoginPayload } = usePostCustomFetch<AuthResponseType, CredentialsType>(requestUrls.authLogin);
    const [error, setError] = useState<string>('');
    const logUserIn = (email: string, password: string) => {
        const payload = {
            email: email,
            password: password,
        };
        sendLoginPayload(payload);
    };

    const setAuthFields = (props?: AuthResponseType) => {
        setToken(props ? props.access_token : '');
    };

    useEffect(() => {
        if (loginResponse) {
            if (loginResponse.access_token) {
                setAuthFields(loginResponse);
                setError('');
                navigate('/admin/dashboard');
            } else {
                setError(loginResponse.message);
            }
        }
    }, [loginError, loginResponse, loginLoading]);

    const logUserOut = async () => {
        removeStorage('token');
    };

    return {
        error,
        logUserIn,
        logUserOut,
    };
};

const initialState = {
    error: null,
    logUserIn: (email: string, pass: string) => undefined,
    logUserOut: () => undefined,
};

export const AuthContext = createContext<ReturnType<typeof useAuthService> | typeof initialState>(initialState);

export const AuthProvider: FC<any> = ({ children }) => {
    const auth = useAuthService();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
