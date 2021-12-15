const express = require("express");
const app = express();
const path = require("path");
const port = 4000;
const serverRouter = require("./routes/serverRouter");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join("public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", serverRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
