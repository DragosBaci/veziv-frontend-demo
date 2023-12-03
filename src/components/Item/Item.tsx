import React from 'react';
import { useIsClickedContext } from '../../context/IsClickedContext';
import { CardContent, CardContentContainerOpen, CardImage, CardImageContainer, ContentContainer, ContentTitle, ContentTitleContainer, Overlay, OverlayLink, Subtitle } from './Item.style';

type ItemProps = {
    id: any;
};

const Item: React.FC<ItemProps> = ({ id }) => {
    const { updateIsClicked } = useIsClickedContext();

    return (
        <>
            <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{
                    pointerEvents: 'auto',
                }}
                className="overlay"
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
                        <CardImage src={`images/${id}.jpg`} alt="" />
                    </CardImageContainer>
                    <ContentContainer animate>
                        <ContentTitleContainer>
                            <ContentTitle>title</ContentTitle>
                            <Subtitle>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse impedit iure nam non tempore voluptatem? Accusamus asperiores, aspernatur distinctio fugiat
                                iste itaque maiores necessitatibus nulla praesentium quas sed, tempora.
                            </Subtitle>
                        </ContentTitleContainer>
                    </ContentContainer>
                </CardContent>
            </CardContentContainerOpen>
        </>
    );
};

export default Item;
