import { useIsClickedContext } from '../../context/IsClickedContext';
import React from 'react';
import { CardContainer, CardContent, CardContentContainer, CardImage, CardImageContainer, TitleContainer, Category, CardOpenLink } from './Card.style';

type CardProps = {
    id: any;
    title: string;
    category: string;
};

const Card: React.FC<CardProps> = ({ id, title, category }) => {
    const { updateIsClicked } = useIsClickedContext();
    return (
        <CardContainer>
            <CardContentContainer>
                <CardContent className="card-content" layoutId={`card-container-${id}`}>
                    <CardImageContainer layoutId={`card-image-container-${id}`}>
                        <CardImage src={`images/${id}.jpg`} alt="" />
                    </CardImageContainer>
                </CardContent>
            </CardContentContainer>
            <CardOpenLink
                to={id}
                onClick={() => {
                    document.body.style.overflow = 'hidden';
                    updateIsClicked(true);
                }}
            />
        </CardContainer>
    );
};

export default Card;
