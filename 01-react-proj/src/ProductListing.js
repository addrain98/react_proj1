import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ProductContext } from "./ProductContext";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Productlisting() {
    const context = useContext(ProductContext);
    const navigate = useNavigate();
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
                                {/* <button 
                                    className="btn btn-danger" 
                                    onClick={() => handleDelete(p.product_id)}
                                >
                                    Delete
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}