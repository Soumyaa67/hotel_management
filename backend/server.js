require("dotenv").config();


const express = require("express");
const cors = require("cors");
require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/booking", require("./routes/bookingRoutes"));

app.listen(3000, () => {
  console.log("Server running on port 3000");

  
});
