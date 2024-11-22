import { FiShoppingCart } from "react-icons/fi"; 

export const MenuItem = ({ item, onAddToCart }) => (
    <div style={styles.menuItem}>
        <img src={item.image} alt={item.name} style={styles.menuItemImage} />
        <div style={styles.menuItemDetails}>
            <div>
                <h3 style={styles.menuItemName}>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                        {item.id}.
                    </span>{" "}
                    {item.name}
                </h3>
                <p style={styles.menuItemPrice}>Kr {item.price.toFixed(2)}</p>
            </div>
            <button
                onClick={() => onAddToCart(item)}
                style={styles.addToCartButton}
                aria-label={`Add ${item.name} to cart`}
            >
                <FiShoppingCart />
            </button>
        </div>
    </div>
);

const styles = {
    menuItem: {
        padding: "16px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    menuItemImage: {
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        marginBottom: "16px",
    },
    menuItemDetails: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    menuItemName: {
        fontWeight: "500",
        marginBottom: "4px",
    },
    menuItemPrice: {
        color: "#dc2626",
    },
    addToCartButton: {
        padding: "8px",
        backgroundColor: "#dc2626",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};
