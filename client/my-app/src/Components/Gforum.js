import React from 'react'
import { Route } from 'react-router-dom'
import Questions from './Questions'
import Search from './Search'

function Gforum() {
    return (
        <div className="flex flex-col w-3/4 bg-gray-100">
            <Search />
            <Questions />
        </div>
    )
}

export default Gforum
