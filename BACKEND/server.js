const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Let's go!");
});

app.listen(8080, () => {
    console.log(`server live on port 8080`);
});