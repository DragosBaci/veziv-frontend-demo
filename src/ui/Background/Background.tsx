import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { backgroundAnimation } from '../../utils/AnimationValues';
import background from '../../assets/images/background.jpg';
import mobileBackground from '../../assets/images/backgroundMobile.png';
import { BackgroundImage } from './Background.style';
import useIsMobile from '../../hooks/useIsMobile';

const Background = () => {
    const { isMobile } = useIsMobile();
    const { scrollYProgress } = useScroll();
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.34], [1, 0]);
    const backgroundMovement = useTransform(scrollYProgress, [0, 1], ['0vh', '-20vh']);

    return (
        <div style={{ overflowX: 'hidden' }}>
            <BackgroundImage
                src={isMobile ? mobileBackground : background}
                style={{
                    opacity: backgroundOpacity,
                    marginTop: backgroundMovement,
                }}
                variants={backgroundAnimation}
                initial="hidden"
                animate="visible"
            />
        </div>
    );
};

export default Background;
