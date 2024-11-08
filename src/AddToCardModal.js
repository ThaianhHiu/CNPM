import React, { useState } from "react";

const AddToCartModal = ({ item, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const itemToAdd = { ...item, quantity };
    onAddToCart(itemToAdd);
    onClose(); // Đóng modal sau khi thêm vào giỏ
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.container}>
        <h2 style={modalStyles.title}>Add to Cart</h2>
        <div style={modalStyles.content}>
          <img src={item.image} alt={item.name} style={modalStyles.image} />
          <h3>{item.name}</h3>
          <p>Price: Kr {item.price.toFixed(2)}</p>
          <div style={modalStyles.quantityContainer}>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              style={modalStyles.quantityButton}
            >
              -
            </button>
            <span style={modalStyles.quantity}>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              style={modalStyles.quantityButton}
            >
              +
            </button>
          </div>
          <button onClick={handleAddToCart} style={modalStyles.addButton}>
            Add to Cart
          </button>
        </div>
        <button onClick={onClose} style={modalStyles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  title: {
    marginBottom: "1rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },
  quantityButton: {
    border: "1px solid #e5e7eb",
    padding: "0.5rem",
    cursor: "pointer",
  },
  quantity: {
    margin: "0 1rem",
    fontSize: "1.5rem",
  },
  addButton: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    marginBottom: "1rem",
  },
  closeButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#2563eb",
  },
};

export default AddToCartModal;
