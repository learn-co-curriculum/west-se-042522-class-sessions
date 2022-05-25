# User stories
As a user I can:
1. [x] Show all items in CurrentInventoryList w/ image, name, price
2. [] Click on an item in CurrentInventoryList to add it to Reorder list.  No dups. Item persists in Inventory
3. [] Click on an item in ReorderInventoryList to remove it, DOM-only.
4. [] Click on a delete button which removes it from both lists in DOM and the backend (complete DELETE)

## Static data
```json
{
    "id": 1,
    "image": "./images/doritos.jpeg",
    "name": "Doritos",
    "price": 4.99
}
```

## Endpoints
GET /inventory
DELETE /inventory/:id