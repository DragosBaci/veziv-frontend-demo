import { seeCaseAnimation } from '../../utils/AnimationValues';
import { useIsClickedContext } from '../../context/IsClickedContext';
import { LeftContainer, NavBarContainer, NavbarLink, NavbarLinkContainer, NavigationBar, RightContainer } from './SeeCaseBar.style';

const SeeCaseBar = ({ link }) => {
    const { isClicked } = useIsClickedContext();

    return (
        <>
            <NavBarContainer variants={seeCaseAnimation} initial="hidden" animate={!isClicked ? 'hidden' : 'visible'}>
                <NavigationBar>
                    <LeftContainer>
                        <NavbarLinkContainer></NavbarLinkContainer>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarLinkContainer>
                            <NavbarLink href={link} target="_blank" rel="noopener noreferrer">
                                see case
                            </NavbarLink>
                        </NavbarLinkContainer>
                    </RightContainer>
                </NavigationBar>
            </NavBarContainer>
        </>
    );
};

export default SeeCaseBar;
