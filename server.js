if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");

const app = express();
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("views", "views");

app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connnected to Mongoose"));

app.use(indexRouter);

app.listen(process.env.PORT || 3000);
