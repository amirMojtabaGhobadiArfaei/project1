export default function InventoryCards({image, productName, brand, quantity, price}) {
    return(
        <div className="Inventory-Card">
            <img src={image}/>
            <h2 id="productName">{productName}</h2>
            <h2 id="brand">{brand}</h2>
            <h2 id="quantity">{quantity}</h2>
            <h2 id="price">{price}</h2>
            <button>Add to cart</button>
        </div>
    )
} 