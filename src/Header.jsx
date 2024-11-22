import { AiFillHome } from "react-icons/ai";

export const Header = () => (
    <div style={headerStyles.header}>
        <button style={headerStyles.ghostButton}>
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <AiFillHome
                    style={{
                        backgroundColor: "#2c3956",
                        width: "40px",
                        height: "40px",
                        color: "white",
                        padding: "5px",
                        borderRadius: "20%",
                        marginRight: "8px",
                    }}
                />
                <span style={{ color: "#2c3956", fontWeight: "800" }}>
                    Back to home
                </span>
            </span>
        </button>
    </div>
);

const headerStyles = {
    header: {
        marginBottom: "24px",
    },
    ghostButton: {
        padding: "8px 16px",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontSize: "16px",
    },
};
