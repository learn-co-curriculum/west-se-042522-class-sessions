import React from 'react'

function InventoryItemCard({id, image, name, price, handleClick, onDelete}) {
    // you could also do the DELETE fetch here in a fn but you'd still have to
    // pass data up to InventoryManger to change state there
    // function handleDelete(e){
    //     e.stopPropagation();
    //     // fetch
    //     onDelete(id)
    // }
    return(
        <div className="card" onClick={() => handleClick(id)}>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <button onClick={(e) => onDelete(e, id)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;