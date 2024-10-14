//requisições
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

//definições
app.set("view engine", "jsx");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: "uabadabdabdubdub",
    cookie: {
        maxAge: 270000000
    }
}));

//rota principal
app.get("/", (req, res) => {
    res.statusCode(200);
    res.render("home");
});

//porta do servidor
app.listen(3030, () => {
    console.log("Server on");
});