const router = require("express").Router();
const postsController = require("../../controllers/postsController.js");

router.route("/")
    .get(postsController.findAll)
    .post(postsController.create);

router
    .route("/:id")
    .get(postsController.finById)
    .put(postsController.update)
    .delete(postsController.remove);

module.exports = router;