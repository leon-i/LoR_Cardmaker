import React from 'react';
import bandleCity from '../../assets/regions/bandlecity.png';
import bilgewater from '../../assets/regions/bilgewater.png';
import demacia from '../../assets/regions/demacia.png';
import freljord from '../../assets/regions/freljord.png';
import ionia from '../../assets/regions/ionia.png';
import ixtal from '../../assets/regions/ixtal.png';
import noxus from '../../assets/regions/noxus.png';
import piltoverAndZaun from '../../assets/regions/piltoverzaun.png';
import runeterra from '../../assets/regions/runeterra.png';
import shadowisles from '../../assets/regions/shadowisles.png';
import shurima from '../../assets/regions/shurima.png';
import targon from '../../assets/regions/targon.png';
import voidRegion from '../../assets/regions/void.png';
import REGIONS from '../../constants/regions';
import MultiImageSelect from '../ui/multi_image_select';

interface Props {
    region: string,
    cardType?: string,
    select?: boolean,
    onClick: (e : any) => void
}

const options = {
    [REGIONS.BANDLE_CITY]: bandleCity,
    [REGIONS.BILGEWATER]: bilgewater,
    [REGIONS.DEMACIA]: demacia,
    [REGIONS.FRELJORD]: freljord,
    [REGIONS.IONIA]: ionia,
    [REGIONS.IXTAL]: ixtal,
    [REGIONS.NOXUS]: noxus,
    [REGIONS.PILTOVER_AND_ZAUN]: piltoverAndZaun,
    [REGIONS.RUNETERRA]: runeterra,
    [REGIONS.SHADOW_ISLES]: shadowisles,
    [REGIONS.SHURIMA]: shurima,
    [REGIONS.TARGON]: targon,
    [REGIONS.VOID]: voidRegion
};

const RegionDisplay : React.FC<Props> = ({ region, cardType, select, onClick }) => {
    const iconClass = cardType === 'spell' ? 'region-icon spell-position' : 'region-icon';
    return select ? (
        <MultiImageSelect label={'Regions'} options={options} value={region} onClick={onClick} />
    ) : (
        <img src={options[region]} className={iconClass} alt='region-icon' />
    );
};

export default RegionDisplay;