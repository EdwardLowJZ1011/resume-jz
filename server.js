require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");
const userRoutes = require("./route/userRoutes");
const connectDB = require("./connectDB");

const app = express();

connectDB();
app.use(express.json());
app.use(cors());

app.use("/", contactRoute);
app.use('/api/users', userRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listing to port 5000 only`));
