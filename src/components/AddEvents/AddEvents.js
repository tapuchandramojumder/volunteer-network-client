import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
export default function AddEvents() {
    const { register, handleSubmit} = useForm();
    const [imageUrl,setImageUrl]=useState(null);

  const onSubmit = data =>{
      const eventData={
          name:data.name,
          imageUrl:imageUrl
      }
      fetch("https://dry-lowlands-70536.herokuapp.com/addEvent",{
          method:"POST",
          headers:{
              "Content-type":"application/json"
          },
          body:JSON.stringify(eventData)
      })
      .then(res=>console.log(res))
     
  };

  const handleImageUpload=(event)=>{
      console.log(event.target.files[0])
      const imageData = new FormData();
            imageData.set('key','dac86a01135c3483bd745ce5343f220c')
            imageData.append('image',event.target.files[0])
         
            axios.post('https://api.imgbb.com/1/upload', imageData)
              .then(function (response) {
                setImageUrl(response.data.data.display_url)
              })
              .catch(function (error) {
                console.log(error);
              });
  }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
        
            <input name='name' defaultValue="test" {...register("name")} /><br/>
            <input name='image' type="file" onChange={handleImageUpload}/><br/>
            <input type="submit" />

            </form>
        </div>
    )
}
