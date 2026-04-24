import React, { createContext } from 'react'

export const userContext = createContext();

function ContextandProvider({children}) {
    return (
        <>
        <userContext.Provider value="sanvi">
            {children}
        </userContext.Provider>
        </>
    )
}

export default ContextandProvider
