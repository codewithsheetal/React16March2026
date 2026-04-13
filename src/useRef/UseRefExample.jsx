import React, { useRef } from 'react'

function UseRefExample() {

    const inputRef = useRef();

    console.log("render");


    function HandleClick() {

        console.log(inputRef.current);

        console.log(inputRef.current.value);
        inputRef.current.style.backgroundColor = 'blue';

    }

    function focusInput() {
        inputRef.current.focus();

    }

    function toggle(){
        if(inputRef.current.style.display !='none'){
            inputRef.current.style.display = 'none'
        }
        else{
            inputRef.current.style.display ='inline'
        }
    }
    return (
        <>

            <input type="text" ref={inputRef} />
            <button onClick={HandleClick}>Input Submit</button>

            <button onClick={focusInput}>Auto Focus</button>

            <br />
            <button onClick={toggle}>Toggle Input</button>


        </>
    )
}

export default UseRefExample
