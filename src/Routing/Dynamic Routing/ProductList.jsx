import React from 'react'
import { Link } from 'react-router-dom'

function ProductList() {
    const product =[
        {id:1, name:"laptop"},
        {id:2, name:"phone"},
        {id:3, name:"macbook"},
    ]
    return (
        <>
        {
            product.map((item)=>(
                <div key ={item.id}>
                    <Link to ={`/dynamic/${item.id}`}>
                        {item.name}
                    </Link>
                </div>
            ))
        }

        </>
    )
}

export default ProductList
