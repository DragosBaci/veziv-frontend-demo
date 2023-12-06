import styled from 'styled-components';

export const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: white;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
`;

export const FormInput = styled.input`
    padding: 8px;
    margin-bottom: 16px;
`;

export const FormError = styled.div`
    color: red;
`;

export const SubmitButton = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;
