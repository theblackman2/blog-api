const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//erase cors
app.use(cors());

//access request body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.use("/posts", require("./routes/posts"));

app.all("*", (req, res) => {
  res.status(404).send("The request route doesn't exists");
});

app.listen(PORT, () => {
  console.log(`The server is listening to http://localhost:${PORT}`);
});
