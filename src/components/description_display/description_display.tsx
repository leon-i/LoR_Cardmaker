import React from 'react';
import KEYWORDS from '../../constants/keywords';
import barrier from '../../assets/keywords/description/barrier.png';
import cantBlock from '../../assets/keywords/description/cant_block.png';
import capture from '../../assets/keywords/description/capture.png';
import challenger from '../../assets/keywords/description/challenger.png';
import deep from '../../assets/keywords/description/deep.png';
import doubleAttack from '../../assets/keywords/description/double_attack.png';
import elusive from '../../assets/keywords/description/elusive.png';
import ephemeral from '../../assets/keywords/description/ephemeral.png';
import fearsome from '../../assets/keywords/description/fearsome.png';
import fleeting from '../../assets/keywords/description/fleeting.png';
import frostbite from '../../assets/keywords/description/frostbite.png';
import fury from '../../assets/keywords/description/fury.png';
import immobile from '../../assets/keywords/description/immobile.png';
import lastBreath from '../../assets/keywords/description/last_breath.png';
import lifesteal from '../../assets/keywords/description/lifesteal.png';
import overwhelm from '../../assets/keywords/description/overwhelm.png';
import quickAttack from '../../assets/keywords/description/quick_attack.png';
import regeneration from '../../assets/keywords/description/regeneration.png';
import scout from '../../assets/keywords/description/scout.png';
import skill from '../../assets/keywords/description/skill.png';
import silence from '../../assets/keywords/description/silence.png';
import spellshield from '../../assets/keywords/description/spellshield.png';
import stun from '../../assets/keywords/description/stun.png';
import tough from '../../assets/keywords/description/tough.png';
import vulnerable from '../../assets/keywords/description/vulnerable.png';

interface Props {
    description: string
}

const definers = [
    '!',
    '#',
    '*'
];

const paths = {
    [KEYWORDS.BARRIER]: barrier,
    [KEYWORDS.CANT_BLOCK]: cantBlock,
    [KEYWORDS.CAPTURE]: capture,
    [KEYWORDS.CHALLENGER]: challenger,
    [KEYWORDS.DEEP]: deep,
    [KEYWORDS.DOUBLE_ATTACK]: doubleAttack,
    [KEYWORDS.ELUSIVE]: elusive,
    [KEYWORDS.EPHEMERAL]: ephemeral,
    [KEYWORDS.FEARSOME]: fearsome,
    [KEYWORDS.FLEETING]: fleeting,
    [KEYWORDS.FROSTBITE]: frostbite,
    [KEYWORDS.FURY]: fury,
    [KEYWORDS.IMMOBILE]: immobile,
    [KEYWORDS.LAST_BREATH]: lastBreath,
    [KEYWORDS.LIFESTEAL]: lifesteal,
    [KEYWORDS.OVERWHELM]: overwhelm,
    [KEYWORDS.QUICK_ATTACK]: quickAttack,
    [KEYWORDS.REGENERATION]: regeneration,
    [KEYWORDS.SCOUT]: scout,
    [KEYWORDS.SILENCE]: silence,
    [KEYWORDS.SKILL]: skill,
    [KEYWORDS.SPELLSHIELD]: spellshield,
    [KEYWORDS.STUN]: stun,
    [KEYWORDS.TOUGH]: tough,
    [KEYWORDS.VULNERABLE]: vulnerable
}

const scanner = (word : string, idx: number) => {
    if (word.length <= 1) return ' ' + word;

    if (definers.includes(word[0]) && word.slice(1).includes(word[0])) {
        const endIdx = word.slice(1).indexOf(word[0]) + 1;

        switch(word[0]) {
            case '!':
                return (
                    <>
                        <span className='keyword' key={idx}>{' ' + word.slice(1, endIdx)}</span>
                        {word.slice(endIdx + 1) + ' '}
                    </>
                );
            case '#':
                return (
                    <>
                        <span className='card-reference' key={idx}>{' ' + word.slice(1, endIdx)}</span>
                        {word.slice(endIdx + 1) + ' '}
                    </>
                );
            case '*':
                return (
                    <>
                        {' '}
                        <img className='inline-icon' src={paths[word.slice(1, endIdx).toLowerCase()]} alt='inline-icon' key={idx} />
                        {word.slice(endIdx + 1)}
                    </>
                );
            default:
                return ' ' + word;
        }
    } else {
        return ' ' + word;
    }
}

const converter = (text : string) => {
    const words = text.split(' ');
    return words.map((word, idx) => scanner(word, idx));
}

const DescriptionDisplay : React.FC<Props> = ({ description }) => {
    return (
        <h4 className='description'>
            { converter(description) }
        </h4>
    )
};

export default DescriptionDisplay;