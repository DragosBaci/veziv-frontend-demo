import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import Item from '../../components/Item/Item';
import MainPage from '../MainPage/MainPage';
import Background from '../Background/Background';
import useGetCustomFetch from '../../hooks/useGetCustomFetch';
import { CardType } from '../../utils/Types';
import requestUrls from '../../backend/requestUrls';
import SeeCaseBar from '../SeeCaseBar/SeeCaseBar';

export function PageContent() {
    const { id } = useParams();
    const [cardData, setCardData] = useState<CardType[] | null>(null);
    const { fetcher: cardFetcher, response: cardResponse } = useGetCustomFetch<CardType[], boolean>(requestUrls.card);

    useEffect(() => {
        cardFetcher(false);
    }, []);

    useEffect(() => {
        setCardData(cardResponse);
    }, [cardResponse]);

    // @ts-ignore
    const selectedItem = cardData ? cardData.find(card => card.id === parseInt(id, 10)) : null;
    return (
        <>
            <Background />
            <MainPage />
            <List />
            <AnimatePresence>{id && <Item id={id} cardData={selectedItem} key="item" />}</AnimatePresence>
        </>
    );
}

export default PageContent;
