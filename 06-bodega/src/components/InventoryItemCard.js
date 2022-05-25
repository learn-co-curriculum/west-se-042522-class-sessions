import React from 'react'

function InventoryItemCard({id, image, name, price, handleClick}) {
    return(
        <div className="card" onClick={() => handleClick(id)}>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <button onClick={() => console.log("Deleting the item...")}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;