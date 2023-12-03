import React from 'react';
import { DetailsContainer, DetailsText, HomeContainer, SplitContainer, SplitContainerItems, SubTitle, Title } from './Home.style';
import { titleAnimation } from '../../utils/AnimationValues';
import CustomButton from '../../components/CustomButton/CustomButton';

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <SplitContainer>
                <SplitContainerItems>
                    <SubTitle>CREATIVE</SubTitle>
                    <Title variants={titleAnimation} initial="hidden" animate="visible">
                        SOFTWARE
                    </Title>
                    <Title variants={titleAnimation} initial="hidden" animate="visible">
                        DEVELOPER
                    </Title>
                </SplitContainerItems>

                <SplitContainerItems>
                    <DetailsContainer>
                        <DetailsText variants={titleAnimation} initial="hidden" animate="visible">
                            I am a full-stack developer based in Romania who loves coding and always improving my skills.
                        </DetailsText>
                    </DetailsContainer>
                    <CustomButton />
                </SplitContainerItems>
            </SplitContainer>
        </HomeContainer>
    );
};

export default Home;
