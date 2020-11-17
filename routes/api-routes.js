// Require models
let db = require("../models");

// Routes
module.exports = function (app) {

    // GET route to get all foods
    app.get("/api/burgers/current", function (req, res) {
        db.Burgers.findAll({}).then(function (dbBurger) {
            res.json(dbBurger);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // POST route for creating new food
    app.post("/api/burgers", function (req, res) {
        db.burgers.create({
            name: req.body.name
        }).then(function (dbBurger) {
            res.json(dbBurger);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // PUT route for updating food
    app.put("/burgers/:id", function (req, res) {
        db.burgers.update({
            name: req.body.name
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // DELETE route for deleting food
    app.delete("/burgers/:id", function (req, res) {
        db.burgers.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger);
        }).catch(function (err) {
            res.json(err);
        });
    });
}