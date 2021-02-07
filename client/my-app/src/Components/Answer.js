import React from 'react'

function Answer() {
    return (
        <div className="flex flex-row justify-center items-center text-semibold p-1" >
            <div className="border-b border-gray-200 flex justify-begin items-begin bg-white text-gray-800 focus:bg-gray-200 w-4/5 rounded-lg shadow-sm">

                <img src="https://images.megapixl.com/4707/47075253.jpg" alt="#" className="mt-2 ml-6 h-8 w-8 rounded-full ring-2 ring-gray-400 mr-4 flex items-center" />
                <div className="px-2 flex flex-col items-begin ">
                    <p className="font-semibold mt-2">User532</p>
                    <p className="font-borderline font-serif"> Answer:</p>
                    <p className="overflow-visible text-s p-2"> Whats up Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iste, natus expedita officia, est totam nam consequuntur aperiam ipsum iure quis voluptas. Mollitia corrupti est hic minus. Tempora, porro laborum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus neque in, eos velit saepe et optio facere laborum! Perspiciatis autem tempora fugit deserunt ex culpa error quaerat omnis fugiat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est saepe error, distinctio delectus quaerat deserunt illum temporibus tenetur nihil inventore adipisci sunt, porro, repellendus ipsa quo quisquam veniam neque?</p>
                </div>
            </div>
        </div>
    )
}

export default Answer
