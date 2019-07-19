const axios = require("axios");
const router = require("express").Router();

router.get("/posts", (req, res) => {
  axios
  //  We have to put here the dataBase info. 
    .get("", { params: req.query }) 
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
