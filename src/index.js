const express = require("express");
const connection = require("./connection");
const app = express();

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

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});
