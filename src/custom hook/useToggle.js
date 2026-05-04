import React, { useState } from 'react'

function useToggle(initialvalue = false) {

    const [value,setValue] = useState(initialvalue);

    const toggle =()=>{
        setValue(value => !value)        
    }
    return [value,toggle]
    
}

export default useToggle


