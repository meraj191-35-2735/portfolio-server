const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  res.send("Server is running");
  await res.download("./merajResume.pdf");
});

app.listen(port, () => {
  console.log(`My Portfolio Server is Run On ${port}`);
});
