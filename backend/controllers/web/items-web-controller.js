const Item = require('./../../models/fridgeItem-model')

module.exports = {

    // Show all
    showAll: async (req, res) => {
        try {
            const items = await Item.find().lean();
            res.render("items/index", { items })

        } catch (error) {
            res.render("error", { message: error.message })
        }
    },

    // Show one
    showOne: async (req, res) => {
        try {
            const item = await Item.findById(req.params.id);
            res.render("items/single", item)

        } catch (error) {
            res.render("error", { message: error.message })
        }
    },

    // Show create form
    showCreateForm: (req, res) => {
        res.render("items/new");
    },

    // Create item
    createItem: async (req, res) => {
        try {
            const newItem = new Item(req.body);
            await newItem.save();
            res.redirect('/');
        } catch (error) {
            res.render("error", { message: error.message })
        }
    },

    // Show edit form
    showEditForm: async (req, res) => {
        try {
            console.log("ID from request: ", req.params.id); // This will log the ID received from the request
            const item = await Item.findById(req.params.id);
            console.log("Item from database: ", item); // This will log the item found in the database
            if (!item) {
                res.status(404).send('Item not found');
            } else {
                res.render('items/edit', { item: item.toObject() }); // Convert item to a plain JavaScript object
            }
        } catch (error) {
            console.log("Error: ", error); // This will log any errors
            res.status(500).send(error.message);
        }
    },

    // Update item
    updateItem: async (req, res) => {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/items');
    },

    // Delete item
    deleteItem: async (req, res) => {
        try {
            await Item.findByIdAndDelete(req.params.id);
            res.redirect('/items'); // You may need to adjust this URL
        } catch (error) {
            res.render("error", { message: error.message })
        }
    }
}
