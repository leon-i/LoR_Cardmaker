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

const {
    BANDLE_CITY,
    BILGEWATER,
    DEMACIA,
    FRELJORD,
    IONIA,
    IXTAL,
    NOXUS,
    PILTOVER_AND_ZAUN,
    RUNETERRA,
    SHADOW_ISLES,
    SHURIMA,
    TARGON,
    VOID
} = REGIONS;

const PATHS = {
    [BANDLE_CITY]: bandleCity,
    [BILGEWATER]: bilgewater,
    [DEMACIA]: demacia,
    [FRELJORD]: freljord,
    [IONIA]: ionia,
    [IXTAL]: ixtal,
    [NOXUS]: noxus,
    [PILTOVER_AND_ZAUN]: piltoverAndZaun,
    [RUNETERRA]: runeterra,
    [SHADOW_ISLES]: shadowisles,
    [SHURIMA]: shurima,
    [TARGON]: targon,
    [VOID]: voidRegion
};

export default PATHS;