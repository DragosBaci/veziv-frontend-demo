import React from 'react';
import { useIsClickedContext } from '../../context/IsClickedContext';
import { CardContent, CardContentContainerOpen, CardImage, CardImageContainer, ContentContainer, ContentTitle, ContentTitleContainer, Overlay, OverlayLink, Subtitle } from './Item.style';
import SeeCaseBar from '../../ui/SeeCaseBar/SeeCaseBar';

type ItemProps = {
    id: any;
    cardData: any;
};

const Item: React.FC<ItemProps> = ({ id, cardData }) => {
    const { updateIsClicked } = useIsClickedContext();

    return (
        <>
            <Overlay
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                style={{
                    pointerEvents: 'auto',
                }}
            >
                <OverlayLink
                    to={'/'}
                    onClick={() => {
                        document.body.style.overflow = 'auto';
                        updateIsClicked(false);
                    }}
                />
            </Overlay>
            <CardContentContainerOpen>
                <CardContent layoutId={`card-container-${id}`}>
                    <CardImageContainer layoutId={`card-image-container-${id}`}>
                        <CardImage src={`http://localhost:8080/card/image/${cardData.image}`} alt="" />
                    </CardImageContainer>
                    <ContentContainer>
                        <ContentTitleContainer>
                            <ContentTitle>{cardData.title}</ContentTitle>
                            <Subtitle>{cardData.description}</Subtitle>
                        </ContentTitleContainer>
                    </ContentContainer>
                </CardContent>
            </CardContentContainerOpen>
            <SeeCaseBar link={cardData.link} />
        </>
    );
};

export default Item;
