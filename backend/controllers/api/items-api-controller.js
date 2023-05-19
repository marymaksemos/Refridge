const Item = require('./../../models/fridgeItem-model');

module.exports = {
  // Get all items
  getAll: async (req, res) => {
    try {
      const items = await Item.find();
      res.send(items);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Get one item
  getOne: async (req, res) => {
    try {
      const items = await Item.findById(req.params.id);
      res.send(items);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Create item
  create: async (req, res) => {
    const item = new Item({
      name: req.body.name,
      quantity: req.body.quantity,
      expirationDate: req.body.expirationDate,
    });

    try {
      await item.save();
      res.status(201).send(item);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  // Update item
  update: async (req, res) => {
    try {
      const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(item);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Delete item
  delete: async (req, res) => {
    try {
      await Item.findByIdAndDelete(req.params.id);
      res.redirect('/items'); // You may need to adjust this URL
    } catch (error) {
      res.render('error', { message: error.message });
    }
  },
};
