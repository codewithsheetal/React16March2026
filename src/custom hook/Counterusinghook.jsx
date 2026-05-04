import React, { useState } from 'react'
import useCount from './useCount'

function Counterusinghook() {
   const {count, dec, inc ,reset } = useCount(100);
    return (
        <>
        count: {count}
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
        <button onClick={reset}>reset</button>
        </>
    )
}

export default Counterusinghook
