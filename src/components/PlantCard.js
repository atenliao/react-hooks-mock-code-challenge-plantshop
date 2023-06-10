import React, { useState } from "react";

function PlantCard({plantCard}) {
  const {name, image, price} = plantCard
  const [isInStock, setIsInStock] = useState(true)

 
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={()=>{setIsInStock(false)}}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
