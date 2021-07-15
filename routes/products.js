const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({dest: 'uploads/'});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cd(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file)
  }
}) 

router.get("/", upload.single('productImage'), (req, res, next) => {
  console.log(req.file);
  Product.find()
  .select("name price _id")
  .exec()
  .then(docs => {
      const response = {
          count: docs.length,
          products: doc.map(doc => {
              return {
                  name: doc.name,
                  price: doc.price,
                  _id: doc._id,
                  url: {
                      type: 'GET',
                      url: 'http://localhost:3000/products/' + doc_id 
                  }
              }
          })
      }
  })
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((doc) => {
      console.log("From databse", doc);
      if (doc) {
        console.log(doc);
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "No valid" });
      }
    }) 
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "You pssed and id",
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "You pssed and id",
  });
});

module.exports = router;
