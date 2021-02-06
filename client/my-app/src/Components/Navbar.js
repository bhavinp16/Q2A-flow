import React from 'react'

function Navbar() {

    return (
        <div className="flex flex-row justify-between h-16">
            <div className=" flex flex-row items-center justify-center pl-24 font-bold text-xl font-serif text-gray-600">
                Q2A-flow
            </div>

            <div className="font-bold flex flex-row items-center justify-center text-lg mr-32 font-serif">
                <button className=" p-8 text-gray-500 focus:outline-none hover:text-gray-900">
                    Home
                </button>
                <button className="p-8 text-gray-500 focus:outline-none hover:text-gray-900">
                    Search
                </button>
                <button className="p-8 text-gray-500 focus:outline-none hover:text-gray-900">
                    Projects
                </button>
                <button className="p-8 text-gray-500 focus:outline-none hover:text-gray-900">
                    My account
                </button>
                <button className="p-8 text-gray-500 focus:outline-none hover:text-gray-900">
                    Login
                </button>
                <button className="p-8 text-gray-500 focus:outline-none hover:text-gray-900">
                    Register
                </button>
            </div>
        </div>
    )
}

export default Navbar
