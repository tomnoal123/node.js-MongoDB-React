import { useState } from "react";
import {Link} from "react-router-dom";
function ProductItem({
    product,
    deleteProduct,
    updateProduct
}){
        const [edit, setEdit] = useState(false);
        const [name, setName] = useState(product.name);
        const [price, setPrice] = useState(product.price)

function save(){
    updateProduct(product._id,{
        name,
        price
    });
    setEdit(false)
}

    return(
        <div>

            {
                edit ?
                <div>
                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <input 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />

                    <button onClick={save}>Save</button>
                </div>
            :
            <div>
                
            <p>
                {product.name} - {product.price} zł
            </p>

            <Link to={`/products/${product._id}`}>
                Details
            </Link>

            </div>
            }
            <button
            onClick={()=>deleteProduct(product._id)}>
                Delete
            </button>
            <button onClick={() => setEdit(true)}>
                Edit
            </button>

        </div>
    )
}

export default ProductItem;