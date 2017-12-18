const express = require("express");

const Gifted = require("../models/gifted-models");


const router = express.Router();


router.get("/gifted", (req, res, next) => {
    Gifted
      .find()
      .limit(25)
      .exec()
      .then((giftedResults) => {
          // respond with the QUERY RESULTS in the JSON format
          res.status(200).json(giftedResults);
      })
      .catch((err) => {
          console.log("GET /gifted ERROR!");
          console.log(err);

          // respond with an ERROR MESSAGE in the JSON format
          res.status(500).json({ error: "Gifted list database error" });
      });
}); // GET /gifted


router.post("/gifted", (req, res, next) => {
    const theGifted = new Gifted({
        name: req.body.name,
        relationship: req.body.relationship,
        interest: req.body.interest,
        priceRange: req.body.priceRange,
        giftLink: req.body.giftLink,
        // owner: req.user._id
    });

    theGifted.save()
      .then(() => {
          // respond with the NEW GIFTED in the JSON format
          res.status(200).json(theGifted);
      })
      .catch((err) => {
          console.log("POST /gifted ERROR!");
          console.log(err);

          // 400 status code if validation error
          if (err.errors) {
              // respond with an VALIDATION ERRORS in the JSON format
              res.status(400).json(err.errors);
          }
          else {
              // respond with an ERROR MESSAGE in the JSON format
              res.status(500).json({ error: "Gifted save database error" });
          }
      });
}); // POST /gifted


router.get("/gifted/:id", (req, res, next) => {
    if (req.user === undefined) {
        res.status(400).json({ error: "Not logged in" });
        return;
    }

    Gifted.findById(req.params.id)
      .then((giftedFromDb) => {
          // 404 if gifted doesn't exist
          if (giftedFromDb === null) {
              // respond with an ERROR MESSAGE in the JSON format
              res.status(404).json({ error: "Gifted not found" });
          }
          else {
              // respond with the QUERY RESULTS in the JSON format
              res.status(200).json(giftedFromDb);
          }
      })
      .catch((err) => {
          console.log("GET /gifted/:id ERROR!");
          console.log(err);

          // respond with an ERROR MESSAGE in the JSON format
          res.status(500).json({ error: "Gifted details database error" });
      });
}); // GET /gifted/:id


router.delete("/gifted/:id", (req, res, next) => {
    if (req.user === undefined) {
        res.status(400).json({ error: "Not logged in" });
        return;
    }

    Gifted.findByIdAndRemove(req.params.id)
      .then((giftedFromDb) => {
          if (giftedFromDb === null) {
              // respond with an ERROR MESSAGE in the JSON format
              res.status(404).json({ error: "Gifted not found" });
          }
          else {
              // respond with the QUERY RESULTS in the JSON format
              res.status(200).json(giftedFromDb);
          }
      })
      .catch((err) => {
          console.log("DELETE /gifted/:id ERROR!");
          console.log(err);

          // respond with an ERROR MESSAGE in the JSON format
          res.status(500).json({ error: "Gifted delete database error" });
      });
}); // DELETE /gifted/:id


router.put("/gifted/:id", (req, res, next) => {
    Gifted.findById(req.params.id)
      .then((giftedFromDb) => {
          if (giftedFromDb === null) {
              // respond with an ERROR MESSAGE in the JSON format
              res.status(404).json({ error: "Gifted not found" });
              return;
          }

          giftedFromDb.set({
            name: req.body.name,
            relationship: req.body.relationship,
            interest: req.body.interest,
            priceRange: req.body.priceRange,
            giftLink: req.body.giftLink
          });

          return giftedFromDb.save();
      })
      .then((giftedFromDb) => {
          // respond with the QUERY RESULTS in the JSON format
          res.status(200).json(giftedFromDb);
      })
      .catch((err) => {
          console.log("PUT /gifted/:id ERROR!");
          console.log(err);

          // 400 status code if validation error
          if (err.errors) {
              // respond with an VALIDATION ERRORS in the JSON format
              res.status(400).json(err.errors);
          }
          else {
              // respond with an ERROR MESSAGE in the JSON format
              res.status(500).json({ error: "Gifted update database error" });
          }
      });
}); // PUT /gifted/:id

router.get("/usergifted", (req, res, next) => {
    Gifted
      .find({ owner: req.user._id })
      .limit(25)
      .exec()
      .then((giftedResults) => {
          // respond with the QUERY RESULTS in the JSON format
          res.status(200).json(giftedResults);
      })
      .catch((err) => {
          console.log("GET /usergifted ERROR!");
          console.log(err);

          // respond with an ERROR MESSAGE in the JSON format
          res.status(500).json({ error: "Gifted list database error" });
      });
}); // GET /usergifted




module.exports = router;
