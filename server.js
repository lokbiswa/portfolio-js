const express = require("express");
const bodyParser = require("body-parser");
const sendMail = require("./mailer");
const path = require("path");

app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public/")));

// enviroment port or 3000
const PORT = process.env.PORT || 3000;

// load homepage
app.get("/mail", (req, res) => {
  res.sendFile("/index.html");
});
// when form submited.
app.post("/", (req, res) => {
  const messageObject = req.body;
  console.log(messageObject);
  sendMail(messageObject)
    .then((result) => {
      console.log(result);
      res.send("success");
    })
    .catch((error) => console.error(error));
});

// listening
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
