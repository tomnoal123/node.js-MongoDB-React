import {useState,useEffect} from "react";
import ProductForm from "./compotents/ProductForm";
import ProductList from "./compotents/ProductList";


function App(){

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
        />


    </div>

    )

    }


    export default App;