const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(8001, () => {
    console.log("Estou escutando na porta É MAIS DE 8 mil! (8001)");
});