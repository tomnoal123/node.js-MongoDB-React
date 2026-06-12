import {useState,useEffect} from "react";
import ProductList from "../compotents/ProductList";
import ProductForm from "../compotents/ProductForm"

function Produkty(){

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [products,setProducts] = useState([]);


    useEffect(()=>{
        getProducts();
    },[])



    async function getProducts(){

        const res = await fetch("http://localhost:5000/products");

        const data = await res.json();

        setProducts(data);

    }



    async function addProduct(){

        await fetch("http://localhost:5000/products", {
        method:"POST",
        headers:{
        "Content-Type":"application/json"
    },
        body:JSON.stringify({
         name,
         price
        })
        }
        )

        setName("");
        setPrice("");

        getProducts();

    }



    async function deleteProduct(id){

    await fetch(`http://localhost:5000/products/${id}`,{
        method:"DELETE"
    }
    )

    getProducts();

    }
    async function updateProduct(id, data) {
        await fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
            })
        getProducts();
        
    }


    return(

    <div>

    <h1>Produkty</h1>


        <ProductForm
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        addProduct={addProduct}
        />


        <ProductList
        products={products}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
        />


    </div>

    )

    }


    export default Produkty;