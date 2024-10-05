const express = require('express');
const ejs = require('ejs');

const app = express();

const PORT = 8000;

//Set view engine
app.set('view engine', 'ejs');

//Create virtual paths using static
app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));

//Middleware so I can parse requests
app.use(express.urlencoded({ extended: true }));

//Root route
app.get('/', (req, res) => {
    res.render("index");
    return;
})

//Listen on PORT
app.listen(PORT, () => {
    console.log("Node application listening on port " + PORT);
})

