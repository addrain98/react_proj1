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
        }
    }
    return <ProductContext.Provider value={context}>
        {props.children}
    </ProductContext.Provider>

}