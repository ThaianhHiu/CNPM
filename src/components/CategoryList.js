import React, { useRef } from "react";

const CategoryList = ({ categories }) => {
  const categoryRef = useRef(null);

  const scrollLeft = () => {
    categoryRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    categoryRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}
    >
      <button
        onClick={scrollLeft}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "2rem",
          marginRight: "1rem",
        }}
      >
        ◀️
      </button>
      <div
        ref={categoryRef}
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "hidden",
          flexGrow: 1,
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              width: "6rem",
              height: "6rem",
              flexShrink: 0,
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backgroundColor: "white",
            }}
          >
            <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
              {category.icon}
            </span>
            <span style={{ fontSize: "0.875rem" }}>{category.name}</span>
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "2rem",
          marginLeft: "1rem",
        }}
      >
        ▶️
      </button>
    </div>
  );
};

export default CategoryList;
