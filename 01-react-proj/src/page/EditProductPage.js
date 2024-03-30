import { useParams } from "react-router-dom"
import { useContext } from 'react';
import {ProductContext} from "../ProductContext"
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
export default function EditProduct(){
    
    const params = useParams();
    const productId = params.productId;
    const navigate = useNavigate();

    const context = useContext(ProductContext);
    const productToEdit = context.getProductId(productId)
    return<>
    <h1>Editing Product: {productToEdit.name}</h1>
    <ProductForm initialValue = {productToEdit}
                  label = "Edit Product"
                  onSubmit={(product) => {
                    context.updateProductById(productId, product)
                    navigate('/')
                  }}
                  />

    </>
}
