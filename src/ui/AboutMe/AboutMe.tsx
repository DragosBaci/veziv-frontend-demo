import React from 'react';
import { AboutText, MainContainer, SplitContainer, Subtitle, TextContainer, Title, TitleContainer } from './AboutMe.style';
import CanvasModel from '../../components/CanvasModel/CanvasModel';

const AboutMe: React.FC = () => {
    return (
        <MainContainer>
            <SplitContainer>
                <TextContainer>
                    <TitleContainer>
                        <Title>Hello, I am Dragos</Title>
                        <Subtitle>Baci Dragos</Subtitle>
                    </TitleContainer>
                    <AboutText>
                        I use my passion and skills to create innovative and dynamic digital solutions. While also learning Automation Engineering , I bring a unique perspective and skill set to every
                        project i work on. In my free time, I like to work out, read about philosophy and play chess.
                    </AboutText>
                </TextContainer>
            </SplitContainer>
            <SplitContainer>
                <CanvasModel />
            </SplitContainer>
        </MainContainer>
    );
};

export default AboutMe;
