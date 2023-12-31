import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { CardListContainer, ListContainer } from './List.style';
import { CardType } from '../../utils/Types';
import useGetCustomFetch from '../../hooks/useGetCustomFetch';
import requestUrls from '../../backend/requestUrls';

const List: React.FC = () => {
    const [cardData, setCardData] = useState<CardType[] | null>(null);
    const { fetcher: cardFetcher, response: cardResponse } = useGetCustomFetch<CardType[], boolean>(requestUrls.card);

    useEffect(() => {
        cardFetcher(false);
    }, []);

    useEffect(() => {
        setCardData(cardResponse?.filter(card => !card.isHidden) || null);
    }, [cardResponse]);

    return (
        <ListContainer>
            <CardListContainer>{cardData && cardData.map(card => <Card key={card.id} {...card} />)}</CardListContainer>
        </ListContainer>
    );
};

export default List;
