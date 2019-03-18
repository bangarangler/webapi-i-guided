const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Hello Web17");
});

server.listen(4000, () => {
  console.log("/n** API up and running on port 4000 **");
});
