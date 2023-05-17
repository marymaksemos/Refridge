const Recipe = require('../../models/recipe-model');

module.exports = {
    // Get all recipes
    getAll: async (req, res) => {
        try {
            const recipes = await Recipe.find();
            res.send(recipes);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    // Get one recipe
    getOne: async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id);
            res.send(recipe);
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    // Create recipe
    create: async (req, res) => {
        const recipe = new Recipe({
            title: req.body.title,
            instructions: req.body.instructions
        })

        try {
            await recipe.save();
            res.status(201).send(recipe);
        } catch (error) {
            res.status(400).send(error.message)
        }
    }


    // Update recipe
    // Delete recipe
};