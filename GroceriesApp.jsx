import {products} from "./product.js"
import InventoryCardsContainer from  "./InventoryCardsContainer.jsx"
import CartListContainer from  "./CartListContainer.jsx"
import { useState } from "react"

export default function GroceriesApp() {
    
 const addToCart[stuff, setStuff] = useState
    return(
        <div>
        <InventoryCardsContainer items = {products}/>
        <CartListContainer items = {products}/>
        </div>
    )
}
