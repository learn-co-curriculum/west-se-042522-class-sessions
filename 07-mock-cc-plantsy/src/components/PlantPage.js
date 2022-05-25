import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  const baseURL = "http://localhost:6001"

  useEffect(() => {
    fetch(baseURL + "/plants")
      .then(res => res.json())
      .then(setPlants)
  

  }, [])
  

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
