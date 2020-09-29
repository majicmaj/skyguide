import React from 'react';
import { getFavorability } from '../../Actions';

import Progress from '../Shared/Progress'
const Stats = (props) => {
    console.log(props)
    const data = () => {
        if (props.astro.dataseries) {
            const astro = props.astro.dataseries
            console.log(astro)
            const favorability = getFavorability(astro[0].cloudcover, astro[0].seeing, astro[0].transparency)
            return <div className="Stats card">
             <Progress
                value={favorability}
                max={99}
                label='Stargazing Favorability'
            />   
            <Progress
                value={astro[0].cloudcover}
                max={9}
                label='Cloud Cover'
            />
            <Progress 
            value={astro[0].seeing} 
            max={9}
            label='Seeing'
            />
            <Progress 
            value={astro[0].transparency} 
            max={9}
            label='Transparency'
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
            </div>
        }
    }
return <>{data()}</>
}

export default Stats;
Progress.defaultProps = {
    loading: false
}