const express = require("express");
const app = express();
const port = 3000;

const c_beranda = require("./controller/c_beranda");

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./view-html");
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.get("/", c_beranda.index);

app.listen(port, () => {
  console.log(`Aplikasi sudah siap, buka http://localhost:${port}`);
});
