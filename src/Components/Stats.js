import React from 'react';

import Progress from './Shared/Progress'
const Stats = (props) => {
    const data = () => {
        if (props.astro.dataseries) {
            const astro = props.astro.dataseries
            return <>
            <p>Cloud Cover</p>
            <Progress value={astro[0].cloudcover} max={10}/>
            <p>Seeing</p>
            <Progress value={astro[0].seeing} max={10}/>
            <p>Transperency</p>
            <Progress value={astro[0].transparency} max={10}/>
            <p>Lifted Index</p>
            <Progress value={astro[0].lifted_index} max={15}/>
            </>
        }
        else {
            return <>
                <p>Loading...</p>
                <progress/>
            </>
        }
    }
return <>{data()}</>
}

export default Stats;