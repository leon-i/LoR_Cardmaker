import React from 'react';
import { connect } from 'react-redux';

interface CardState {
    mana: number,
    name: string,
    keywords?: string[],
    description: string,
    cardType: string,
    cardRarity: string
}

interface RootState {
    card: CardState
}

interface Props {
    card: CardState
}

const CardDisplay : React.FC<Props> = ({ card }) => (
    <div className='card-display'>
        <p>{`Mana: ${card.mana}`}</p>
        <p>{`Name: ${card.name}`}</p>
        <p>{`Description: ${card.description}`}</p>
        <p>{`Card Type: ${card.cardType}`}</p>
        <p>{`Card Rarity: ${card.cardRarity}`}</p>
    </div>
);

const mapStateToProps = ({ card }: RootState) => ({
    card
});

export default connect(mapStateToProps, {})(CardDisplay);