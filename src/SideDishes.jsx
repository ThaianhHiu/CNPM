const SideDisheItem = ({ side, selectedSides, toggleSideDish }) => {
    return (
        <label style={styles.checkboxLabel}>
            <input
                type="checkbox"
                checked={
                    selectedSides.find((s) => s.id === side.id) !== undefined
                }
                onChange={() => toggleSideDish(side)}
                style={styles.checkbox}
            />
            <div style={{ display: "flex" }}>
                <span style={{ marginRight: "10px" }}> {side.name} </span>
                <span style={{ color: "red", fontWeight: "bold" }}>
                    {"kr " + side.price}
                </span>
            </div>
        </label>
    );
};

export const SideDishes = ({ selectedSides, toggleSideDish, sideDishes }) => {
    return (
        <>
            {sideDishes &&
                sideDishes.map((sideDish) => (
                    <SideDisheItem
                        key={sideDish.id}
                        side={sideDish}
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
