import React from 'react'

const Progress = (props) => {
    const value = 100 * (props.value/props.max)
    return <div className="progress">
        <div className="bar" style={{width: value + "%"}}/>
    </div>
}

Progress.defaultProps = {
    max: 10
}
export default Progress