import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { backgroundAnimation } from '../../utils/AnimationValues';
import mobileBackground from '../../assets/images/backgroundMobile.png';
import { BackgroundImage } from './Background.style';
import useIsMobile from '../../hooks/useIsMobile';
import { HomeType } from '../../utils/Types';
import useGetCustomFetch from '../../hooks/useGetCustomFetch';
import requestUrls from '../../backend/requestUrls';

const Background = () => {
    const { isMobile } = useIsMobile();
    const { scrollYProgress, scrollY } = useScroll();
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.34], [1, 0]);
    const backgroundMovement = useTransform(scrollYProgress, [0, 1], ['0vh', '-20vh']);
    const [latestScroll, setLatestScroll] = useState<any>();
    const [backgroundData, setBackgroundData] = useState<HomeType | null>(null);
    const { fetcher: homeFetcher, response: homeResponse } = useGetCustomFetch<HomeType, boolean>(requestUrls.home);

    useEffect(() => {
        homeFetcher(false);
    }, []);

    useEffect(() => {
        setBackgroundData(homeResponse);
    }, [homeResponse]);

    useMotionValueEvent(scrollY, 'change', latest => {
        setLatestScroll(latest);
    });

    return (
        <BackgroundImage
            src={isMobile ? mobileBackground : `http://localhost:8080/home/${backgroundData?.image}`}
            style={{
                opacity: backgroundOpacity,
                marginTop: backgroundMovement,
            }}
            variants={backgroundAnimation}
            initial="hidden"
            animate="visible"
        />
    );
};

export default Background;
