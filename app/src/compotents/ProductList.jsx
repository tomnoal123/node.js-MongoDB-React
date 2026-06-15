import ProductItem from './ProductItem.jsx';
function ProductList({
    products,
    deleteProduct,
    updateProduct
}){

    return(
        <div>

            {products.map((product)=>(

                <ProductItem
                    key={product._id}
                    product={product}
                    deleteProduct={deleteProduct}
                    updateProduct={updateProduct}
                />

            ))}

        </div>
    )
}

export default ProductList;