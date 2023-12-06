import { useIsClickedContext } from '../../context/IsClickedContext';
import React from 'react';
import { CardContainer, CardContent, CardContentContainer, CardImage, CardImageContainer, TitleContainer, Category, CardOpenLink } from './Card.style';
import { CardType } from '../../utils/Types';

const Card: React.FC<CardType> = ({ id, title, subtitle, description, image, link, isHidden }) => {
    const { updateIsClicked } = useIsClickedContext();
    return (
        <CardContainer>
            <CardContentContainer>
                <CardContent layoutId={`card-container-${id}`}>
                    <CardImageContainer layoutId={`card-image-container-${id}`}>
                        <CardImage src={`http://localhost:8080/about/${image}`} alt="" />
                    </CardImageContainer>
                </CardContent>
            </CardContentContainer>
            <CardOpenLink
                to={id.toString()}
                onClick={() => {
                    document.body.style.overflow = 'hidden';
                    updateIsClicked(true);
                }}
            />
        </CardContainer>
    );
};

export default Card;
