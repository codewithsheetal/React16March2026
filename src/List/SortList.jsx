import React from 'react'

function SortList() {
     const Products =[
        {id:1,name:"Biphone", price:30},
        {id:20,name:"ALaptop", price:25},
        {id:25,name:"CMacbook",price:50}
    ]

    let sortedproduct = [...Products];

    // const sortedList = sortedproduct.sort((a,b)=>a.price - b.price); //ascending
    // const sortedList = sortedproduct.sort((a,b)=>b.price - a.price); //descending

    // const sortedNameatoz = sortedproduct.sort((a,b)=>a.name.localeCompare(b.name))
    // const sortedNameztoa = sortedproduct.sort((a,b)=>b.name.localeCompare(a.name))
 
    const filterproductprice = Products.filter((a,b)=>a.price>27);
    return (
        <>
        {/* {
            sortedList.map((item)=>(
                <div key = {item.id}>
                    <h3>{item.name}- {item.price}</h3>
                </div>
            ))
        } */}
        {/* {
            sortedNameatoz.map((item)=>(
                <div key = {item.id}>
                    <h3>{item.name}- {item.price}</h3>
                </div>
            ))
        } */}
        {/* {
            sortedNameztoa.map((item)=>(
                <div key = {item.id}>
                    <h3>{item.name}- {item.price}</h3>
                </div>
            ))
        } */}
        {
            filterproductprice.map((item)=>(
                <div key = {item.id}>
                    <h3>{item.name}- {item.price}</h3>
                </div>
            ))
        }
        </>
    )
}

export default SortList
