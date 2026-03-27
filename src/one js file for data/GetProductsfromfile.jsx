import React from 'react'
import Products from './products'

function GetProductsfromfile() {
    return (
        <>
        <h2>Product list</h2>
        
        {
             Products.map((item)=>(
                    <div key ={item.id}>
                        <h3>{item.name}-{item.price}</h3>
                        
                    </div>
                ))
        }
        </>
    )
}

export default GetProductsfromfile
