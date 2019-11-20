const db = require("../models");

testobject = {
    property: "values"
}

module.exports = {
    searchBook: function (req, res) {
        res.json(testobject);
    },

    create: function(req, res) {
        db.Book
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

      findAll: function(req, res) {
        db.Book
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Book
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}