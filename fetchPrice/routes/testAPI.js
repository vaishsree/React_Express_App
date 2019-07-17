const express = require("express");
const app = express();
const router = express.Router();
const axios = require("axios");

//Can use any stock price api end point
const url =
  "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo";
let result = null;

const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    result = JSON.stringify(data);

    router.get("/", function(req, res, next) {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
};

getData(url);

module.exports = router;
