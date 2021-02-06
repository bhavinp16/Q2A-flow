import React from 'react'
import { Link } from 'react-router-dom'

function Question() {
    return (
        <div className="flex flex-row justify-center items-center text-semibold p-1" >
            <Link to="/questino/:id" className="border-b border-gray-200 flex justify-begin items-begin bg-white text-gray-800 hover:bg-gray-200 focus:bg-gray-200 w-4/5">

                <img src="https://images.megapixl.com/4707/47075253.jpg" alt="#" className="mt-2 ml-6 h-8 w-8 rounded-full ring-2 ring-gray-400 mr-4 flex items-center" />
                <div className="px-2 flex flex-col items-begin ">
                    <p className="font-semibold mt-2">User1</p>
                    <p className="overflow-visible text-s p-4"> Whats up Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iste, natus expedita officia, est totam nam consequuntur aperiam ipsum iure quis voluptas. Mollitia corrupti est hic minus. Tempora, porro laborum.</p>
                </div>
            </Link>
        </div>
    )
}

export default Question


