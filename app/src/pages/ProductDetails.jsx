import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

function ProductDetails(){

    const {id} = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() =>{
        getProducts()
    }, []);

    async function getProducts(){
        const res = await fetch(`http://localhost:5000/products/${id}`);

        const data = await res.json();

        setProduct(data);
    }


    if(!product){
        return(
            <h1>Loading...</h1>


        )
    }

    return (
        <div>
            <h1>
                {product.name}
            </h1>

            <p>
               Cena: {product.price} zł
            </p>
        </div>
    )
}
export default ProductDetails;