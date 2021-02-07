import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        // <div className ="flex flex-col  items-center">
        //     <h1>Login</h1>

        //     <form action="/login" method="POST" className = "flex flex-col justify-center items-center h-screen">
        //         <div >
        //             <label for="email">Email</label>
        //             <input type="email" id="email" name="email" required />
        //         </div>
        //         <div>
        //             <label for="password">Password</label>
        //             <input type="password" id="password" name="password" required />
        //         </div>
        //         <button type="submit">Login</button>
        //     </form>
        //     <Link to="/register" className="flex flex-col justify-center items-center ">Create an account</Link>
        // </div>
        <div className="flex flex-col items-center h-screen w-full bg-gray-800 justify-center">
            <form action="/login" method="POST"className="h-3/4 w-1/2 flex flex-col items-center justify-center bg-gray-200">
                <label for="email" className="pr-32">Email</label>
                <input type="email" id="email" name="email" required />

                <label for="password" className="pr-28">Password</label>
                <input type="password" id="password" name="password" required />

                <div className="flex flex-row">
                <button type="submit" className="pt-4"> Login </button>
                <Link to="/register" className="pl-4 pt-4 ">Create an account</Link>
                </div>
            </form>  
        </div>
    )
}

export default Login
