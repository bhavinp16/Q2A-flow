import React, { useState } from 'react'
import authContext from './authContext'

function AuthState(props) {
    const initialState = {
        user: {},
        isAuthenicated: {}
    }
    const [auth, setauth] = useState(initialState)

    return (
        <div>
            <authContext.Provider value={{ auth: { auth }, setauth }} >
                {props.children}
            </authContext.Provider>
        </div>
    )
}

export default AuthState
