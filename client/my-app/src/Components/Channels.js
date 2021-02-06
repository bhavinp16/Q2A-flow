import React from 'react'
import Channel from './Channel'

function Channels() {
    return (
        <div className="sticky top-10 bg-white overflow-y-auto w-1/4 border-r">
            <Channel name="Sports"/>
            <Channel name="Dancing"/>
            <Channel name="Hackathon"/>
            <Channel name="Reactjs"/>
            
        </div>
    )
}

export default Channels
