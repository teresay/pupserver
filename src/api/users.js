const router = require("express").Router();
const { Dog, User } = require("../db/models/index");
module.exports = router;

//get all users from the db
router.get("/", (req, res, next) => {
  try {
    User.findAll().then(allUsers => res.json(allUsers));
  } catch (err) {
    next(err);
  }
});

//get one user by id
router.get("/:userId", (req, res, next) => {
  try {
    User.findById(req.params.userId).then(user => res.json(user));
  } catch (err) {
    next(err);
  }
});

//post user's new location to db
router.put("/location/:userId", (req, res, next) => {
  try {
    User.update(
      { location: req.body.location },
      { where: { id: req.params.userId } }
    ).then(updated => res.json(updated));
  } catch (err) {
    next(err);
  }
});
