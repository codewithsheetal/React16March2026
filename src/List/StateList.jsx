import React, { useState } from 'react'

function StateList() {
    const[products,setProducts]=useState(["iphone","macbook","laptop"])

function removeProduct(removeitemname){
    const updatedList = products.filter((name)=>{
        return name !== removeitemname ; 
    })
    // console.log(item);
    setProducts(updatedList);
}
    return (
        <>
            <h2>Display Product List</h2>

            {
                products.map((item,index)=>(
                    <div key={index}>
                        {item}
                        <button  onClick={()=>removeProduct(item)}>Remove Item</button>
                    </div>
                ))
            }
        </>
    )
}

export default StateList
