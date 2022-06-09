import React from "react"

const IFrame = () => {
    return (
        <div style={{background: 'red'}}>
            <iframe src={'/fetch'} width={'100%'} height={'500px'}/>
        </div>
    )
}

export default IFrame