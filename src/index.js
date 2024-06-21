//thired parti modules
const express = require("express");
require("dotenv/config");

//custom library and modules
const { connectDatabase } = require("./api/v1/libraries");
const config = require("./config");
const { UserRouts } = require("./api/v1/routs");

//thired party component and modules
const app = express();
const PORT = config.PORT || 5000;

// accept json
app.use(express.json());

//base URL
app.get("/", (req, res) => {
  res.status(200).json({ status: true, message: "Welcome to my API" });
});

//user routes
app.use("/api/users", UserRouts);

// -------------------- Error route --------------------
app.use((req, res) => {
  res.status(404).json({ status: false, message: "Not Found!" });
});

//start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDatabase()
    .then(() => console.log("Connected to Database!"))
    .catch((err) => console.log(err));
});
