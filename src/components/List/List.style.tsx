import styled from 'styled-components';

export const ListContainer = styled.div`
    display: flex;
    flex: 1 1 100%;
    margin-left: 12%;
    width: 90%;
    @media (max-width: 991px) {
        padding: 0;
    }
    @media (max-width: 767px) {
        margin-left: 0;
        width: 100%;
        padding: 0;
    }
`;

export const CardListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
`;
