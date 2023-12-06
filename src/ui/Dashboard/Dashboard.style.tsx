import styled from 'styled-components';

export const DashboardPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: white;
`;

export const DashboardContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
    background-color: #645cfc;
    border: none;
    padding: 10px;
    color: white;
    margin-top: 10px;
`;
