import React from "react";

const Cart = ({ cart, total, updateQuantity }) => (
  <div
    style={{
      width: "34%",
      padding: "1rem",
      borderLeft: "1px solid #e5e7eb",
      backgroundColor: "white",
    }}
  >
    <h2 style={{ fontSize: "1.125rem", fontWeight: 500 }}>
      🛒 Your Cart ({cart.length})
    </h2>
    <div style={{ marginBottom: "2rem" }}>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "3rem",
                height: "3rem",
                objectFit: "cover",
                borderRadius: "0.25rem",
                marginRight: "0.75rem",
              }}
            />
            <div>
              <h3 style={{ fontWeight: 500 }}>{item.name}</h3>
              <span style={{ color: "#ef4444" }}>
                Kr {item.price.toFixed(2)}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              onClick={() => updateQuantity(item.id, -1)}
              style={{
                padding: "0.25rem 0.5rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.25rem",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, 1)}
              style={{
                padding: "0.25rem 0.5rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.25rem",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
    <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <span style={{ fontWeight: 500 }}>Total:</span>
        <span style={{ color: "#ef4444", fontWeight: 500 }}>
          Kr {total.toFixed(2)}
        </span>
      </div>
      <button
        style={{
          width: "100%",
          backgroundColor: "#ef4444",
          color: "white",
          padding: "0.75rem",
          borderRadius: "0.5rem",
          border: "none",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        PAYMENT
      </button>
    </div>
  </div>
);

export default Cart;
