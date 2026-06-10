const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (res, req) => {
    res.status(200).json({ message: "Hello" })
})

app.listen()
