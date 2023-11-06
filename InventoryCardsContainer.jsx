import InventoryCards from "./InventoryCards.jsx"

export default function InventoryCardsContainer({items}) {
    return (
        <div className = "Inventory-Container">
            {items.map((tor) => (
             <InventoryCards key={tor}
             image = {tor.image}
             productName = {tor.productName}
             brand = {tor.brand}
             quantity = {tor.quantity}
             price =  {tor.price} 
             /> 
            ))}
        </div>
    )
}