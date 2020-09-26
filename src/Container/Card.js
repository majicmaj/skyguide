import React from 'react';

import Stats from '../Components/Stats'

const Card = (props) => {
    
    return <div className="Card">
        <Stats astro={props.astro}/>
    </div>
}

export default Card