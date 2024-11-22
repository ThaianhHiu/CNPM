import React, { useState, useEffect } from "react";
import OrderModal from "./OrderModal";
import { Header } from "./Header";
import { CategoryList } from "./CategoryList";
import { MenuItem } from "./MenuItem";
import { Cart } from "./Cart";
import { api } from "./services/api";
import { WiWindBeaufort0 } from "react-icons/wi";

export default function FoodOrderingComponent() {
    const [cartItems, setCartItems] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [itemModal, setItemModal] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        fetchMenuAndCategories();
        fetchCart();
    }, []);

    const fetchMenuAndCategories = async () => {
        try {
            const [menuResponse, categoriesResponse] = await Promise.all([
                api.getMenu(),
                api.getCategories(),
            ]);
            setMenuItems(menuResponse.data);
            setCategories(categoriesResponse.data);
            if (categoriesResponse.data.length > 0) {
                setSelectedCategory(categoriesResponse.data[0].name);
            }
        } catch (error) {
            console.error("Error fetching menu and categories:", error);
        }
    };

    const fetchCart = async () => {
        try {
            const response = await api.getCart();
            setCartItems(response.data);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

    const addToCart = async (item, quantity = 1, sideDishes) => {
        try {
            const cartItem = {
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: quantity,
                options: sideDishes,
            };
            cartItems.find(
                (i) =>
                    i.id === item.id &&
                    JSON.stringify(i.options) == JSON.stringify(sideDishes)
            )
                ? updateQuantity(cartItem, 1)
                : await api.addToCart(cartItem);
            await fetchCart();
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    const updateQuantity = async (item, delta) => {
        try {
            const updatedCart = cartItems
                .map((i) =>
                    i.id === item.id &&
                    JSON.stringify(i.options) === JSON.stringify(item.options)
                        ? { ...i, quantity: Math.max(0, i.quantity + delta) }
                        : i
                )
                .filter((i) => i.quantity > 0);

            await api.updateCart(updatedCart);
            await fetchCart();
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    };

    const total = cartItems.reduce((sum, item) => {
        const itemTotal = item.price * item.quantity;
        const optionsTotal =
            (item.options?.reduce((sum, opt) => sum + opt.price, 0) || 0) *
            item.quantity;
        return sum + itemTotal + optionsTotal;
    }, 0);

    return (
        <div style={mainStyles.main}>
            <div style={mainStyles.menuSection}>
                <OrderModal
                    item={itemModal}
                    isOpen={isOpenModal}
                    onClose={() => {
                        setIsOpenModal(false);
                        setItemModal(null);
                    }}
                    onAddToCart={addToCart}
                />
                <Header />
                <CategoryList
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
                <hr style={{ margin: "0 0 10px 0", color: "#ccc" }}></hr>
                <h2 style={mainStyles.menuTitle}>{selectedCategory}</h2>
                <div style={mainStyles.menuGridContainer}>
                    <div style={mainStyles.menuGrid}>
                        {menuItems
                            .filter(
                                (item) => item.category === selectedCategory
                            )
                            .map((item) => (
                                <MenuItem
                                    key={item.id}
                                    item={item}
                                    onAddToCart={(item) => {
                                        setItemModal(item);
                                        setIsOpenModal(true);
                                    }}
                                />
                            ))}
                    </div>
                </div>
            </div>
            <Cart
                cartItems={cartItems}
                onUpdateQuantity={updateQuantity}
                total={total}
                onPlaceOrder={fetchCart}
            />
        </div>
    );
}

const mainStyles = {
    main: {
        display: "grid",
        gridTemplateColumns: "1fr 400px",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
    },
    menuSection: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "24px",
        backgroundColor: "#f9fafb",
        overflow: "hidden",
    },
    menuTitle: {
        fontSize: "24px",
        fontWeight: "600",
        marginBottom: "16px",
    },
    menuGridContainer: {
        flex: 1,
        overflow: "auto",
        paddingRight: "16px",
    },
    menuGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
        paddingBottom: "24px",
    },
};
