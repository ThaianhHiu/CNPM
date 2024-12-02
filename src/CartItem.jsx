import { FaPlus, FaMinus } from "react-icons/fa6";

export const CartItem = ({ item, onUpdateQuantity }) => (
    <div style={styles.cartItem}>
        <div style={styles.cartItemMain}>
            <img
                src={item.image}
                alt={item.name}
                style={styles.cartItemImage}
            />
            <div style={styles.cartItemDetails}>
                <div style={styles.cartItemHeader}>
                    <h3 style={styles.cartItemName}>{item.name}</h3>
                    <p style={styles.cartItemPrice}>
                         {item.price.toFixed(2)} VND
                    </p>
                </div>
                <div style={styles.quantityControl}>
                    <button
                        onClick={() => onUpdateQuantity(item, -1)}
                        style={{
                            ...styles.quantityButton,
                            borderColor: "black",
                        }}
                        aria-label={`Decrease quantity of ${item.name}`}
                    >
                        <FaMinus />
                    </button>
                    <span style={styles.quantityDisplay}>{item.quantity}</span>
                    <button
                        onClick={() => onUpdateQuantity(item, 1)}
                        style={{
                            ...styles.quantityButton,
                            color: "red",
                        }}
                        aria-label={`Increase quantity of ${item.name}`}
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>
        </div>
        {item.options && (
            <div style={styles.cartItemOptions}>
                {item.options.map((option) => (
                    <div key={option.name} style={styles.cartItemOption}>
                        <span>{option.name}</span>
                        <span> {option.price.toFixed(2)} VND </span>
                    </div>
                ))}
            </div>
        )}
    </div>
);

const styles = {
    cartItem: {
        marginBottom: "16px",
    },
    cartItemMain: {
        display: "flex",
        gap: "16px",
    },
    cartItemImage: {
        width: "50px",
        height: "50px",
        borderRadius: "4px",
    },
    cartItemDetails: {
        flex: 1,
    },
    cartItemHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    cartItemName: {
        fontWeight: "500",
    },
    cartItemPrice: {
        color: "#dc2626",
    },
    quantityControl: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginTop: "8px",
    },
    quantityButton: {
        width: "24px",
        height: "24px",
        backgroundColor: "#FFFFFFFF",
        border: "2px solid #ED0909FF",
        borderRadius: "4px",
        cursor: "pointer",
    },
    quantityDisplay: {
        width: "32px",
        textAlign: "center",
    },
    cartItemOptions: {
        paddingLeft: "66px",
        marginTop: "8px",
    },
    cartItemOption: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px",
        color: "#6b7280",
    },
};
