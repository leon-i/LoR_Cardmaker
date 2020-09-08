import React from 'react';
import MultiImageSelect from '../ui/multi_image_select';
import PATHS from './region_paths';

interface Props {
    region: string,
    cardType?: string,
    select?: boolean,
    onClick: (e : any) => void
}

const RegionDisplay : React.FC<Props> = ({ region, cardType, select, onClick }) => {
    const iconClass = cardType === 'spell' ? 'region-icon spell-position' : 'region-icon';
    return select ? (
        <MultiImageSelect label={'Regions'} options={PATHS} value={region} onClick={onClick} />
    ) : (
        <img src={PATHS[region]} className={iconClass} alt='region-icon' />
    );
};

export default RegionDisplay;