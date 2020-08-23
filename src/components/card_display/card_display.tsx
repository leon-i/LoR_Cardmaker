import React from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../../actions/upload_image_actions';
import { CardState } from '../../reducers/card/card_reducer';
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
        <p>{`Mana: ${card.mana}`}</p>
        <p>{`Name: ${card.name}`}</p>
        <p>{`Health: ${card.health}`}</p>
        <p>{`Power: ${card.power}`}</p>
        <p>{`Description: ${card.description}`}</p>
        <p>{`Tribe: ${card.tribe}`}</p>
        <p>{`Level Up: ${card.levelUp}`}</p>
        <p>{`Card Type: ${card.cardType}`}</p>
        <p>{`Card Rarity: ${card.cardRarity}`}</p>
        <UploadButton onUpload={uploadImage}>
            Upload
        </UploadButton>
        {
            card.imageURL &&
            <img src={String(card.imageURL)} alt='upload-img' /> 
        }
    </div>
);

const mapStateToProps = ({ card }: RootState) => ({
    card
});

const mapDispatchToProps = ({
    uploadImage
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDisplay);