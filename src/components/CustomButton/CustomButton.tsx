import React from 'react';
import { ButtonContainer, ButtonInfo, ButtonInner } from './CustomButton.style';

const CustomButton: React.FC = () => {
    return (
        <ButtonContainer>
            <ButtonInner>
                <ButtonInfo data-text="Contact Me">Contact Me</ButtonInfo>
            </ButtonInner>
        </ButtonContainer>
    );
};

export default CustomButton;
