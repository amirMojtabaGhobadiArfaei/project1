import CartList from "./CartList.jsx"

export default function CartListContainer({items}) {
    return (
        <div className = "CartList-Container">
            {items.map((tor) => (
             <CartList key={tor}            
             productName = {tor.productName}
             price =  {tor.price} 
             /> 
            ))}
        </div>
    )
}

