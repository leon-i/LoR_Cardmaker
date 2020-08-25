import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { uploadImage } from '../../actions/upload_image_actions';
import { CardState } from '../../reducers/card/card_reducer';
import CardFrame from './card_frame';
import UploadButton from '../ui/upload_button';
import Slider from '../ui/slider';

interface RootState {
    card: CardState
}

interface Props {
    card: CardState,
    uploadImage: typeof uploadImage
}

const CardDisplay : React.FC<Props> = ({ card, uploadImage }) => {
    const [imageSizeState, setImageSizeState] = React.useState(120);


    return (
        <div className='card-display'>
            <div className='card-main'>
                <p className='mana'>{card.mana}</p>
                <p className='health'>{card.health}</p>
                <p className='power'>{card.power}</p>
                <p className='name'>{card.name}</p>
                <div className='card-frame-container'>
                    {
                        card.imageURL &&
                        <div className='uploaded-img-container'>
                            <Draggable>
                                <img className='uploaded-img' 
                                    src={String(card.imageURL)} 
                                    alt='upload-img' 
                                    draggable="false"
                                    style={{height: `${imageSizeState}%`}} />
                            </Draggable>
                        </div>
                    }
                    <CardFrame cardType={card.cardType} cardRarity={card.cardRarity} spellType={card.spellType} />
                </div>
            </div>
            <Slider label={'Size'} value={imageSizeState} onChange={(e) => setImageSizeState(e.target.value)} />
            <UploadButton onUpload={uploadImage}>
                Upload
            </UploadButton>
        </div>
    )
};

const mapStateToProps = ({ card }: RootState) => ({
    card
});

const mapDispatchToProps = ({
    uploadImage
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDisplay);