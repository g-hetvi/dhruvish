const express = require("express"); 
const bodyParser = require("body-parser");
const router = require("./routes/ai.route"); 
const path = require("path");

require('dotenv').config();
require("./config/db"); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/", router);

// app.get('/', (req, res) => {
//     res.render('index');
// });

app.get('/', (req, res) => {
    res.render('layout', { body: '<section><form action="/ask/question" method="POST"><div><label for="question">Ask a question:</label><textarea name="question" id="question" required></textarea></div><button type="submit">Submit</button></form></section>' });
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});
