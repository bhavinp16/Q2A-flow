import React from 'react'
import Channel from './Channel'

function Channels() {
    return (
        <div className="flex flex-col mt-16 bg-white w-1/4 border-r overflow-y-auto">
            <div className="flex justify-begin items-center font-serif pl-6 p-4 text-md">
                Rooms
            </div>
            <Channel name="Sports" />
            <Channel name="Dancing" />
            <Channel name="Hackathon" />
            <Channel name="Reactjs" />
            <Channel name="Sports" />
            <Channel name="Dancing" />
            <Channel name="Hackathon" />
            <Channel name="Reactjs" />
            <Channel name="Sports" />
            <Channel name="Dancing" />
            <Channel name="Hackathon" />
            <Channel name="Reactjs" />
            <Channel name="Sports" />
            <Channel name="Dancing" />
            <Channel name="Hackathon" />
            <Channel name="Reactjs" />
        </div>
    )
}

export default Channels
