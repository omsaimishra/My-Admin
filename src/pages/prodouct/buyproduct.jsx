import React from "react";
import { useParams } from "react-router-dom";
import { ProductsRows } from "../../components/tabledatahome";
import "./buyproduct.css"; // Create this CSS file for styling

const Buyproduct = () => {
  const { id } = useParams();
  const product = ProductsRows.find((item) => item.id === Number(id));

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="buy-container">
      <h2>{product.name}</h2>
      <img src={product.img} alt={product.name} className="buy-image" />
      <div className="buy-info">
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Status:</strong> {product.status}</p>
      </div>
      <div className="card-form">
        <h3>Card Details</h3>
        <form>
          <input type="text" placeholder="Card Number" required />
          <input type="text" placeholder="Card Holder Name" required />
          <input type="text" placeholder="MM/YY" required />
          <input type="text" placeholder="CVV" required />
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Buyproduct;
