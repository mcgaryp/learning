const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  // TODO: Set current directory
  res.render(__dirname + "/pages/index")
})

const port = 4000
app.listen(port, () => console.log(`Server running on ${port}`));