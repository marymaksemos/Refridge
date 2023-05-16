const Item = require('./../../models/fridgeItem-model')

module.exports = {
    // Get all items
    getAll: async (req, res) => {
        try {
            const items = await Item.find();
            res.send(items);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    // Get one item
    getOne: async (req, res) => {
        try {
            const items = await Item.findById(req.params.id);
            res.send(items);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    // Create item
    create: async (req, res) => {
        const item = new Item({
            name: req.body.name,
            quantity: req.body.quantity,
            expirationDate: req.body.expirationDate
        })

        try {
            await item.save();
            res.status(201).send(item);
        } catch (error) {
            res.status(400).send(error.message)
        }
    },


    // Update item
    update: async (req, res) => {
        try {
            const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.send(item);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    

    
    // Delete item
    delete: async (req, res) => {
        try {
            const item = await Item.findByIdAndRemove(req.params.id);
            if (!item) {
                res.status(404).send("No item found");
            } else {
                res.status(200).send("Item deleted successfully");
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
};