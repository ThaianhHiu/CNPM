import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { SideDishes } from "./SideDishes";
import { api } from "./services/api";

const OrderModal = ({ item, isOpen, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSides, setSelectedSides] = useState([]);
    const [sideDishes, setSideDishes] = useState([]);

    useEffect(() => {
        try {
            const fetchSideDishes = async () => {
                const response = await api.getSideDishes(item.id);
                setSideDishes(
                    response.data.filter((s) => s.menuid === item?.id)
                );
            };
            fetchSideDishes();
        } catch (e) {
            console.error("Error fetching side dishes:", e);
        }
    }, [item]);

    if (!isOpen) return null;

    const updateQuantity = (delta) => {
        setQuantity(Math.max(1, quantity + delta));
    };

    const toggleSideDish = (side) => {
        setSelectedSides((prev) =>
            prev.find((s) => s.id === side.id)
                ? prev.filter((s) => s.id !== side.id)
                : [...prev, side].sort((a, b) => a.id - b.id)
        );
    };

    const handleAddToCart = () => {
        onAddToCart(item, quantity, selectedSides);
        onClose();
        setQuantity(1);
        setSelectedSides([]);
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <RiCloseLargeFill
                    onClick={onClose}
                    style={styles.closeButton}
                />
                <h2 style={styles.title}>ADD TO CART</h2>
                <div style={styles.content}>
                    <div style={styles.productInfo}>
                        <img
                            src={item.image}
                            alt={item.name}
                            style={styles.productImage}
                        />
                        <div style={styles.productDetails}>
                            <div style={styles.detailRow}>
                                <span style={styles.detailLabel}>SKU</span>
                                <span>{item.id}</span>
                            </div>
                            <div style={styles.detailRow}>
                                <span style={styles.detailLabel}>
                                    {item.name}
                                </span>
                                <span>{item.category}</span>
                            </div>
                            <div style={styles.detailRow}>
                                <span style={styles.detailLabel}>
                                    Unit Price
                                </span>
                                <span style={styles.price}>
                                    kr {item.price.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={styles.quantityContainer}>
                        <span>Quantity</span>
                        <div style={styles.quantityControls}>
                            <FaMinus
                                onClick={() => updateQuantity(-1)}
                                style={{
                                    ...styles.quantityButton,
                                    border: "1px solid black",
                                }}
                            />
                            <span style={styles.quantityDisplay}>
                                {quantity}
                            </span>
                            <FaPlus
                                onClick={() => updateQuantity(1)}
                                style={{
                                    ...styles.quantityButton,
                                    color: "red",
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        {sideDishes && (
                            <>
                                <h3 style={styles.sideTitle}>
                                    Side dishes (
                                    <span
                                        style={{
                                            color: "red",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        *
                                    </span>
                                    )
                                </h3>
                                <SideDishes
                                    selectedSides={selectedSides}
                                    toggleSideDish={toggleSideDish}
                                    sideDishes={sideDishes}
                                />
                                <p style={styles.sideNote}>
                                    Select best quantity of side dishes for
                                    better taste
                                </p>
                            </>
                        )}
                    </div>
                    <button
                        onClick={handleAddToCart}
                        style={styles.addToCartButton}
                    >
                        <FiShoppingCart style={styles.cartIcon} />
                        Kr{" "}
                        {(
                            (item.price +
                                selectedSides.reduce(
                                    (sum, item) => item.price + sum,
                                    0
                                )) *
                            quantity
                        ).toFixed(2)}
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
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
    modal: {
        backgroundColor: "white",
        borderRadius: "8px",
        width: "90%",
        maxWidth: "500px",
        position: "relative",
        padding: "20px",
    },
    closeButton: {
        position: "absolute",
        right: "10px",
        top: "10px",
        fontSize: "24px",
        cursor: "pointer",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    productInfo: {
        display: "flex",
        gap: "20px",
    },
    productImage: {
        width: "100px",
        height: "100px",
        objectFit: "cover",
    },
    productDetails: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
    },
    detailRow: {
        display: "flex",
        justifyContent: "space-between",
    },
    detailLabel: {
        fontWeight: "bold",
    },
    price: {
        color: "#ff0000",
        fontWeight: "bold",
        fontSize: "1.25rem",
    },
    quantityContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    quantityControls: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    quantityButton: {
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        border: "1px solid #ED0909",
        borderRadius: "4px",
        cursor: "pointer",
    },
    quantityDisplay: {
        fontSize: "18px",
    },
    sideTitle: {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    sideNote: {
        fontSize: "14px",
        color: "#666",
        marginTop: "5px",
    },
    addToCartButton: {
        width: "100%",
        backgroundColor: "#ff0000",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
    },
    cartIcon: {
        fontSize: "24px",
    },
};

export default OrderModal;
