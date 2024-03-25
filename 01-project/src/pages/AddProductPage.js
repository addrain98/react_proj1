import { useContext } from "react";
import ProductForm from "../ProductForm";
import { ProductContext } from "../ProductContext";
import { useNavigate } from "react-router-dom";

export default function AddProductPage() {

    const context = useContext(ProductContext);
    const navigate = useNavigate();

    return <>
        <h1>Add Product</h1>
        <ReviewForm
            label="Add Review"
            onSubmit={(review) => {
                context.addReview(review);
                navigate('/', {
                    'state': {
                        'message': 'New review has been added'
                    }
                });
            }} />
    </>
}