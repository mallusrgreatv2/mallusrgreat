const express = require("express");
const app = express();

app.use(express.static("views"));
app.set('view engine', 'ejs')
app.get("/", (req, res) => {
  if (req.query.secret === "hello") return res.render("secret");
  res.render("index");
});

app.use((req, res) => {
  res.render('notfound');
});
app.listen(3000, () => console.log(`%c The server is ready, senpai`, "color: yellow;"));
