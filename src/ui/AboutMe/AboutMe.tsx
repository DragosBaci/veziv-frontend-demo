import React, { useEffect, useState } from 'react';
import { AboutText, MainContainer, SplitContainer, Subtitle, TextContainer, Title, TitleContainer } from './AboutMe.style';
import CanvasModel from '../../components/CanvasModel/CanvasModel';
import { AboutType } from '../../utils/Types';
import useGetCustomFetch from '../../hooks/useGetCustomFetch';
import requestUrls from '../../backend/requestUrls';

const AboutMe: React.FC = () => {
    const [aboutData, setAboutData] = useState<AboutType | null>(null);
    const { fetcher: aboutFetcher, response: aboutResponse } = useGetCustomFetch<AboutType, boolean>(requestUrls.about);

    useEffect(() => {
        aboutFetcher(false);
    }, []);

    useEffect(() => {
        setAboutData(aboutResponse);
    }, [aboutResponse]);

    return (
        <MainContainer>
            <SplitContainer>
                <TextContainer>
                    <TitleContainer>
                        <Title>{aboutData?.descriptionTitle}</Title>
                        <Subtitle>{aboutData?.descriptionSubtitle}</Subtitle>
                    </TitleContainer>
                    <AboutText>{aboutData?.description}</AboutText>
                </TextContainer>
            </SplitContainer>
            <SplitContainer>
                <CanvasModel model={aboutData?.model} />
            </SplitContainer>
        </MainContainer>
    );
};

export default AboutMe;
