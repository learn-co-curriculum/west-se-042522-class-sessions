import React, { useState, useEffect } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventory, setInventory] = useState([])
    const [reorders, setReorders] = useState([])

    const baseURL = "http://localhost:8001/inventory"

    useEffect(() => {
      fetch(baseURL)
        .then(res => res.json())
        .then(setInventory)
    }, [])
    
    const addToReorders = id => {
        console.log('id: ', id);
        const itemToAdd = inventory.find(item => item.id === id)
        if(!reorders.includes(itemToAdd)){
            setReorders([...reorders, itemToAdd])
        }
    }

    const removeFromReorders = id => {
        const filteredReorders = reorders.filter(roi => roi.id !== id)
        setReorders(filteredReorders)
    }

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} onAddClick={addToReorders}/>
            <ReorderInventoryList reorders={reorders} onRemoveClick={removeFromReorders}/>
        </div>
    );
}

export default InventoryManager;