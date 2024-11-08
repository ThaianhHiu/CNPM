import React, { useState } from "react";

const AddToCartModal = ({ item, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [sideDishes, setSideDishes] = useState("Vegetables");

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleSideDishChange = (event) => {
    setSideDishes(event.target.value);
  };

  const totalPrice = item.price * quantity;

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
          width: "400px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          &times;
        </button>

        {/* Item Image and Details */}
        <div style={{ display: "flex", marginBottom: "1rem" }}>
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "0.25rem",
              marginRight: "1rem",
            }}
          />
          <div>
            <h3 style={{ fontWeight: 500, fontSize: "1.125rem" }}>
              {item.name}
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
              SKU: {item.id}
            </p>
            <div
              style={{
                fontWeight: 500,
                fontSize: "1.125rem",
                color: "#ef4444",
              }}
            >
              kr {item.price.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Quantity Selector */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <button
            onClick={() => handleQuantityChange(-1)}
            style={{
              padding: "0.5rem",
              border: "1px solid #e5e7eb",
              borderRadius: "0.25rem",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            -
          </button>
          <span style={{ margin: "0 1rem" }}>{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            style={{
              padding: "0.5rem",
              border: "1px solid #e5e7eb",
              borderRadius: "0.25rem",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>

        {/* Side Dishes */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ fontWeight: 500 }}>Side dishes (*)</label>
          <select
            value={sideDishes}
            onChange={handleSideDishChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              border: "1px solid #e5e7eb",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            <option value="Vegetables">Vegetables</option>
            <option value="Fries">Fries</option>
            <option value="Salad">Salad</option>
            <option value="Rice">Rice</option>
          </select>
        </div>

        {/* Additional Properties */}
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ fontWeight: 500 }}>Protein: What is Lorem ipsum?</p>
          <p style={{ fontWeight: 500 }}>Additives: 03</p>
          <p style={{ fontWeight: 500 }}>Baking material: 04</p>
          <p style={{ fontWeight: 500 }}>Food decoration: 04</p>
        </div>

        {/* Total and Add to Cart Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
            borderTop: "1px solid #e5e7eb",
            paddingTop: "1rem",
          }}
        >
          <div style={{ fontWeight: 500 }}>Total:</div>
          <div style={{ color: "#ef4444", fontWeight: 500 }}>
            kr {totalPrice.toFixed(2)}
          </div>
        </div>

        <button
          onClick={() => onAddToCart({ ...item, quantity, sideDishes })}
          style={{
            width: "100%",
            backgroundColor: "#ef4444",
            color: "white",
            padding: "0.75rem",
            borderRadius: "0.5rem",
            border: "none",
            fontWeight: 500,
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCartModal;
