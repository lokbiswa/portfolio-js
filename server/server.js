const express = require("express");
const bodyParser = require("body-parser");
const sendMail = require("./mailer");
const path = require("path");

app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public/")));

// enviroment port or 3000
const PORT = process.env.PORT || 3000;

// load homepage
app.get("/", (req, res) => {
  res.sendFile("/index.html");
});
// when form submited.
app.post("/", (req, res) => {
  const messageObject = req.body;
  if (messageObject) {
    console.log(messageObject);
    sendMail(messageObject)
      .then((result) => {
        console.log(result);
        res.send("success"); //if sucessful send
      })
      .catch((error) => console.error(error));
  }
  res.send("can't send empty message");
});

// listening
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
