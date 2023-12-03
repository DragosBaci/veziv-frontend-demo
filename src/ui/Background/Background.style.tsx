import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BackgroundImage = styled(motion.img)`
    overflow: hidden;
    width: 100vw;
    height: 130vh;
    z-index: -10;
    position: fixed;
    backgroundsize: cover;
    transform: translateY(-20vh);
    filter: brightness(0.7);
    @media (max-width: 768px) {
        filter: brightness(0.4);
    }
`;
