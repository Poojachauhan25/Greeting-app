import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const getGreeting = async () => {
        if (!name.trim()) {
            setMessage("Error: Name is required.");
            return;
        }

        try {
            const response = await fetch(`/api/greet?name=${name}`);
            const data = await response.json();
            setMessage(data.message || data.error);
        } catch (error) {
            setMessage("Failed to fetch. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome to Younglabs</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
            />
            <button onClick={getGreeting} style={styles.button}>
                Get Greeting
            </button>
            {message && <p style={styles.message}>{message}</p>}
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "black",
        fontFamily: "Arial, sans-serif",
    },
    heading: {
        color: "grey",
        marginBottom: "20px",
        fontSize: "24px",
    },
    input: {
        padding: "10px",
        width: "250px",
        fontSize: "16px",
        border: "2px solid #007BFF",
        borderRadius: "5px",
        outline: "none",
        marginBottom: "15px",
    },
    button: {
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background 0.3s",
    },
    message: {
        marginTop: "20px",
        fontSize: "18px",
        color: "white",
    }
};

export default App;
