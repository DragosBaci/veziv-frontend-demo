import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import Item from '../../components/Item/Item';
import MainPage from '../MainPage/MainPage';
import Background from '../Background/Background';

export function PageContent() {
    const { id } = useParams();

    return (
        <>
            <Background />
            <MainPage />
            <List />
            <AnimatePresence>{id && <Item id={id} key="item" />}</AnimatePresence>
        </>
    );
}

export default PageContent;
