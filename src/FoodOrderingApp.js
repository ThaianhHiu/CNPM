import React, { useState } from "react";
import AddToCartModal from "./components/AddToCartModal.js";
import CategoryList from "./components/CategoryList";
import MenuItem from "./components/MenuItem";
import Cart from "./components/Cart";

const FoodOrderingApp = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState(null);
  const [deliveryType, setDeliveryType] = useState("dineIn"); // Mặc định là Dine In

  const categories = [
    { name: "Sea food", icon: "🦐" },
    { name: "Fast food", icon: "🍔" },
    { name: "Pizza", icon: "🍕" },
    { name: "Drinks", icon: "🥤" },
    { name: "Orange juice", icon: "🍊" },
    { name: "Cupcake", icon: "🧁" },
    { name: "Juice", icon: "🥤" },
    { name: "Coca", icon: "🥤" },
    { name: "Pepsi", icon: "🥤" },
    { name: "Milk", icon: "🥤" },
    { name: "Tea", icon: "🍵" },
    { name: "Coffee", icon: "☕" },
    { name: "Ice cream", icon: "🍦" },
    { name: "Cake", icon: "🍰" },
  ];

  const menuItems = [
    { id: 1, name: "Hamburger", price: 120.0, image: "image/hamburger.png" },
    {
      id: 2,
      name: "Grilled squid satay",
      price: 125.0,
      image: "/image/tea.png",
    },
    {
      id: 3,
      name: "Grilled squid satay",
      price: 125.0,
      image: "/image/tea.png",
    },
    {
      id: 4,
      name: "Grilled squid satay",
      price: 125.0,
      image: "/image/mixao.png",
    },
    {
      id: 5,
      name: "Grilled squid satay",
      price: 125.0,
      image: "/image/tea.png",
    },
    {
      id: 6,
      name: "Grilled squid satay",
      price: 125.0,
      image: "/image/juice.png",
    },
  ];

  const updateModal = (item) => {
    setItem(item);
    setShowModal(true);
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setShowModal(false);
  };

  const updateQuantity = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleBackToHome = () => {
    // Logic to go back to the homepage or reset state
    setCart([]); // Clear the cart
    setDeliveryType("dineIn"); // Reset delivery type to default
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {showModal && (
        <AddToCartModal
          item={item}
          onClose={() => setShowModal(false)}
          onAddToCart={addToCart}
        />
      )}
      <div
        style={{ width: "66%", padding: "1rem", backgroundColor: "#f9fafb" }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <button
            onClick={handleBackToHome}
            style={{
              color: "#2563eb",
              border: "2px solid #2563eb",
              backgroundColor: "white",
              cursor: "pointer",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "bold",
            }}
          >
            🏠 Back to home
          </button>
        </div>

        <CategoryList categories={categories} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onAddToCartClick={updateModal}
            />
          ))}
        </div>
      </div>

      {/* Giỏ hàng bên phải */}
      <div
        style={{
          width: "34%",
          padding: "1rem",
          borderLeft: "1px solid #e5e7eb",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontSize: "1.125rem", fontWeight: 500 }}>
            🛒 Your Cart ({cart.length})
          </h2>

          {/* Nút lựa chọn "Dine In" / "Take Away" */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              style={{
                backgroundColor:
                  deliveryType === "dineIn" ? "#1e40af" : "#e4e7eb", // Màu khi chọn
                color: deliveryType === "dineIn" ? "white" : "#4b5563", // Màu chữ khi chọn
                border: "1px solid #d1d5db",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                cursor: "pointer",
              }}
              onClick={() => setDeliveryType("dineIn")}
            >
              Dine In
            </button>
            <button
              style={{
                backgroundColor:
                  deliveryType === "takeAway" ? "#1e40af" : "#e4e7eb", // Màu khi chọn
                color: deliveryType === "takeAway" ? "white" : "#4b5563", // Màu chữ khi chọn
                border: "1px solid #d1d5db",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                cursor: "pointer",
              }}
              onClick={() => setDeliveryType("takeAway")}
            >
              Take Away
            </button>
          </div>
        </div>

        {/* Hiển thị các mặt hàng trong giỏ hàng */}
        <div style={{ marginTop: "1.5rem" }}>
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
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
    </div>
  );
};

export default FoodOrderingApp;
