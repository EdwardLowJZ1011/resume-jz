require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");
const firebaseRoute = require("./route/firebaseConnector");
const userRoutes = require("./route/userRoutes");
const connectDB = require("./connectDB");

const app = express();

connectDB();
app.use(express.json());
app.use(cors());

app.use("/", contactRoute);
app.use("/api/firebase", firebaseRoute);
app.use('/api/users', userRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const port = process.env.PORT || 5050;
app.listen(port, console.log(`server listing to port 5050 only`));
