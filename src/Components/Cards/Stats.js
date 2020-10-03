import React from 'react';
import { getFavorability } from '../../Actions';
import { useTranslation} from 'react-i18next';

import Progress from '../Shared/Progress'

const Stats = (props) => {
    const {t } = useTranslation();

    const data = () => {
        if (props.astro.dataseries) {
            const astro = props.astro.dataseries
            const favorability = getFavorability(astro[0].cloudcover, astro[0].seeing, astro[0].transparency)
            return <div className="Stats card">
             <Progress
                value={favorability}
                max={9}
                label={t('stargazing favorability')}
            />   
            <Progress
                value={astro[0].cloudcover}
                max={9}
                label={t('cloud cover')}
            />
            <Progress 
            value={astro[0].seeing} 
            max={9}
            label={t('seeing')}
            />
            <Progress 
            value={astro[0].transparency} 
            max={9}
            label={t('transparency')}
            />
            </div>
        }
        else {
            return <div className="Stats card">
            <Progress
            value={1}
            max={1}
            loading={true}
            label='Loading Stats...'
            />
            <Progress
            value={1}
            max={1}
            loading={true}
            label='Cloud Cover'
            />
            <Progress
            value={1}
            max={1}
            loading={true}
            label='Seeing'
            />
            <Progress
            value={1}
            max={1}
            loading={true}
            label='Transparency'
            />
            </div>
        }
    }
return <>{data()}</>
}

export default Stats;
Progress.defaultProps = {
    loading: false
}