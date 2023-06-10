import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantCards}) {
  
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {
      plantCards.map((card)=> 
      <PlantCard key = {card.id} plantCard = {card} />
      )
      
      }
      </ul>
  );
}

export default PlantList;
