import React from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../../actions/upload_image_actions';
import { CardState } from '../../reducers/card/card_reducer';
import CardFrame from './card_frame';
import UploadButton from '../ui/upload_button';

interface RootState {
    card: CardState
}

interface Props {
    card: CardState,
    uploadImage: typeof uploadImage
}

const CardDisplay : React.FC<Props> = ({ card, uploadImage }) => (
    <div className='card-display'>
        <div className='card-main'>
            <p className='mana'>{card.mana}</p>
            <div className='card-frame-container'>
                {
                    card.imageURL &&
                    <div className='uploaded-img-container'>
                        <img className='uploaded-img' src={String(card.imageURL)} alt='upload-img' /> 
                    </div>
                }
                <CardFrame cardType={card.cardType} cardRarity={card.cardRarity} spellType={card.spellType} />
            </div>
        </div>
        {/* <p>{`Mana: ${card.mana}`}</p>
        <p>{`Name: ${card.name}`}</p>
        <p>{`Health: ${card.health}`}</p>
        <p>{`Power: ${card.power}`}</p>
        <p>{`Description: ${card.description}`}</p>
        <p>{`Tribe: ${card.tribe}`}</p>
        <p>{`Level Up: ${card.levelUp}`}</p>
        <p>{`Card Type: ${card.cardType}`}</p>
        <p>{`Card Rarity: ${card.cardRarity}`}</p>
        <p>{`Spell Type: ${card.spellType}`}</p> */}
        <UploadButton onUpload={uploadImage}>
            Upload
        </UploadButton>
    </div>
);

const mapStateToProps = ({ card }: RootState) => ({
    card
});

const mapDispatchToProps = ({
    uploadImage
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDisplay);