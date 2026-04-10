import React, { useEffect } from 'react'

function ReactLifeCycle() {

    // Mounting :- Comp is created , insert to dom (first render )
    // Updating :- comp re-render 
    // Unmounting:-comp expired (comp removed from dom)


    useEffect(() => {
        //write code which you want to run when comp is mount
        console.log("comp Mounted");

        const timer =setInterval(()=>{
            console.log("Running");
            
        },1000)

        return () => {
            //write code which you want to run when comp is unmount

            console.log("comp unmounted");
            clearInterval(timer)
        }

    }, [])

    return (
        <>
            <h2>React Life Cycle</h2>
        </>
    )
}

export default ReactLifeCycle
