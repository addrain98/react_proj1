import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export default function Productlisting() {
    const context = useContext(ProductContext);
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}