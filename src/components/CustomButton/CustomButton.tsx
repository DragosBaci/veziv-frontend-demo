import React from 'react';
import { ButtonContainer, ButtonInfo, ButtonInner } from './CustomButton.style';

type CustomButtonProps = {
    email: string | undefined;
};

const CustomButton: React.FC<CustomButtonProps> = email => {
    const handleButtonClick = () => {
        const subject = encodeURIComponent("Let's colab!");

        const mailtoLink = `mailto:${email.email}?subject=${subject}`;

        window.open(mailtoLink);
    };

    return (
        <ButtonContainer onClick={handleButtonClick}>
            <ButtonInner>
                <ButtonInfo data-text="Contact Me">Contact Me</ButtonInfo>
            </ButtonInner>
        </ButtonContainer>
    );
};

export default CustomButton;
