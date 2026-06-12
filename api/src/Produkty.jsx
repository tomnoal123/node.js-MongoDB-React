import { useState, useEffect } from "react";

function Produkty(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editPrice, setEditPrice] = useState("");

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts(){
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        setProducts(data);
    }

    async function addProduct(){
        await fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                price
            })
        });

        setName("");
        setPrice("");
        getProducts();
    }

    async function deleteProduct(id){
        await fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE"
        });

        getProducts();
    }

    async function updateProduct(id){
        await fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: editName,
                price: editPrice
            })
        });

        setEditId(null);
        setEditName("");
        setEditPrice("");
        getProducts();
    }

    return(
        <div>
            <h1>Lista produktów</h1>

            <input
                type="text"
                placeholder="podaj nazwę produktu"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="podaj cenę produktu"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
            />

            <button onClick={addProduct}>
                Add product
            </button>

            {products.map((product)=>(
                <div key={product._id}>
                    {
                        editId === product._id ? (
                            <div>
                                <input
                                    value={editName}
                                    onChange={(e)=>setEditName(e.target.value)}
                                />

                                <input
                                    value={editPrice}
                                    onChange={(e)=>setEditPrice(e.target.value)}
                                />

                                <button onClick={()=>updateProduct(product._id)}>
                                    Save
                                </button>
                            </div>
                        ) : (
                            <p>
                                {product.name} - {product.price} zł
                            </p>
                        )
                    }

                    <button onClick={()=>deleteProduct(product._id)}>
                        Delete product
                    </button>

                    <button onClick={()=>{
                        setEditId(product._id);
                        setEditName(product.name);
                        setEditPrice(product.price);
                    }}>
                        Edit
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Produkty;