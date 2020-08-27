import React from 'react';
import champion from '../../assets/card_frames/champion/champion.png';
import leveled from '../../assets/card_frames/champion/leveled.png';
import follower_uncollectable from '../../assets/card_frames/follower/uncollectable.png';
import follower_common from '../../assets/card_frames/follower/common.png';
import follower_rare from '../../assets/card_frames/follower/rare.png';
import follower_epic from '../../assets/card_frames/follower/epic.png';
import burst_uncollectable from '../../assets/card_frames/spell/burst/uncollectable.png';
import burst_common from '../../assets/card_frames/spell/burst/common.png';
import burst_rare from '../../assets/card_frames/spell/burst/rare.png';
import burst_epic from '../../assets/card_frames/spell/burst/epic.png';
import fast_uncollectable from '../../assets/card_frames/spell/fast/uncollectable.png';
import fast_common from '../../assets/card_frames/spell/fast/common.png';
import fast_rare from '../../assets/card_frames/spell/fast/rare.png';
import fast_epic from '../../assets/card_frames/spell/fast/epic.png';
import slow_uncollectable from '../../assets/card_frames/spell/slow/uncollectable.png';
import slow_common from '../../assets/card_frames/spell/slow/common.png';
import slow_rare from '../../assets/card_frames/spell/slow/rare.png';
import slow_epic from '../../assets/card_frames/spell/slow/epic.png';
import skill_uncollectable from '../../assets/card_frames/spell/skill/uncollectable.png';

interface Props {
    cardType: string,
    cardRarity: string,
    spellType: string
}

const getSource = (cardType: string, cardRarity : string) : string => {
    const combined = cardType + '_' + cardRarity;
    switch(combined) {
        case 'champion_champion':
            return champion;
        case 'champion_leveled':
            return leveled;
        case 'follower_uncollectable':
            return follower_uncollectable;
        case 'follower_common':
            return follower_common;
        case 'follower_rare':
            return follower_rare;
        case 'follower_epic':
            return follower_epic;
        case 'burst_uncollectable':
            return burst_uncollectable;
        case 'burst_common':
            return burst_common;
        case 'burst_rare':
            return burst_rare;
        case 'burst_epic':
            return burst_epic;
        case 'fast_uncollectable':
            return fast_uncollectable;
        case 'fast_common':
            return fast_common;
        case 'fast_rare':
            return fast_rare;
        case 'fast_epic':
            return fast_epic;
        case 'slow_uncollectable':
            return slow_uncollectable
        case 'slow_common':
            return slow_common;
        case 'slow_rare':
            return slow_rare;
        case 'slow_epic':
            return slow_epic;
        case 'skill_uncollectable':
            return skill_uncollectable;
        default:
            return '';
    }
}

const CardFrame : React.FC<Props> = ({ cardType, cardRarity, spellType }) => {
    const source : string = cardType === 'spell' ? getSource(spellType, cardRarity) : getSource(cardType, cardRarity);

    return (
        <img src={source} className='card-frame' alt="card-frame"/>
    )
};

export default CardFrame;