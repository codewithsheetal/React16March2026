import React from 'react'
import First from './Component/First';
import Temp from './Component/Temp';
import Twocomp from './Component/Twocomp';

function ConditionalRendering() {

    const isLogin =true;
    const flag =true;
    let msg;
    if(isLogin){
        msg =<h1>welcome</h1>
    }
    else{
        msg="oops!"
    }
    return (
        <>

        {/* ternary operator  */}
        {/* {isLogin ? <h1>Welcome,xyz</h1>:<h1>OOPS!!</h1>} */}

        {/* {isLogin ? <First/>: <Temp/>} */}

        {/* Logical AND  */}
        {/* {
            isLogin && <h1> hello, xyz</h1>
        }

        {isLogin && <Twocomp/>} */}

        {isLogin && flag && <h1>display </h1>}

        {/* {msg} */}

        </>
    )
}

export default ConditionalRendering
