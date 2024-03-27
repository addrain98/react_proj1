import ProductForm from "./ProductForm";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import { Navigate, useNavigate } from "react-router-dom";
export default function AddProductPage() {
    const context = useContext(ProductContext)
    const navigate = useNavigate();
    return <>
        <h1>
            Add Product
        </h1>
        <ProductForm onSubmit = {(product) => {
            context.addProduct(product);
            navigate ('/');
        }}/>
    </>
}