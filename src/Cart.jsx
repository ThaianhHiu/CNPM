import React from "react";
import { CartItem } from "./CartItem";
import { IoMdCart } from "react-icons/io";
import { api } from "./services/api";

export const Cart = ({ cartItems, onUpdateQuantity, total, onPlaceOrder }) => {
    const handlePlaceOrder = async () => {
        try {
            const order = {
                id: 0,
                items: cartItems,
                total: total,
            };
            await api.placeOrder(order);
            await api.clearCart();
            onPlaceOrder();
            // You might want to add some state to show a success message
            console.log("Order placed successfully");
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    return (
        <div style={styles.cart}>
            <div style={styles.cartHeader}>
                <div style={styles.cartTitle}>
                    <span role="img" aria-label="Shopping cart">
                        <IoMdCart style={{ color: "red" }} />
                    </span>
                    <span style={styles.cartTitleText}>
                        Your Cart ({cartItems.length})
                    </span>
                </div>
                <button style={styles.secondaryButton}>DINE IN</button>
            </div>
            <div style={styles.cartItems}>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id + item.options?.map((o) => o.id).join("")}
                        item={item}
                        onUpdateQuantity={onUpdateQuantity}
                    />
                ))}
            </div>
            <div style={styles.cartFooter}>
                <div style={styles.cartTotal}>
                    <span style={styles.cartTotalLabel}>Total:</span>
                    <div style={styles.cartTotalAmount}>
                        <p style={styles.cartTotalPrice}>
                            Kr {total.toFixed(2)}
                        </p>
                        <p style={styles.cartTotalTax}>
                            (Incl. tax 10% = Kr {(total * 0.1).toFixed(2)})
                        </p>
                    </div>
                </div>
                <button style={styles.paymentButton} onClick={handlePlaceOrder}>
                    PAYMENT
                </button>
            </div>
        </div>
    );
};

const styles = {
    cart: {
        borderLeft: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
    },
    cartHeader: {
        padding: "16px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cartTitle: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    cartTitleText: {
        fontWeight: "500",
        color: "red",
    },
    secondaryButton: {
        padding: "8px 16px",
        backgroundColor: "#e5e7eb",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
    },
    cartItems: {
        flex: 1,
        overflowY: "auto",
        padding: "16px",
    },
    cartFooter: {
        padding: "16px",
        borderTop: "1px solid #e5e7eb",
    },
    cartTotal: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
    },
    cartTotalLabel: {
        fontWeight: "500",
    },
    cartTotalAmount: {
        textAlign: "right",
    },
    cartTotalPrice: {
        fontSize: "20px",
        fontWeight: "700",
        color: "#dc2626",
    },
    cartTotalTax: {
        fontSize: "14px",
        color: "#6b7280",
    },
    paymentButton: {
        width: "100%",
        padding: "12px",
        backgroundColor: "#dc2626",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "500",
    },
};
