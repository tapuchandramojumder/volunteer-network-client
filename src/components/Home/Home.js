import React,{useState,useEffect} from 'react'
import Event from '../Event/Event'
export default function Home() {
const [events,setEvents]=useState([])
    useEffect(()=>{
        fetch('https://dry-lowlands-70536.herokuapp.com/events')
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[events])
    return (
        <div className="row">
            {
                events.map(event=><Event key={event._id} event={event}></Event>)
            }
        </div>
    )
}
