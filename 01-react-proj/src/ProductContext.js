import { useState, useEffect, createContext } from 'react';
import axios from 'axios'
export const ProductContext = createContext();
const BASE_API_URL = "https://3000-addrain98-mysqlpractice-fz6n6uq9rjp.ws-us110.gitpod.io"
export default function ProductContextData(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const response = await axios.get(BASE_API_URL + "/products");
            setProducts(response.data)
        }
        loadData();
    }, [])

    const context = {
        getProducts: () => {
            return products;
        },
        async addProduct(newProduct) {
            let { exp } = newProduct;
        
            // Format `exp` if it exists, otherwise set it to null
            if (exp) {
                const expDate = new Date(exp);
                const year = expDate.getFullYear();
                const month = ('0' + (expDate.getMonth() + 1)).slice(-2);
                const day = ('0' + expDate.getDate()).slice(-2);
                exp = `${year}-${month}-${day}`;
            } else {
                exp = null; // Explicitly set exp to null if it's undefined or not provided
            }
        
            try {
                const response = await axios.post(BASE_API_URL + "/products", {
                    ...newProduct,
                    price: parseInt(newProduct.price),
                    exp // Use the formatted `exp` or null
                });
                newProduct._id = response.data.insertedId;
                setProducts([...products, newProduct]);
            } catch (error) {
                console.error("Error adding product:", error);
                // Handle error appropriately
            }
        },
        getProductId(productId) {
            return products.find(p => p.product_id === parseInt(productId));
        },
        async updateProductById(productId, newProduct) {
            const response = await axios.put(BASE_API_URL + "/products/" + productId)
            newProduct.product_id = parseInt(productId)
            const index = products.findIndex(p => p.product_id === parseInt(productId))
            const left = [...products.slice(0, index)];
            const right = [...products.slice(index + 1)];
            const modified = [...left, newProduct, ...right];
            console.log(modified)
            setProducts(modified)
        },
        async deleteProductById(productId) {
            try {
                const response = await axios.delete(BASE_API_URL + "/products/" + productId);
                console.log("Deletion successful for product with ID:", productId, response.data);
                const index = products.findIndex(p => p.product_id === parseInt(productId));
                const modified = [...products.slice(0, index), ...products.slice(index + 1)];
                setProducts(modified);
                console.log("Product successfully deleted.");
            } catch (error) {
                console.error("Error deleting product with ID:", productId, error);
                console.log("Failed to delete product.");
            }
        }
    }
    return <ProductContext.Provider value={context}>
        {props.children}
    </ProductContext.Provider>

}