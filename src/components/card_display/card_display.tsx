import React from 'react';
import { connect } from 'react-redux';

interface CardState {
    mana: number,
    name: string,
    keywords?: string[],
    description: string
}

interface RootState {
    card: CardState
}

interface Props {
    card: CardState
}

const CardDisplay : React.FC<Props> = ({ card }) => (
    <div>
        <p>{`Mana: ${card.mana}`}</p>
        <p>{`Name: ${card.name}`}</p>
        <p>{`Description: ${card.description}`}</p>
    </div>
);

const mapStateToProps = ({ card }: RootState) => ({
    card
});

export default connect(mapStateToProps, {})(CardDisplay);