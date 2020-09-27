import React from 'react';

import Progress from '../Shared/Progress'
const Stats = (props) => {
    const data = () => {
        if (props.astro.dataseries) {
            const astro = props.astro.dataseries
            const favorability = 30 - (astro[0].cloudcover + astro[0].seeing + astro[0].transparency)
            return <div className="Stats card">
             <Progress
                value={favorability}
                max={27}
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
            return <div className="Stats">
                <Progress
                value={1}
                max={1}
                label='Loading Stats...'
                />
            </div>
        }
    }
return <>{data()}</>
}

export default Stats;