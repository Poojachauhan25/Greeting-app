import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const getGreeting = async () => {
        if (!name) {
            setMessage("Please enter a name!⚠️");
            return;
        }

        const response = await fetch(`http://localhost:5000/api/greet?name=${name}`);
        const data = await response.json();
        setMessage(data.message || data.error);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}><i>_Younglabs_</i></h2>
            <input 
                type="text" 
                placeholder="Enter your name..." 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                style={styles.input}
            />
    
            <button onClick={getGreeting} style={styles.button}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"} 
                onMouseLeave={(e) => e.target.style.backgroundColor = "#007BFF"} 
            >Get Greeting</button>
        
            <h3 style={styles.message}>{message}</h3>
        </div>
    );
}

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
        fontSize: "44px",
    },
    input: {
        padding: "10px",
        width: "350px",
        fontSize: "16px",
        border: "2px solid blue",
        borderRadius: "5px",
        outline: "none",
        marginBottom: "15px",
    },
    button: {
        backgroundColor: "blue",
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
        fontSize: "30px",
        color: "white",
    }
};

export default App;
