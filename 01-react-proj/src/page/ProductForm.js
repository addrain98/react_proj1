import { useState } from "react";

export default function ProductForm() {
    const [formState, setFormState] = useState({
        "name": '',
        "price": 0,
        "description": '',
        "exp": new Date,
        "category": '',
        "uom": ''
    })

    return <>
        <div>
            <label> Product Name</label>
            <input type="text"
                   name="product"
                   value={formState.product}
                   className = "form-control"
            />
        </div>
        <div>
            <label> Price </label>
            <input type="number"
                   name="price"
                   value={formState.price}
                   className = "form-control"
            />
        </div>
        <div>
            <label> Product Description</label>
            <input type="textarea"
                   name="description"
                   value={formState.description}
                   className = "form-control"
            />
        </div>
        <div>
            <label> Expiry Date </label>
            <input type="date"
                   name="exp"
                   value={formState.exp}
                   className = "form-control"
            />
        </div>
        <div>
            <label> Category </label>
            <input type="text"
                   name="category"
                   value={formState.category}
                   className = "form-control"
            />
        </div>
        <div>
            <label> Unit of Measure </label>
            <input type="text"
                   name="uom"
                   value={formState.uom}
                   className = "form-control"
            />
        </div>
        <button class = "btn btn-primary mt-3">Add Product</button>
    </>
}