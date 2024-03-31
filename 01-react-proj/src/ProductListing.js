import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ProductContext } from "./ProductContext";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Productlisting() {
    const context = useContext(ProductContext);
    const navigate = useNavigate();
    const [flashMessage, setFlashMessage] = useState('');
    const [showFlash, setShowFlash] = useState(false);

    // Function to handle product deletion with confirmation and flash message
    const handleDelete = (productId) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this item?");
        if (isConfirmed) {
            context.deleteProductById(productId, () => {
                // Callback function to display flash message
                setFlashMessage("Product successfully deleted.");
                setShowFlash(true);
                setTimeout(() => setShowFlash(false), 3000); // Hide flash message after 3 seconds
            });
        }
    };
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Expiration Date</th>
                        <th>Category</th>
                        <th>Unit of Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {context.getProducts().map((p) => ( // Assuming getProducts method exists
                        <tr key={p.product_id}>
                            <td>{p.name}</td>
                            <td>${p.price}</td>
                            <td>{p.description}</td>
                            <td>{p.exp}</td>
                            <td>{p.category}</td>
                            <td>{p.uom}</td>
                            <td>
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => navigate('/edit/' + p.product_id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(p.product_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}