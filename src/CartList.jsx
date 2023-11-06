export default function CartList({productName, price}) {
    return(
        <div className="CartList-Card">
            <h2 id="productName">{productName}</h2>
            <h2 id="price">{price}</h2>
            <button>Remove</button>
        </div>
    )
} 