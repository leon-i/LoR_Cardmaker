import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { uploadImage } from '../../actions/upload_image_actions';
import { CardState } from '../../reducers/card/card_reducer';
import CardFrame from './card_frame';
import RegionDisplay from '../region_display/region_display';
import UploadButton from '../ui/upload_button';
import Slider from '../ui/slider';
import level_condition from '../../assets/card_frames/champion/level_condition.png';

interface RootState {
    card: CardState
}

interface Props {
    card: CardState,
    uploadImage: typeof uploadImage
}

const CardDisplay : React.FC<Props> = ({ card, uploadImage }) => {
    const [imageSizeState, setImageSizeState] = React.useState(120);
    const [shaderPositionState, setShaderPositionState] = React.useState(300);
    const uploadedImgContainerClass = card.cardType === 'spell' ? 'uploaded-img-container spell-container' : 'uploaded-img-container';

    return (
        <div className='card-display'>
            <div className='card-main'>
                <p className='mana'>{card.mana}</p>
                <p className='health'>{card.health}</p>
                <p className='power'>{card.power}</p>
                <div className='card-text'>
                    <p className='name'>{card.name}</p>
                    <p className='name'>{card.description}</p>
                    {
                        (card.cardType === 'champion' && card.cardRarity === 'champion') &&
                        <img src={level_condition} className='level-condition' alt='level-condition' />
                    }
                </div>
                <div className='card-frame-container'>
                    {
                        card.imageURL &&
                        <div className={uploadedImgContainerClass}>
                            <Draggable>
                                <img className='uploaded-img' 
                                    src={String(card.imageURL)} 
                                    alt='upload-img' 
                                    draggable="false"
                                    style={{height: `${imageSizeState}%`}} />
                            </Draggable>
                        </div>
                    }
                    {
                        card.cardType !== 'spell' &&
                        <div className='shader' style={{ height: `${shaderPositionState}px` }}></div>
                    }
                    <RegionDisplay region={card.region} cardType={card.cardType} onClick={() => null} />
                    <CardFrame cardType={card.cardType} cardRarity={card.cardRarity} spellType={card.spellType} />
                </div>
            </div>
            <Slider label={'Size'} 
                min={"60"}
                max={"180"}
                value={imageSizeState} 
                onChange={(e) => setImageSizeState(e.target.value)} />
            {
                card.cardType !== 'spell' &&
                <Slider label={'Shader'} 
                    min={"50"}
                    max={"550"}
                    value={shaderPositionState} 
                    onChange={(e) => setShaderPositionState(e.target.value)} />
            }
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