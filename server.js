
const express = require("express");

const app = express();
app.use(express.json());

app.get("/user", (req, res) => {
  res.json({
    name: "arun",
    age: 25,
  });
});

app.get("/id", (req, res) => {
  const id = Number(req.query.id);

  if (id === 22) {
    return res.json({
      name: "boopathiv",
      age: 21,
    });
  }

  return res.status(404).json({
    message: "User not found",
  });
});

const PORT = 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

