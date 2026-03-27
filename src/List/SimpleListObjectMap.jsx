import React from 'react'

function SimpleListObjectMap() {

    const lang =["Reactjs","HTML","CSS"]

    

    // console.log(lang[0]);

    const langobj =[
        {id:1, name:"ReactJS"},
        {id:2, name:"HTML"},
        {id:3, name:"CSS"}
    ]
    
    const Products =[
        {id:1,name:"iphone", price:999},
        {id:20,name:"Laptop", price:9999},
        {id:25,name:"Macbook",price:99999}
    ]

    return (
        <>
            {/* without key  */}
            {/* {
                lang.map((langname)=>(
                    <p>{langname}</p>
                ))
            } */}

            {/* with Key  */}

            {/* {
                lang.map((langname,key)=>(
                    <p key={key}> {langname} -{key}</p>
                ))
            } */}

            {/* use id as a key  */}
            {/* {
                langobj.map((langname)=>(
                    <p key={langname.id}> {langname.name} -{langname.id}</p>
                ))
            } */}
            {/* list of Object - display products  */}
            {
                Products.map((item)=>(
                    <div key ={item.id}>
                        <h3>{item.name}</h3>
                        <span>{item.price}</span>
                    </div>
                ))
            }
        </>
    )
}

export default SimpleListObjectMap
