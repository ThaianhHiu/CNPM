import React from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

export const CategoryList = ({
    categories,
    selectedCategory,
    onSelectCategory,
}) => {
    const categoryListRef = React.useRef(null);

    const scrollLeft = () => {
        categoryListRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };
    const scrollRight = () => {
        categoryListRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <GoTriangleLeft
                style={{ fontSize: "5rem", marginBottom: "24px" }}
                onClick={scrollLeft}
            />
            <div style={styles.categoryList} ref={categoryListRef}>
                {categories.map((category) => (
                    <div
                        key={category.name}
                        style={{
                            ...styles.categoryCard,
                            backgroundColor:
                                selectedCategory === category.name
                                    ? "var(--secondary-color)"
                                    : "white",
                            color:
                                selectedCategory === category.name
                                    ? "white"
                                    : "black",
                        }}
                        onClick={() => onSelectCategory(category.name)}
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            style={styles.categoryImage}
                        />
                        <span style={styles.categoryName}>{category.name}</span>
                    </div>
                ))}
            </div>
            <GoTriangleRight
                style={{ fontSize: "5rem", marginBottom: "24px" }}
                onClick={scrollRight}
            />
        </div>
    );
};

const styles = {
    categoryList: {
        display: "flex",
        justifyContent: "space-between",
        gap: "16px",
        overflowX: "auto",
        marginBottom: "24px",
        padding: "4px",
    },
    categoryCard: {
        padding: "16px",
        borderRadius: "8px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        flexShrink: 0,
    },
    categoryImage: {
        width: "40px",
        height: "40px",
        fontSize: "16px",
        fontWeight: "500",
    },
};
