const router = require("../../node_modules/express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

router.route("/:id")
.delete(booksController.remove);


module.exports = router;