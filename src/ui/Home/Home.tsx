import React, { useEffect, useState } from 'react';
import { DetailsContainer, DetailsText, HomeContainer, SplitContainer, SplitContainerItems, SubTitle, Title } from './Home.style';
import { titleAnimation } from '../../utils/AnimationValues';
import CustomButton from '../../components/CustomButton/CustomButton';
import useGetCustomFetch from '../../hooks/useGetCustomFetch';
import requestUrls from '../../backend/requestUrls';
import { HomeType } from '../../utils/Types';

const Home: React.FC = () => {
    const [homeData, setHomeData] = useState<HomeType | null>(null);
    const { fetcher: homeFetcher, response: homeResponse } = useGetCustomFetch<HomeType, boolean>(requestUrls.home);

    useEffect(() => {
        homeFetcher(false);
    }, []);

    useEffect(() => {
        setHomeData(homeResponse);
    }, [homeResponse]);

    return (
        <HomeContainer>
            <SplitContainer>
                <SplitContainerItems>
                    <SubTitle>{homeData?.subtitle}</SubTitle>
                    <Title variants={titleAnimation} initial="hidden" animate="visible">
                        {homeData?.title}
                    </Title>
                </SplitContainerItems>

                <SplitContainerItems>
                    <DetailsContainer>
                        <DetailsText variants={titleAnimation} initial="hidden" animate="visible">
                            {homeData?.description}
                        </DetailsText>
                    </DetailsContainer>
                    <CustomButton email={homeData?.email} />
                </SplitContainerItems>
            </SplitContainer>
        </HomeContainer>
    );
};

export default Home;
