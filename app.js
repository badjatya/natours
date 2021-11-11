const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.json({message: "Hello from backend", request: "Natours"})
});

app.post("/", (req,res) => {
    res.send("Hello post")
});

app.listen(5000, () => {
    console.log(`Listening at http://localhost:${5000}`);
})