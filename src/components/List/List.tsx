import React from 'react';
import { items } from './data';
import Card from '../Card/Card';
import { CardListContainer, ListContainer } from './List.style';

const List: React.FC = () => {
    return (
        <ListContainer>
            <CardListContainer>
                {items.map(card => (
                    <Card key={card.id} {...card} />
                ))}
            </CardListContainer>
        </ListContainer>
    );
};

export default List;
