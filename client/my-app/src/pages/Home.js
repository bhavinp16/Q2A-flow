import React from 'react'
import { Route } from 'react-router-dom'
import Channels from '../Components/Channels'
import Forum from '../Components/Forum'
import Gforum from '../Components/Gforum'
import Navbar from '../Components/Navbar'

function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-row w-full">
                <Channels />
                <Route exact path="/room" component={Gforum}></Route>
                <Route path="/room/:id" component={Forum}></Route>
            </div>
        </div>
    )
}

export default Home
