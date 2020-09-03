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
import CARD_TYPES from '../../constants/card_types';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useMediaQuery } from 'react-responsive';
import html2canvas from 'html2canvas';

interface RootState {
    card: CardState
}

interface Props {
    card: CardState,
    uploadImage: typeof uploadImage
}

const CardDisplay : React.FC<Props> = ({ card, uploadImage }) => {
    const [imageSizeState, setImageSizeState] = React.useState<number>(120);
    const [shaderPositionState, setShaderPositionState] = React.useState<number>(300);
    const [downloadingState, setDownloadingState] = React.useState<boolean>(false);

    const cardMain = React.useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery({ maxWidth: 420 });

    const handleDownload = () => {
        if (cardMain.current !== null) {
            setDownloadingState(true);

            if (isMobile) {
                window.scrollTo(0,0); 
                html2canvas(cardMain.current).then(canvas => {
                    setDownloadingState(false);
                    saveAs(canvas.toDataURL(), `${card.name}.png`);
                });
            } else {
                domtoimage.toPng(cardMain.current)
                .then(function (blob) {
                    setDownloadingState(false);
                    saveAs(blob, `${card.name}.png`);
                });
            }
        }
    }

    const isSpell : boolean = card.cardType === CARD_TYPES.SPELL;

    return (
        <div className='card-display'>
            <div className='card-main' ref={cardMain}>
                {
                    (card.tribe !== '' && !isSpell) &&
                    <div className='tribe-container'>
                        <h4>{card.tribe}</h4>
                        <img src={tribe} alt='tribe-img' />
                    </div>
                }
                <p className='mana'>{card.mana}</p>
                {
                    !isSpell &&
                    <>
                        <p className='health'>{card.health}</p>
                        <p className='power'>{card.power}</p>
                    </>
                }
                <div className={isSpell ? 
                    'card-text spell-text' : 
                    'card-text'}>
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
                        <div className={isSpell ? 
                            'uploaded-img-container spell-container' : 
                            'uploaded-img-container'}>
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
                        !isSpell &&
                        <div className='shader' style={{ height: `${shaderPositionState}px` }}></div>
                    }
                    <RegionDisplay region={card.region} cardType={card.cardType} onClick={() => null} />
                    <CardFrame cardType={card.cardType} cardRarity={card.cardRarity} spellType={card.spellType} />
                </div>
            </div>
            <strong>Click and drag uploaded image to reposition.</strong>
            <Slider label={'Size'} 
                min={"60"}
                max={"180"}
                value={imageSizeState} 
                onChange={(e) => setImageSizeState(e.target.value)} />
            {
                !isSpell &&
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