const express = require("express");
const router = express.Router();
const morgan = require('morgan');

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling get request order.",
  });
});

router.post("/", (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quatity: req.body.quatity
    }
  res.status(200).json({
    message: "Handling post request order.",
    order: order
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.productId;
  if (id == "special") {
    res.status(200).json({
      message: "You discoverd the order special id",
    });
  } else {
    res.status(200).json({
      message: "You pssed and id",
    });
  }
});

router.patch("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "You pssed and id",
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "You pssed and id",
  });
});

module.exports = router;
