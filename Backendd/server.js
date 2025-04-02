const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/greet", (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.json({ error: "Name is required." });
    }
    res.json({ message: `Hello, ${name}! i welcome you here!😊` });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
