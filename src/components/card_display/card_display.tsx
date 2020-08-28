import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { uploadImage } from '../../actions/upload_image_actions';
import { CardState } from '../../reducers/card/card_reducer';
import CardFrame from './card_frame';
import KeywordDisplay from '../keyword_display/keyword_display';
import RegionDisplay from '../region_display/region_display';
import UploadButton from '../ui/upload_button';
import Button from '../ui/button';
import Slider from '../ui/slider';
import DescriptionDisplay from '../description_display/description_display';
import tribe from '../../assets/card_frames/tribe.png';
import level_condition from '../../assets/card_frames/champion/level_condition.png';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

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
    const [downloadingState, setDownloadingState] = React.useState(false);

    const cardMain = React.useRef<HTMLDivElement>(null);

    const handleDownload = () => {
        if (cardMain.current !== null) {
            setDownloadingState(true);
            domtoimage.toBlob(cardMain.current, { quality: 1 })
            .then(function (blob) {
                setDownloadingState(false);
                saveAs(blob, `${card.name}.png`);
            });
        }
    }
    
    let uploadedImgContainerClass;
    let cardTextClass;

    if (card.cardType === 'spell') {
        uploadedImgContainerClass = 'uploaded-img-container spell-container';
        cardTextClass = 'card-text spell-text';
    } else {
        uploadedImgContainerClass = 'uploaded-img-container';
        cardTextClass = 'card-text';
    }

    return (
        <div className='card-display'>
            <div className='card-main' ref={cardMain}>
                {
                    (card.tribe !== '' && card.cardType !== 'spell') &&
                    <div className='tribe-container'>
                        <h4>{card.tribe}</h4>
                        <img src={tribe} alt='tribe-img' />
                    </div>
                }
                <p className='mana'>{card.mana}</p>
                {
                    card.cardType !== 'spell' &&
                    <>
                        <p className='health'>{card.health}</p>
                        <p className='power'>{card.power}</p>
                    </>
                }
                <div className={cardTextClass}>
                    <h2 className='name'>{card.name}</h2>
                    {
                        card.keywords.length > 0 && 
                        <KeywordDisplay keywords={card.keywords} />
                    }
                    <DescriptionDisplay description={card.description} />
                    {
                        (card.cardType === 'champion' && card.cardRarity === 'champion') &&
                        <>
                            <img src={level_condition} className='level-condition' alt='level-condition' />
                            <div className='level-text-container'>
                                <DescriptionDisplay description={card.levelUp} />
                            </div>
                        </>
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
            <div className='buttons'>
                <UploadButton onUpload={uploadImage}>
                    Upload
                </UploadButton>
                <Button onClick={handleDownload} loading={downloadingState}>
                    Download
                </Button>
            </div>
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