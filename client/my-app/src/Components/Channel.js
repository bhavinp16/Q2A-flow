import React from 'react'
import { Link } from 'react-router-dom'

function Channel({name}) {
    return (
        <div className="flex flex-col">
            <Link to="/room/:id" className="flex flex-row justify-center item-center text-semibold ">
                <div className="h-16 border-b border-gray-200 flex justify-begin items-center  text-gray-800 hover:bg-gray-200 focus:bg-gray-200 w-full">
                    <img src="https://images.megapixl.com/4707/47075253.jpg" alt="#" className="ml-6 h-12 w-12 rounded-full ring-2 ring-gray-400 mr-4 flex items-center" />
                    <div className="px-2 flex flex-col items-begin ">
                        <p className="font-semibold">{name}</p>
                        <p className="truncate text-xs w-56"> Whats up Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iste, natus expedita officia, est totam nam consequuntur aperiam ipsum iure quis voluptas. Mollitia corrupti est hic minus. Tempora, porro laborum.</p>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Channel
