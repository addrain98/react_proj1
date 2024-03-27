import { useState } from "react";
import ProductListingPage from "./ProductListingPage";

export default function ProductForm(props) {
    const [formState, setFormState] = useState({
        "name": '',
        "price": 0,
        "description": '',
        "exp": new Date,
        "category": '',
        "uom": ''
    })

    const handleFormField = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }
    const submitForm = (event) => {
        props.onSubmit(formState)
    }

    return <>
        <div>
            <label> Product Name</label>
            <input type="text"
                   name="name"
                   value={formState.name}
                   className = "form-control"
                   onChange={handleFormField}
            />
        </div>
        <div>
            <label> Price </label>
            <input type="number"
                   name="price"
                   value={formState.price}
                   className = "form-control"
                   onChange={handleFormField}
            />
        </div>
        <div>
            <label> Product Description</label>
            <textarea
                   name="description"
                   value={formState.description}
                   className = "form-control"
                   onChange={handleFormField}
            ></textarea>
        </div>
        <div>
            <label> Expiry Date </label>
            <input type="date"
                   name="exp"
                   value={formState.exp}
                   className = "form-control"
                   onChange={handleFormField}
            />
        </div>
        <div>
            <label> Category </label>
            <input type="text"
                   name="category"
                   value={formState.category}
                   className = "form-control"
                   onChange={handleFormField}
            />
        </div>
        <div>
            <label> Unit of Measure </label>
            <input type="text"
                   name="uom"
                   value={formState.uom}
                   className = "form-control"
                   onChange={handleFormField}
            />
        </div>
        <button className = "btn btn-primary mt-3"
            onClick = {submitForm}
        >Add Product</button>
    </>
}