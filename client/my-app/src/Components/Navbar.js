import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div className="fixed flex flex-row justify-between h-16 border-b bg-white w-full shadow-md">
            <div className=" flex flex-row items-center justify-center pl-24 font-bold text-xl font-serif text-gray-600">
                Q2A-flow
            </div>

            <div className="font-bold flex flex-row items-center justify-center text-lg mr-32 font-serif">
                <Link to="/room" className=" p-8 text-gray-500 focus:outline-none hover:text-gray-900">
                    Home
                </Link>
                <Link className="p-8 text-gray-500 focus:outline-none hover:text-gray-900">
                    Projects
                </Link>
                <Link className="p-8 text-gray-500 focus:outline-none hover:text-gray-900">
                    My account
                </Link>
                <Link className="p-8 text-gray-500 focus:outline-none hover:text-gray-900">
                    Login
                </Link>
                <Link className="p-8 text-gray-500 focus:outline-none hover:text-gray-900">
                    Register
                </Link>
            </div>
        </div>
    )
}

export default Navbar
