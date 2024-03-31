import { useState, createContext } from 'react';
export const ProductContext = createContext();
export default function ProductContextData(props) {
    const [products, setProducts] = useState([
        {
            "product_id": 1,
            "name": "CGA-Lettuce Nutrient",
            "price": 10,
            "description": "5kg A & 5kg B",
            "exp": "Sun Jan 05 2025",
            "uom_id": 1,
            "category_id": 1,
            "category": "nutrient",
            "uom": "set"
        },
        {
            "product_id": 2,
            "name": "CGA-Herb Nutrient",
            "price": 10,
            "description": "5kg A & 5kg B",
            "exp": "Sun Jan 05 2025",
            "uom_id": 1,
            "category_id": 1,
            "category": "nutrient",
            "uom": "set"
        },
        {
            "product_id": 1,
            "name": "PGF Nutrient",
            "price": 10,
            "description": "5kg A & 5kg B",
            "exp": "Sun Jan 05 2025",
            "uom_id": 1,
            "category_id": 1,
            "category": "nutrient",
            "uom": "set"
        }

    ])

    const context = {
        getProducts: () => {
            return products;
        },
        addProduct(newProduct) {
            newProduct._id = Math.floor(Math.random() * 10000 + 9999);
            setProducts([...products, newProduct]);
        },
        getProductId(productId) {
            return products.find(p =>p.product_id === parseInt(productId));
        },
        updateProductById(productId, newProduct) {
            newProduct.product_id = parseInt(productId)
            const index = products.findIndex(p => p.product_id === parseInt(productId))
            const left = [...products.slice(0,index)];
            const right = [...products.slice(index+1)];
            const modified = [...left,newProduct, ...right];
            setProducts(modified)
        },
        deleteProductById(productId) {
            console.log("Attempting to delete product with ID:", productId);
            let index = products.findIndex(p => p.product_id === parseInt(productId))
            let modified = [...products.slice(0, index), 
                ...products.slice(index+1)];
            console.log("Modified products array:", modified);
            setProducts(modified)
        }
    }
    return <ProductContext.Provider value={context}>
        {props.children}
    </ProductContext.Provider>

}