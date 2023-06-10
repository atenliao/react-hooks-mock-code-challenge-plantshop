import React, { useState } from "react";
// import PlantCard from "./PlantCard";

function NewPlantForm({onAddPlantCard}) {
  const [formData, setFormData] = useState({
    name:'',
    image:'',
    price: 0,
  })
  function handleChange(event){
    console.log(event.target.step)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  function handleFormSubmit(event){
    event.preventDefault();
    const newPlantCard = {
      name:formData.name,
      image:formData.image,
      price:formData.price
    }
    fetch("http://localhost:6001/plants",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newPlantCard)
      
    })
    .then((res)=>res.json())
    .then((plancard)=>onAddPlantCard(plancard))
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" value = {formData.name} onChange={handleChange} placeholder="Plant name" />
        <input type="text" name="image" value = {formData.image} onChange={handleChange} placeholder="Image URL" />
        <input type="number" name="price" step="0.01" value={formData.price} onChange={handleChange} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
