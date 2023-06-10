import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantCards, setPlantCards] =useState([])
  // const [plantCardsFirst, setPlantCardsFirst] = useState(plantCards)
  const [getPlantCards, setgetPlantCards] = useState(plantCards)
  const [empty, setempty]=useState(true)
  // const getPlantCards = [...plantCards]
  
  // console.log('get Plan',getPlantCards)
  useEffect(()=> {
    fetch('http://localhost:6001/plants')
    .then(res=> res.json())
    .then(plants => setPlantCards(plants))
   
  },[])

  function handleAddPlantCard(addedPlantCard){
    setPlantCards([...plantCards,addedPlantCard])
  }

  function handleSearch(value){
    if(value === ""){
      setPlantCards([...plantCards])
      setempty(true)
    }else{
      setgetPlantCards([...plantCards].filter((card)=>{
        return (card.name.toLowerCase().includes(value.toLowerCase()))
      }) )
      setempty(false)
      // setPlantCards(updatedPlantCard)
    }

  }

  return (
    <main>
      <NewPlantForm onAddPlantCard={handleAddPlantCard}/>
      <Search onSearch={handleSearch}/>
      
      <PlantList plantCards={empty?plantCards:getPlantCards}/>
    </main>
  );
}

export default PlantPage;
