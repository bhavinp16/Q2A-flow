import React from 'react'

function Search() {
    return (
        <div className="flex flex-row justify-center items-begin  pt-0 pb-1 w-full mt-16">
            <div className="flex flex-row justify-center items-center p-2 pr-6 pb-1 w-4/5">
                <i className="material-icons border border-gray-200 p-2 pl-4 pr-1 rounded-l-full shadow-md">search
                </i>
                <input type="search" className="shadow-md rounded rounded-r-full my-2 w-full flex p-2 pl-4 border border-gray-200 focus:outline-none text-gray-600 font-semibold" placeholder="Search " spellCheck="false" />
            </div>
        </div>
    )
}

export default Search
