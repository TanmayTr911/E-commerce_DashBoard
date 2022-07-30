const express = require("express");
require("./db/config");
const cors = require("cors");
// const multer = require("multer");
const User = require("./db/users");
const Product = require("./db/prod");

let app = express();

app.use(express.json());
app.use(cors());

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname);
//     },
//   }),
// }).single("img2");

app.post("/reg", async (req, res) => {
  let user = new User(req.body);
  let resu = await user.save();
  // console.log(req.files);
  resu = resu.toObject();
  delete resu.pass;
  res.send(resu);
});

app.post("/login", async (req, res) => {
  // console.log(req.body);
  if (req.body.email && req.body.pass) {
    let user = await User.findOne(req.body).select("-pass");
    if (user) {
      res.send(user);
    } else {
      res.send({ res: "not found" });
    }
  } else {
    res.send({ res: "not found" });
  }
});

app.post("/add-prod", async (req, res) => {
  let prod = new Product(req.body);
  let r = await prod.save();

  res.send(r);
});

app.get("", async (req, res) => {
  let prods = await Product.find().sort({ name: "asc" });
  if (prods.length > 0) {
    res.send(prods);
  } else {
    res.send({ res: "no response" });
  }
});

app.put("/update", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.body.i },
    {
      $set: req.body,
    }
  );
});

app.put("/prof", async (req, res) => {
  let result = await User.updateOne(
    { _id: req.body.id },
    {
      $set: req.body,
    }
  );
});

app.listen(3500);
