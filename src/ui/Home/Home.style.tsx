import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../../fonts/fonts.css';

export const HomeContainer = styled.div`
    display: flex;
    height: 100vh;
    padding-left: 15px;
    padding-right: 15px;
    @media (max-width: 767px) {
        padding: 0;
    }
`;

export const SplitContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        height: 100%;
        align-content: flex-start;
        flex-wrap: wrap;
        padding-left: 2%;
        margin-top: 10vh;
    }
`;

export const SplitContainerItems = styled.div`
    align-self: flex-end;
    text-align: right;
    max-width: 30%;
    @media (max-width: 1024px) {
        max-width: 50%;
    }
    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        align-self: center;
        width: 100%;
        text-align: left;
    }
`;

export const Title = styled(motion.div)`
    color: #e5dacf;
    font-size: 14.7vw;
    font-family: Tusker-Bold, serif;
    margin: 0;
    line-height: 1;
    margin: 0;
    text-align: center;
    @media (max-width: 767px) {
        font-size: 20vh;
        line-height: 21vh;
        width: 100vw;
        text-align: left;
    }
`;

export const SubTitle = styled.div`
    padding-left: 12px;
    font-size: 2.1vw;
    font-family: Migra;
    color: #efd8b7;
    text-align: left;
    margin: 0;
    @media (max-width: 767px) {
        font-size: 4vh;
        line-height: 4vh;
        width: 100vw;
        text-align: left;
    }
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DetailsText = styled(motion.p)`
    font-family: Neue-Montreal;
    font-size: 2vw;
    text-transform: uppercase;
    color: #ece5e0;
    margin-bottom: 15px;
    @media (max-width: 767px) {
        font-size: 3vh;
        width: 100vw;
        justify-content: left;
    }
`;
