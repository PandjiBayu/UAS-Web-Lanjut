let watches = require("../models/watches.json");

class watchController {
  getAllWatch(req, res) {
    try {
      res.status(200).json({
        data: watches,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  getOneWatch(req, res) {
    try {
      const { id } = req.params;
      const getWatch = watches.find((watch) => watch.id === eval(id));

      res.status(200).json({
        data: getWatch,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  createWatch(req, res) {
    try {
      const watch = req.body;
      watches.push(watch);

      res.send(
        `Data with the id ${watch.id} and brand ${watch.merk} has been added to database.`
      );
      // res.status(201).json({
      //   data: req.body,
      // });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  updateWatch(req, res) {
    try {
      watches = watches.map((watch) =>
        watch.id === eval(req.params.id) ? req.body : watch
      );
      res.status(201).json({
        data: watches,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  updateSomeWatch(req, res) {
    try {
      const { id } = req.params;
      const { merk, price } = req.body;
      const watch = watches.find((watch) => watch.id === eval(id));

      if (merk) watch.merk = merk;
      if (price) watch.price = price;

      res.send(`Data with the id ${id} has been updated.`);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  deleteWatch(req, res) {
    try {
      const { id } = req.params;
      watches = watches.filter((watch) => watch.id !== eval(id));

      res.send(`Data with the id ${id} has been deleted from database.`);
      // res.status(201).json({
      //   data: watches,
      // });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = new watchController();
