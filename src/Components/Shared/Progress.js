import React from 'react'
import { Tooltip } from 'antd';
import Text from 'antd/lib/typography/Text';

const Progress = (props) => {
    const value = 100 * (props.value/props.max)
    return <Tooltip title={`${props.value} / ${props.max}`}>
        <Text>{props.label}</Text>
        <div className="progress">
            <div className="bar" style={{width: value + "%"}}>
                <div className={`${props.loading?'loading':'fill'}`}/>
            </div>
        </div>
    </Tooltip>
}

Progress.defaultProps = {
    max: 10
}
export default Progress