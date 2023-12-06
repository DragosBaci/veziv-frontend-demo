import React, { useEffect, useState } from 'react';
import { CardType } from '../../utils/Types';
import useGetCustomFetch from '../../hooks/useGetCustomFetch';
import requestUrls from '../../backend/requestUrls';
import { CardListContainer, ListContainer } from '../../components/List/List.style';
import Card from '../../components/Card/Card';

const CardEditForm = () => {
    const [cardData, setCardData] = useState<CardType[] | null>(null);
    const { fetcher: cardFetcher, response: cardResponse } = useGetCustomFetch<CardType[], boolean>(requestUrls.card);

    useEffect(() => {
        cardFetcher(false);
    }, []);

    useEffect(() => {
        setCardData(cardResponse);
    }, [cardResponse]);
    return (
        <ListContainer>
            <CardListContainer>{cardData?.map(card => <Card key={card.id} {...card} />)}</CardListContainer>
        </ListContainer>
    );
};

export default CardEditForm;
