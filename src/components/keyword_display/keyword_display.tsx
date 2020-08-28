import React from 'react';
import { fullPaths, iconPaths } from './keyword_paths';

interface Props {
    keywords: string[]
}

const KeywordDisplay : React.FC<Props> = ({ keywords }) => {
    const keywordRenders = keywords.length === 1 ? (
        <img src={fullPaths[keywords[0]]} className='keyword-full' alt='keyword-full' />
    ) : (
        keywords.map((keyword : string, idx : number) => (
            <img src={iconPaths[keyword]} className='keyword-icon' alt='keyword-icon' key={idx} />
        ))
    );

    return (
        <div className='keyword-display'>
            {keywordRenders}
        </div>
    )
};

export default KeywordDisplay;