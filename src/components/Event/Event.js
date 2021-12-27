import React from 'react'

export default function event({event}) {
    const handleDelete=(id)=>{
        console.log(id)
        fetch(`https://dry-lowlands-70536.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className='col-md-3'>
            <img style={{height:"300px"}} src={event.imageUrl}/>

            <h3>{event.name}<button onClick={()=>handleDelete(event._id)}>delete</button></h3>
         
        </div>
    )
}
