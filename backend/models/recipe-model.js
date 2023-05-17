const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        reqired: false
    },
    ingredients: [
        {
            quantity: String,
            ingredient: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            }
        }
    ]
});

module.exports = mongoose.model("Recipe", recipeSchema)