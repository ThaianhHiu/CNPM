const SideDisheItem = ({ item, selectedSides, toggleSideDish }) => {
    return (
        <label style={styles.checkboxLabel}>
            <input
                type="checkbox"
                checked={
                    selectedSides.find((s) => s.id === item.id) !== undefined
                }
                onChange={() => toggleSideDish(item)}
                style={styles.checkbox}
            />
            <div style={{ display: "flex" }}>
                <span> {item.name}</span>
                <span>kr {item.price}</span>
            </div>
        </label>
    );
};
export const SideDishes = ({ selectedSides, toggleSideDish }) => {
    const sideDishes = [
        {
            id: 1,
            name: "Mashed Potatoes",
            price: 3.99,
        },
        {
            id: 2,
            name: "French Fries",
            price: 2.99,
        },
        {
            id: 3,
            name: "Onion Rings",
            price: 3.49,
        },
        {
            id: 4,
            name: "Coleslaw",
            price: 2.49,
        },
        {
            id: 5,
            name: "Garlic Bread",
            price: 1.99,
        },
    ];
    return (
        <>
            {sideDishes.map((sideDish) => (
                <SideDisheItem
                    key={sideDish.id}
                    item={sideDish}
                    selectedSides={selectedSides}
                    toggleSideDish={toggleSideDish}
                />
            ))}
        </>
    );
};

const styles = {
    checkboxLabel: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px",
    },
    checkbox: {
        width: "20px",
        height: "20px",
    },
};
