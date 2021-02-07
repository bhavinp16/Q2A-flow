import React from 'react'
import { Route } from 'react-router-dom'
import Answers from '../Components/Answers'
import Channels from '../Components/Channels'
import Forum from '../Components/Forum'
import Gforum from '../Components/Gforum'
import Navbar from '../Components/Navbar'

function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-row w-full h-full">
                <Channels />
                <Route exact path="/room" component={Gforum}></Route>
                <Route path="/room/:roomid" component={Forum}></Route>
                <Route path ="/question/:qid" component={Answers}></Route>
            </div>
        </div>
    )
}

export default Home
