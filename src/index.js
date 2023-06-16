const express = require("express");
const connection = require("./connection");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/product", (req, res) => {
  const id = req.query.id;
  const query = `SELECT * FROM products WHERE id = ${id}`;
  connection.query(query, (err, result, fields) => {
    if (!err) {
      console.log(query);
      res.status(200).send(result);
    } else {
      console.log(err);
      res.status(400).send(fields);
    }
  });
});

app.get("/login", (_req, res) => {
  res.sendFile("login.html", { root: __dirname });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Verificar las credenciales del usuario en la base de datos
  const query = `SELECT * FROM users WHERE name = '${username}' AND password = '${password}'`;
  connection.query(query, (err, result) => {
    if (!err && result.length > 0) {
      const response = {
        success: true,
        message: "Login successful",
        username: result[0].name,
      };
      res.status(200).json(response);
    } else {
      const response = {
        success: false,
        message: "Login failed",
      };
      res.status(401).json(response);
    }
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});