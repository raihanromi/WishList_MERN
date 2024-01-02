const express = require("express");
const app = express();
const mongooes = require("mongoose");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const errorMiddle = require("./middleware/errorMiddleware");
const cors = require("cors");

//allowing all ip to access this server 
//TODO: config so that only your fn can access the api
app.use(cors(process.env.FrontEnd));
app.use(express.json());
require("dotenv").config();


//first end point
app.get("/", (req, res) => {
  res.send("your first page");
});

app.use(errorMiddle);

//routes
app.use("/products", productRoute);
//app.use("/user", userRoute);

//DB connection and server opening
mongooes
  .connect(process.env.DB)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log("node api is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
