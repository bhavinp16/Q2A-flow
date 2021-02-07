import React from 'react'

function Signup() {
    return (
        <div className="flex flex-col items-center h-screen w-full bg-gray-800 justify-center text-gray-200">
                    <br /><br /><br />
                <form action ="/register" method="POST" class="form-order" >
                    <label for="name" class="text-value">Enter name</label>
                    <input type="text" name="Name" />
                    <br /><br />
                    <label for="number" class="text-value">Enter number</label>
                    <input type="text" name="number" />
                    <br /><br />
                    <label for="email" class="text-value">Enter email</label>
                    <input type="email" name="email" />
                    <br /><br />
                    <label for="address" class="text-value">Enter address</label>
                    <input type="text" name="address" />
                    <br /><br />
                    <label for="password" class="text-value">Enter password</label>
                    <input type="password" name="password" />
                    <br /><br />
                    <label for="confirm password" class="text-value">confirm password</label>
                    <input type="password" name="password2" />
                    <br /><br />
                    <button type="submit" id="btnlog" class="btn-style">SIGN UP</button>
                </form>

        </div>
    )
}

export default Signup

