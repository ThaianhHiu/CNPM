import React from "react";

const MenuItem = ({ item, onAddToCartClick }) => (
  <div
    style={{
      border: "1px solid #e5e7eb",
      borderRadius: "0.5rem",
      padding: "1rem",
      backgroundColor: "white",
    }}
  >
    <img
      src={item.image}
      alt={item.name}
      style={{
        width: "100%",
        height: "10rem",
        objectFit: "cover",
        borderRadius: "0.5rem",
        marginBottom: "0.75rem",
      }}
    />
    <h3 style={{ fontWeight: 500, marginBottom: "0.5rem" }}>{item.name}</h3>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ color: "#ef4444" }}>Kr {item.price.toFixed(2)}</span>
      <button
        onClick={() => onAddToCartClick(item)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img
          src="/image/add.png"
          alt="Add to cart"
          style={{ width: "1.5rem", height: "1.5rem" }}
        />
      </button>
    </div>
  </div>
);

export default MenuItem;
