import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import React from 'react';
import { MainPageContainer } from './MainPage.style';
import NavBar from '../NavBar/NavBar';

const MainPage: React.FC = () => {
    return (
        <MainPageContainer>
            <NavBar />
            <Home />
            <AboutMe />
        </MainPageContainer>
    );
};

export default MainPage;
