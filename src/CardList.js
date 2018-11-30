import React from 'react';
import Card from './Card';

const CardList = ({kittens}) => {
    const cardsArray = kittens.map(kitten => {
        return (
            <Card 
                key={kitten.id} 
                id={kitten.id} 
                name={kitten.name} 
                email={kitten.email} 
            />
        );
    });
    return (
        <div>
            {cardsArray}
        </div>
    );
};

export default CardList;