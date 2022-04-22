<<<<< HEAD
const express = require("express");
const app = express();
const api = require("./routes/index");

const cors = require("cors");
app.use(cors())

app.use("/api", api);

app.listen(3001, () =>
  console.log("Node.js Server is ruuning on port 3001...")
=======
const express = require('express');
const app = express();
const api = require('./routes/index');
const PORT = 3001;

const cors = require('cors');
app.use(cors());

app.use(express.static('shop_images'));

app.use('/api', api);

app.listen(PORT, () =>
  console.log('Node.js Server is ruuning on port 3001...'),
>>>>>>> e5824205ad86236c9dea334db8d89bb3486a02b2
);
