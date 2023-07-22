const express = require("express");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");
// const port = 3000;

app.use(express.static("public"));

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/", adminRoutes);
app.use("/", authRoutes);

// app.get("/", (req, res) => res.send("Hello World!"));
// app.listen(port, () => console.log(`Server listening on port ${port}!`));
app.listen(3000, () =>
  console.log(`Server listening on http://localhost:3000`)
);
